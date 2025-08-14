const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle contact form submission
app.post('/send-email', async (req, res) => {
    try {
        console.log('📧 Received email request:', req.body);
        const { name, email, subject, message } = req.body;
        
        // Validate input
        if (!name || !email || !subject || !message) {
            console.log('❌ Validation failed: Missing fields');
            return res.status(400).json({ 
                success: false, 
                error: 'All fields are required' 
            });
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please provide a valid email address' 
            });
        }
        
        // Prepare email content
        const msg = {
            to: 'imad.rachid.dev@gmail.com',
            from: 'imad.rachid.dev@gmail.com', // Must be verified sender
            subject: `Portfolio Contact: ${subject}`,
            text: `
New message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #007AFF; border-bottom: 2px solid #007AFF; padding-bottom: 10px;">
                        New Portfolio Contact Message
                    </h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333;">Message:</h3>
                        <div style="background: white; padding: 15px; border-left: 4px solid #007AFF; border-radius: 4px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                        This message was sent from your portfolio website contact form.
                    </div>
                </div>
            `,
            reply_to: email
        };
        
        // Send email
        console.log('📤 Sending email to:', msg.to);
        await sgMail.send(msg);
        console.log('✅ Email sent successfully!');
        
        res.json({ 
            success: true, 
            message: 'Message sent successfully! I will get back to you within 24 hours.' 
        });
        
    } catch (error) {
        console.error('SendGrid Error:', error);
        
        // Handle specific SendGrid errors
        if (error.response) {
            console.error('SendGrid Response Body:', error.response.body);
        }
        
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send message. Please try again or email me directly at imad.rachid.dev@gmail.com' 
        });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});