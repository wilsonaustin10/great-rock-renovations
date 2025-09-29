import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      name, 
      firstName,
      lastName,
      email, 
      phone, 
      service, 
      message,
      source = 'website',
      consent,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term
    } = body;

    // Support both single 'name' field and separate firstName/lastName fields
    if ((!name && (!firstName || !lastName)) || !email) {
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

    // Try to use Private Integration token first, fallback to Location Access Token
    const ghlApiKey = process.env.GHL_API_KEY || process.env.GHL_LOCATION_ACCESS_TOKEN;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    if (!ghlApiKey || !ghlLocationId) {
      console.error('Missing Go High Level configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Determine which type of token we're using
    const isLocationToken = ghlApiKey.startsWith('eyJ');

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

    // Determine lead source based on UTM parameters
    let leadSource = source;
    if (utm_source) {
      if (utm_source.toLowerCase().includes('facebook') || utm_source.toLowerCase().includes('fb')) {
        leadSource = 'Facebook Ads';
      } else if (utm_source.toLowerCase().includes('instagram') || utm_source.toLowerCase().includes('ig')) {
        leadSource = 'Instagram Ads';
      } else if (utm_source.toLowerCase().includes('google')) {
        leadSource = 'Google Ads';
      } else if (utm_source.toLowerCase().includes('meta')) {
        leadSource = 'Meta Ads';
      }
    }

    // Build custom fields array
    const customFields = [
      {
        key: 'service_needed',  // This should match your GHL custom field key
        value: formattedService
      }
    ];

    // Add project details as a custom field if you have one set up for it
    if (message) {
      customFields.push({
        key: 'project_details',  // You'll need to create this custom field in GHL
        value: message
      });
    }

    // Add UTM tracking fields
    if (utm_source) {
      customFields.push({
        key: 'utm_source',
        value: utm_source
      });
    }
    if (utm_medium) {
      customFields.push({
        key: 'utm_medium',
        value: utm_medium
      });
    }
    if (utm_campaign) {
      customFields.push({
        key: 'utm_campaign', 
        value: utm_campaign
      });
    }
    if (utm_content) {
      customFields.push({
        key: 'utm_content',
        value: utm_content
      });
    }
    if (utm_term) {
      customFields.push({
        key: 'utm_term',
        value: utm_term
      });
    }

    // Use separate firstName/lastName if provided, otherwise split the name field
    const contactFirstName = firstName || (name ? name.split(' ')[0] : '');
    const contactLastName = lastName || (name ? name.split(' ').slice(1).join(' ') : '');

    const leadData = {
      locationId: ghlLocationId,
      firstName: contactFirstName,
      lastName: contactLastName,
      email,
      phone: phone || '',
      source: leadSource,
      tags: [service || 'general-inquiry'],
      customFields: customFields
    };

    try {
      // Use different endpoint based on token type
      const apiUrl = isLocationToken 
        ? 'https://services.leadconnectorhq.com/contacts/'
        : 'https://services.leadconnectorhq.com/contacts/';
      
      const ghlResponse = await fetch(apiUrl, {
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
        console.error('GHL API Error:', {
          status: ghlResponse.status,
          statusText: ghlResponse.statusText,
          error: errorText,
          tokenType: isLocationToken ? 'Location Token' : 'Private Integration',
          endpoint: apiUrl
        });
        
        // Log the lead data as fallback
        const fallbackData = {
          ...leadData,
          error: `Failed to sync with CRM (${ghlResponse.status})`,
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

      const responseData = await ghlResponse.json();
      
      return NextResponse.json({
        success: true,
        message: 'Lead successfully submitted',
        contactId: responseData.contact?.id || responseData.id
      });

    } catch (apiError) {
      console.error('GHL API call failed:', apiError);
      
      // Log the lead data as fallback
      const fallbackData = {
        ...leadData,
        error: 'API call failed',
        timestamp: new Date().toISOString()
      };
      console.log('Fallback lead data:', JSON.stringify(fallbackData, null, 2));
      
      return NextResponse.json(
        { 
          success: false,
          message: 'We received your information but there was an issue submitting it. We will contact you shortly.',
          fallback: true
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead submission' },
      { status: 500 }
    );
  }
}