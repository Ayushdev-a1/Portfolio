import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS is not configured: set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.');
    return NextResponse.json({ error: 'Email delivery is not configured.' }, { status: 503 });
  }

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid inquiry.' }, { status: 400 });
    }

    const { name, email, message } = body as Record<string, unknown>;
    if (
      typeof name !== 'string' || !name.trim() || name.length > 120 ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== 'string' || !message.trim() || message.length > 10_000
    ) {
      return NextResponse.json({ error: 'Please provide a name, valid email, and project description.' }, { status: 400 });
    }

    // Use EmailJS's REST endpoint; the browser SDK depends on browser APIs and
    // is not suitable for a Next.js server route.
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
          to_name: 'Ayush Anand',
        },
      }),
      signal: AbortSignal.timeout(12_000),
    });

    if (!response.ok) {
      const providerMessage = await response.text();
      console.error('EmailJS rejected inquiry:', response.status, providerMessage.slice(0, 500));
      return NextResponse.json({ error: 'Email provider could not send the inquiry.' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending inquiry:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
