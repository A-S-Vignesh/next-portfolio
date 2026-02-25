import mongoose, { Schema, model, models, Document } from "mongoose";

/* ---------- TYPES ---------- */

export type ContactStatus = "new" | "in-progress" | "replied" | "closed";

export interface ContactMessageDocument extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/* ---------- SCHEMA ---------- */

const ContactMessageSchema = new Schema<ContactMessageDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      maxlength: 150,
    },

    message: {
      type: String,
      required: true,
      maxlength: 2000,
    },

    // 🔥 Message lifecycle
    status: {
      type: String,
      enum: ["new", "in-progress", "replied", "closed"],
      default: "new",
    },

    // UI helper (optional but useful)
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

/* ---------- MODEL ---------- */

const ContactMessage =
  models.ContactMessage ||
  model<ContactMessageDocument>("ContactMessage", ContactMessageSchema);

export default ContactMessage;
