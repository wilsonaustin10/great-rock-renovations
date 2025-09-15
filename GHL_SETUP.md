# Go High Level Integration Setup

This website is configured to send leads directly to your Go High Level CRM.

## Setup Instructions

### 1. Create Custom Field in Go High Level

Before setting up the integration, create a custom field in GHL:

1. Log into Go High Level
2. Navigate to **Settings > Custom Fields**
3. Create a new custom field:
   - Field Name: `Service Needed`
   - Field Key: `service_needed` (this must match exactly)
   - Field Type: Text or Dropdown (with your service options)

### 2. Get Your Go High Level Credentials

1. Log into your Go High Level account
2. Navigate to **Settings > Business Profile > API Keys**
3. Create a new API key or use an existing one
4. Copy the API key

### 3. Get Your Location ID

1. In Go High Level, go to **Settings > Business Profile > Company Info**
2. Copy your Location ID (also called Account ID)

### 4. Optional: Set Up a Webhook (Recommended)

For redundancy, you can also set up a webhook:

1. In Go High Level, create a new workflow
2. Set the trigger to "Webhook"
3. Copy the webhook URL provided

### 5. Configure Environment Variables

Edit the `.env.local` file in the project root and add your credentials:

```env
GHL_API_KEY=your_actual_api_key_here
GHL_LOCATION_ID=your_actual_location_id_here
GHL_WEBHOOK_URL=your_webhook_url_here (optional)
```

### 6. Restart the Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## How It Works

The integration sends leads to Go High Level in two ways:

1. **Primary Method**: Direct API call to create a contact
2. **Fallback Method**: Webhook (if configured)

### Lead Data Sent

- **Contact Information**: Name, Email, Phone
- **Lead Source**: Identifies where the lead came from (contact form, exit popup, etc.)
- **Service Needed**: Mapped to "service_needed" custom field in GHL
- **Project Details/Notes**: Message content is mapped to the notes field
- **Tags**: Service type added as a tag for easy filtering
- **Consent**: Confirmation they agreed to terms

### Lead Sources

The system tracks different lead sources:
- `contact-form`: Main contact form
- `exit-intent-popup`: Exit intent popup for discount

## Testing

To test the integration:

1. Fill out the contact form on your website
2. Check Go High Level contacts to verify the lead was created
3. Check the browser console for any error messages
4. Server logs will show if there are configuration issues

## Troubleshooting

### Leads Not Appearing in GHL

1. Check that your API key is valid and has proper permissions
2. Verify the Location ID matches your GHL account
3. Check browser console for error messages
4. Ensure `.env.local` file is properly formatted

### API Key Permissions

Your API key needs these permissions:
- Contacts: Read & Write
- Custom Fields: Read (if using custom fields)

### Common Issues

- **"Server configuration error"**: Environment variables not set
- **401 Unauthorized**: Invalid API key
- **400 Bad Request**: Invalid Location ID or data format

## Security

- API keys are stored in `.env.local` which is not committed to git
- All form submissions require consent checkbox
- Server-side validation ensures required fields are present
- Fallback logging ensures no leads are lost