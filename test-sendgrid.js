const sgMail = require('@sendgrid/mail');

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function testSendGrid() {
    try {
        console.log('Testing SendGrid configuration...');
        console.log('API Key exists:', !!process.env.SENDGRID_API_KEY);
        console.log('API Key length:', process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY.length : 0);
        
        const msg = {
            to: 'imad.rachid.dev@gmail.com',
            from: 'imad.rachid.dev@gmail.com',
            subject: 'Test Email from Portfolio',
            text: 'This is a test email to verify SendGrid configuration.',
            html: '<p>This is a test email to verify SendGrid configuration.</p>',
        };
        
        await sgMail.send(msg);
        console.log('✅ Test email sent successfully!');
        
    } catch (error) {
        console.error('❌ SendGrid Error:');
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response body:', JSON.stringify(error.response.body, null, 2));
        }
    }
}

testSendGrid();