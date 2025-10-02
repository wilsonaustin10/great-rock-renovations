// Direct test of Google Sheets API
const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function testSheetsDirectly() {
  try {
    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const serviceAccountKeyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

    console.log('Sheet ID:', sheetsId);
    console.log('Service Account Key present:', !!serviceAccountKeyString);
    
    if (!sheetsId || !serviceAccountKeyString) {
      throw new Error('Missing configuration');
    }

    // Parse the service account key
    const serviceAccountKey = JSON.parse(serviceAccountKeyString);
    console.log('Service account email:', serviceAccountKey.client_email);
    console.log('Project ID:', serviceAccountKey.project_id);

    // Initialize the Google Sheets API client
    const auth = new google.auth.JWT(
      serviceAccountKey.client_email,
      undefined,
      serviceAccountKey.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    // Test reading the spreadsheet metadata
    console.log('\nTrying to get spreadsheet metadata...');
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: sheetsId
    });

    console.log('✅ Successfully connected to Google Sheets!');
    console.log('Spreadsheet title:', metadata.data.properties.title);
    console.log('Number of sheets:', metadata.data.sheets.length);

    // Try to append a test row
    console.log('\nTrying to append a test row...');
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsId,
      range: 'Sheet1!A:M',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          timestamp,
          'Test User',
          'test@example.com',
          '555-TEST',
          'Test Service',
          'Test message from direct API test',
          'API Test',
          'direct-test',
          'api',
          'test',
          '',
          '',
          'Yes'
        ]]
      }
    });

    console.log('✅ Successfully appended test row!');
    console.log('Updated range:', response.data.updates.updatedRange);
    console.log('Rows updated:', response.data.updates.updatedRows);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    if (error.code) {
      console.error('Error code:', error.code);
    }
  }
}

testSheetsDirectly();