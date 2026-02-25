import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";


export async function POST(req: Request) {
  try {

    const body = await req.json();



    const {
      name,
      email,
      subject,
      message,
    } = body;

    /* ---------- REQUIRED FIELD VALIDATION ---------- */
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Full name, email, subject, and message are required." },
        { status: 400 },
      );
    }

    /* ---------- LENGTH VALIDATION ---------- */
    if (
      name.length > 100 ||
      subject.length > 150 ||
      message.length > 2000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed allowed length." },
        { status: 400 },
      );
    }

    /* ---------- EMAIL BASIC CHECK ---------- */
    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }
    await connectDB();

    /* ---------- SAVE MESSAGE ---------- */
    const contact = await ContactMessage.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim(),
      status: "new",
      isRead: false,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        data: {
          id: contact._id,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
