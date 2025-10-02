// Test script for Google Sheets API integration
// Run with: node scripts/test-sheets-api.js

async function testSheetsAPI() {
  const apiUrl = 'http://localhost:3000/api/lead/sheets';
  
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '555-0123',
    service: 'kitchen',
    message: 'This is a test submission to verify Google Sheets integration',
    source: 'test-script',
    consent: true,
    utm_source: 'test',
    utm_medium: 'script',
    utm_campaign: 'api-test'
  };

  console.log('Sending test lead to Google Sheets API...');
  console.log('Test data:', testData);
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('\n✅ Success! Lead submitted to Google Sheets');
      console.log('Response:', result);
    } else {
      console.log('\n❌ Error submitting lead');
      console.log('Status:', response.status);
      console.log('Response:', result);
    }
  } catch (error) {
    console.error('\n❌ Failed to connect to API:', error.message);
    console.log('\nMake sure the Next.js dev server is running (npm run dev)');
  }
}

testSheetsAPI();