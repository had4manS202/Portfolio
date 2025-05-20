"use server"

import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"${data.name}" <${data.email}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: data.subject,
    text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
    `,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Email sent successfully.")
    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
