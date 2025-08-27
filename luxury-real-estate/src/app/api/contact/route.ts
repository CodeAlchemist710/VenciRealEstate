import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Format WhatsApp message
    const whatsappMessage = `🏠 *New Real Estate Inquiry*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone || 'Not provided'}

💬 *Message:*
${message || 'No message provided'}

---
Sent from Venci Lopez Real Estate website`;

    // Send WhatsApp message using WhatsApp Business API
    const whatsappResponse = await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: process.env.RECIPIENT_PHONE_NUMBER,
        type: 'text',
        text: {
          body: whatsappMessage
        }
      })
    });

    if (!whatsappResponse.ok) {
      throw new Error('Failed to send WhatsApp message');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}