# Go High Level Integration Setup

This website is configured to send leads directly to your Go High Level CRM.

## Setup Instructions

### 1. Create Custom Fields in Go High Level

Before setting up the integration, create these custom fields in GHL:

1. Log into Go High Level
2. Navigate to **Settings > Custom Fields**
3. Create the following custom fields:
   
   **Required Fields:**
   - Service Needed: `service_needed` (Text/Dropdown)
   - Project Details: `project_details` (Text Area)
   
   **UTM Tracking Fields (for Meta/Google Ads tracking):**
   - UTM Source: `utm_source` (Text)
   - UTM Medium: `utm_medium` (Text)
   - UTM Campaign: `utm_campaign` (Text)
   - UTM Content: `utm_content` (Text) - optional
   - UTM Term: `utm_term` (Text) - optional

### 2. Get Your Go High Level Credentials

1. Log into your Go High Level account
2. Navigate to **Settings > Integrations > API Settings** (or **Settings > API Keys**)
3. Create a new Private Integration App or API key:
   - For Sub-Account level: Create a Private App
   - Name it something like "Website Lead Integration"
   - Select the required scopes: `contacts.write`, `contacts.readonly`
4. Copy the generated API key/token

### 3. Get Your Location ID

1. In Go High Level, go to **Settings > Business Profile > Company Info**
2. Copy your Location ID (also called Account ID)

### 4. Configure Environment Variables

Edit the `.env.local` file in the project root and add your credentials:

```env
GHL_API_KEY=your_actual_api_key_here
GHL_LOCATION_ID=your_actual_location_id_here
```

### 5. Restart the Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## How It Works

The integration sends leads directly to Go High Level using the v2 API to create contacts.

### Lead Data Sent

- **Contact Information**: Name, Email, Phone
- **Lead Source**: Identifies where the lead came from (contact form, exit popup, etc.)
- **Service Needed**: Mapped to "service_needed" custom field in GHL
- **Project Details**: Message content is mapped to "project_details" custom field
- **Tags**: Service type added as a tag for easy filtering

### Lead Sources

The system tracks different lead sources:
- `contact-form`: Main contact form
- `exit-intent-popup`: Exit intent popup for discount

## UTM Tracking for Meta & Google Ads

The system automatically tracks leads from paid advertising campaigns using UTM parameters.

### Setting Up Meta (Facebook/Instagram) Ads:

1. In Meta Ads Manager, add UTM parameters to your ad URLs:
   ```
   https://yoursite.com?utm_source=facebook&utm_medium=paid&utm_campaign=summer_2024
   ```

2. Common Meta UTM configurations:
   - Facebook Ads: `utm_source=facebook&utm_medium=paid`
   - Instagram Ads: `utm_source=instagram&utm_medium=paid`
   - Meta Ads (both): `utm_source=meta&utm_medium=paid`

3. The system will automatically:
   - Capture these parameters when someone visits from your ad
   - Store them in the browser session
   - Include them with the lead submission
   - Tag the lead source as "Facebook Ads", "Instagram Ads", or "Meta Ads"

### Setting Up Google Ads:

Use: `utm_source=google&utm_medium=cpc&utm_campaign=your_campaign`

### What Gets Tracked:

- **Lead Source**: Automatically identified (Facebook Ads, Instagram Ads, Google Ads, etc.)
- **Campaign Details**: Which specific campaign drove the lead
- **Ad Content**: Which ad variation performed best (using utm_content)
- **Keywords**: For Google Ads (using utm_term)

## Testing

To test the integration:

1. Fill out the contact form on your website
2. Check Go High Level contacts to verify the lead was created
3. Check the browser console for any error messages
4. Server logs will show if there are configuration issues

### Testing UTM Tracking:

1. Visit your site with test UTM parameters:
   ```
   https://yoursite.com?utm_source=facebook&utm_medium=paid&utm_campaign=test
   ```
2. Submit a lead form
3. Check in GHL that the UTM fields are populated

## Troubleshooting

### Leads Not Appearing in GHL

1. Check that your API key is valid and has proper permissions
2. Verify the Location ID matches your GHL account
3. Check browser console for error messages
4. Ensure `.env.local` file is properly formatted

### Getting the Correct API Key

Go High Level has two types of API access:
1. **Agency Level**: For agency-wide integrations
2. **Sub-Account Level**: For specific location integrations (most common)

For Sub-Account/Location API Key:
1. Go to **Settings > Integrations > API Settings**
2. Create a "Private Integration App"
3. Grant permissions: `contacts.write`, `contacts.readonly`
4. Copy the generated Bearer token

### API Key Permissions

Your API key needs these permissions:
- `contacts.write`: To create new contacts
- `contacts.readonly`: To check existing contacts
- Custom Fields access (if using custom fields)

### Common Issues

- **"Api key is invalid"**: You may be using an old v1 API key. Create a new Private Integration App
- **"Server configuration error"**: Environment variables not set
- **401 Unauthorized**: Invalid or expired API key
- **400 Bad Request**: Invalid Location ID or data format
- **Location ID mismatch**: Ensure the Location ID matches the sub-account where the API key was created

## Security

- API keys are stored in `.env.local` which is not committed to git
- All form submissions require consent checkbox
- Server-side validation ensures required fields are present
- Fallback logging ensures no leads are lost