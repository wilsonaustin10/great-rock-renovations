const https = require('https');

// Test configuration - Load from environment variables
const privateIntegrationToken = process.env.GHL_API_KEY || 'YOUR_PRIVATE_INTEGRATION_TOKEN';
const locationAccessToken = process.env.GHL_LOCATION_ACCESS_TOKEN || 'YOUR_LOCATION_ACCESS_TOKEN';
const locationId = process.env.GHL_LOCATION_ID || 'YOUR_LOCATION_ID';

// Check if tokens are placeholders
if (privateIntegrationToken.includes('YOUR_') && locationAccessToken.includes('YOUR_')) {
  console.error('❌ Error: Please set your GHL API credentials in environment variables or update this script.');
  console.log('\nUsage: GHL_API_KEY="your-key" GHL_LOCATION_ID="your-id" node scripts/test-ghl-api.js');
  process.exit(1);
}

// Test data
const testContact = {
  locationId: locationId,
  firstName: 'Test',
  lastName: 'Lead ' + new Date().getTime(),
  email: `test${Date.now()}@example.com`,
  phone: '+17135551234',
  source: 'API Test',
  tags: ['test'],
  customFields: [
    {
      key: 'service_needed',
      value: 'Test Service'
    }
  ]
};

function testToken(token, tokenType) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(testContact);
    
    const options = {
      hostname: 'services.leadconnectorhq.com',
      port: 443,
      path: '/contacts/',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
        'Content-Length': data.length
      }
    };

    console.log(`\nTesting ${tokenType}...`);
    console.log(`Token: ${token.substring(0, 20)}...`);

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        console.log(`Status Code: ${res.statusCode}`);
        console.log(`Status Message: ${res.statusMessage}`);
        
        if (res.statusCode === 200 || res.statusCode === 201) {
          console.log('✅ Success!');
          const parsed = JSON.parse(responseData);
          console.log('Contact ID:', parsed.contact?.id || parsed.id);
          resolve({ success: true, tokenType, contactId: parsed.contact?.id || parsed.id });
        } else {
          console.log('❌ Failed');
          console.log('Response:', responseData);
          resolve({ success: false, tokenType, error: responseData });
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Request error:', error.message);
      resolve({ success: false, tokenType, error: error.message });
    });

    req.write(data);
    req.end();
  });
}

async function runTests() {
  console.log('=================================');
  console.log('Testing GHL API Connections');
  console.log('=================================');
  
  // Test Private Integration Token
  const result1 = await testToken(privateIntegrationToken, 'Private Integration Token');
  
  // Test Location Access Token  
  const result2 = await testToken(locationAccessToken, 'Location Access Token');
  
  console.log('\n=================================');
  console.log('Summary:');
  console.log('=================================');
  console.log(`Private Integration Token: ${result1.success ? '✅ Working' : '❌ Failed'}`);
  console.log(`Location Access Token: ${result2.success ? '✅ Working' : '❌ Failed'}`);
  
  if (result1.success || result2.success) {
    console.log('\n✅ At least one API key is working correctly!');
    console.log('The application will use the working key automatically.');
  } else {
    console.log('\n❌ Both API keys failed. Please check:');
    console.log('1. API keys are valid and not expired');
    console.log('2. Location ID is correct');
    console.log('3. API permissions include contacts.write');
  }
}

runTests();