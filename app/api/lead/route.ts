import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      name, 
      email, 
      phone, 
      service, 
      message,
      source = 'website',
      consent 
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Consent is required' },
        { status: 400 }
      );
    }

    const ghlApiKey = process.env.GHL_API_KEY;
    const ghlLocationId = process.env.GHL_LOCATION_ID;
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!ghlApiKey || !ghlLocationId) {
      console.error('Missing Go High Level configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format service name for display
    const serviceLabels: Record<string, string> = {
      'deck': 'Deck Building',
      'fence': 'Fence Installation',
      'kitchen': 'Kitchen Remodeling',
      'bathroom': 'Bathroom Renovation',
      'roofing': 'Roofing Services',
      'general': 'General Contracting',
      'other': 'Other',
      'discount-request': 'Discount Request'
    };

    const formattedService = serviceLabels[service] || service || 'General Inquiry';

    const leadData = {
      locationId: ghlLocationId,
      firstName: name.split(' ')[0],
      lastName: name.split(' ').slice(1).join(' ') || '',
      email,
      phone: phone || '',
      source: source,
      tags: [service || 'general-inquiry'],
      notes: message || '',  // Map project details to notes field
      customFields: [
        {
          key: 'service_needed',  // This should match your GHL custom field key
          value: formattedService
        }
      ]
    };

    let leadCreated = false;
    let webhookSent = false;

    try {
      const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ghlApiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(leadData),
      });

      if (!ghlResponse.ok) {
        const errorText = await ghlResponse.text();
        console.error('GHL API Error:', errorText);
      } else {
        leadCreated = true;
      }
    } catch (apiError) {
      console.error('GHL API call failed:', apiError);
    }

    if (ghlWebhookUrl) {
      try {
        const webhookResponse = await fetch(ghlWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...leadData,
            timestamp: new Date().toISOString(),
            source: `${source}-webhook`
          }),
        });

        if (webhookResponse.ok) {
          webhookSent = true;
        }
      } catch (webhookError) {
        console.error('GHL Webhook failed:', webhookError);
      }
    }

    if (!leadCreated && !webhookSent) {
      console.error('Failed to send lead to GHL via both API and webhook');
      
      const fallbackData = {
        ...leadData,
        error: 'Failed to sync with CRM',
        timestamp: new Date().toISOString()
      };
      console.log('Fallback lead data:', JSON.stringify(fallbackData, null, 2));
      
      return NextResponse.json(
        { 
          success: false,
          message: 'We received your information but there was an issue with our CRM. We will contact you shortly.',
          fallback: true
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead successfully submitted',
      methods: {
        api: leadCreated,
        webhook: webhookSent
      }
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead submission' },
      { status: 500 }
    );
  }
}