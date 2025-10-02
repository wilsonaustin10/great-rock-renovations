// Test Google Sheets authentication
const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function testAuth() {
  try {
    const serviceAccountKeyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const serviceAccountKey = JSON.parse(serviceAccountKeyString);
    
    console.log('Creating JWT auth client...');
    const auth = new google.auth.JWT({
      email: serviceAccountKey.client_email,
      key: serviceAccountKey.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    console.log('Authorizing...');
    await auth.authorize();
    
    console.log('✅ Authorization successful!');
    
    const sheets = google.sheets({ version: 'v4', auth });
    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    
    console.log('\nTrying to read spreadsheet...');
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetsId,
      range: 'Sheet1!A1:M1'
    });
    
    console.log('✅ Successfully read spreadsheet!');
    console.log('First row:', response.data.values?.[0] || 'No data');
    
    // Try appending
    console.log('\nTrying to append data...');
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsId,
      range: 'Sheet1!A:M',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          'Auth Test',
          'auth@test.com',
          '555-AUTH',
          'Test Service',
          'Testing authentication',
          'Script Test',
          '', '', '', '', '',
          'Yes'
        ]]
      }
    });
    
    console.log('✅ Successfully appended data!');
    console.log('Updated:', appendResponse.data.updates);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response?.data) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

testAuth();