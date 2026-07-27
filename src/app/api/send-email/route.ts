import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Initialize EmailJS with your public key
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY || "");

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Ayush Anand',
      }
    );

    if (response.status === 200) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}