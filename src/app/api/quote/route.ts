import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, zip, monthlyBill, priority, system, message, company } = body;

    // Honeypot check
    if (company) {
      return NextResponse.json({ success: true, message: 'Received' });
    }

    // Required fields check
    if (!name || !email || !phone || !zip) {
      return NextResponse.json(
        { success: false, error: 'Name, email, phone, and ZIP code are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In a production deployment with Resend or SendGrid:
    // await resend.emails.send({ ... })
    // For now, log the structured submission and return success.
    console.log('[Quote Request Received]', {
      name,
      email,
      phone,
      zip,
      monthlyBill,
      priority,
      system,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request registered successfully. An engineer will follow up within 24 hours.',
      receivedData: {
        name,
        email,
        phone,
        zip,
        monthlyBill,
        priority,
        system,
      },
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing quote.' },
      { status: 500 }
    );
  }
}

