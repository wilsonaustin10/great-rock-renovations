import { NextResponse } from 'next/server';
import { google } from 'googleapis';

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

    // Get Google Sheets credentials from environment variables
    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const serviceAccountKeyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

    if (!sheetsId || !serviceAccountKeyString) {
      console.error('Missing Google Sheets configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse the service account key
    let serviceAccountKey;
    try {
      serviceAccountKey = JSON.parse(serviceAccountKeyString);
    } catch (parseError) {
      console.error('Failed to parse service account key:', parseError);
      return NextResponse.json(
        { error: 'Invalid service account configuration' },
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

    // Use separate firstName/lastName if provided, otherwise split the name field
    const contactFirstName = firstName || (name ? name.split(' ')[0] : '');
    const contactLastName = lastName || (name ? name.split(' ').slice(1).join(' ') : '');
    const fullName = `${contactFirstName} ${contactLastName}`.trim();

    try {
      // Initialize the Google Sheets API client
      const auth = new google.auth.JWT({
        email: serviceAccountKey.client_email,
        key: serviceAccountKey.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      // Authorize the client
      await auth.authorize();

      const sheets = google.sheets({ version: 'v4', auth });

      // Prepare the row data
      const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'America/Denver',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const rowData = [
        timestamp,                    // Timestamp
        fullName,                     // Full Name
        email,                        // Email
        phone || '',                  // Phone
        formattedService,             // Service
        message || '',                // Message/Project Details
        leadSource,                   // Lead Source
        utm_source || '',             // UTM Source
        utm_medium || '',             // UTM Medium
        utm_campaign || '',           // UTM Campaign
        utm_content || '',            // UTM Content
        utm_term || '',               // UTM Term
        consent ? 'Yes' : 'No'        // Consent
      ];

      // Append the data to the sheet
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: sheetsId,
        range: 'Sheet1!A:M', // Assuming data starts at column A
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowData]
        }
      });

      console.log('Successfully added lead to Google Sheets:', {
        spreadsheetId: sheetsId,
        range: response.data.updates?.updatedRange,
        rows: response.data.updates?.updatedRows
      });

      return NextResponse.json({
        success: true,
        message: 'Lead successfully submitted to Google Sheets',
        updates: response.data.updates
      });

    } catch (sheetsError: any) {
      console.error('Google Sheets API Error:', {
        message: sheetsError.message,
        code: sheetsError.code,
        errors: sheetsError.errors,
        response: sheetsError.response?.data
      });

      // Check for common permission errors
      if (sheetsError.code === 403 || sheetsError.message?.includes('PERMISSION_DENIED')) {
        console.error('\n⚠️  IMPORTANT: The Google Sheet needs to be shared with the service account email:');
        console.error(`   Email: ${serviceAccountKey.client_email}`);
        console.error('   Please go to your Google Sheet, click "Share", and add this email with Editor permissions.\n');
      }

      // Log the lead data as fallback
      const fallbackData = {
        timestamp: new Date().toISOString(),
        name: fullName,
        email,
        phone,
        service: formattedService,
        message,
        source: leadSource,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        consent,
        error: 'Failed to write to Google Sheets'
      };
      console.log('Fallback lead data:', JSON.stringify(fallbackData, null, 2));

      return NextResponse.json(
        { 
          success: false,
          message: 'We received your information but there was an issue saving it. We will contact you shortly.',
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