import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // user: 'vijayngt1@gmail.com', // Replace
        // pass: 'mxoi gynf uwue fpzk',   // Use App Password (not regular password)
         user: 'rsengineeringproducts@gmail.com', // Replace
        pass: 'wgqg qbwo fqrd xzbw',
      },
    });

   const mailOptions = {
  from: `"RS Engineering Website" <${email}>`,
  to: 'rsengineeringproducts@gmail.com',
  subject: `📩 New Inquiry from ${name} – ${subject}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 6px; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #333333;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 30%;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr style="background-color: #f1f1f1;">
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Subject:</td>
          <td style="padding: 8px;">${subject}</td>
        </tr>
        <tr style="background-color: #f1f1f1;">
          <td style="padding: 8px; font-weight: bold;">Message:</td>
          <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
      <hr style="margin: 20px 0;" />
      <p style="font-size: 12px; color: #888;">
        This message was sent from the contact form on <strong>RS Engineering Products</strong> website.
      </p>
    </div>
  `,
};
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
}
