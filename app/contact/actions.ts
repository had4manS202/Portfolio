"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// This is a server action to handle form submission
export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const { name, email, subject, message } = data;
    
    // Basic validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      throw new Error('All fields are required');
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>', // Use your verified domain
      to: 'manashada@proton.me', // Fixed the email extension
      replyTo: email, // User's email for replies
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(`Email service error: ${error.message || 'Unknown error'}`);
    }

    console.log('Email sent successfully:', emailData);
    return { success: true, data: emailData };
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Return more specific error messages
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    
    return { success: false, error: 'Failed to submit form' };
  }
}