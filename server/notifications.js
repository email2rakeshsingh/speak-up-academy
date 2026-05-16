const nodemailer = require("nodemailer");

function hasSmtpConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

async function sendEmail({ to, subject, text }) {
  if (!hasSmtpConfig()) {
    console.log(`Email skipped for ${to}: SMTP settings are missing`);
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  return transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject,
    text
  });
}

async function sendEnrollmentConfirmation(student) {
  return sendEmail({
    to: student.email,
    subject: "Speak-Up English enrollment received",
    text: `Hello ${student.name}, your enrollment for ${student.course} has been received. We will contact you shortly for OTP verification, payment confirmation, and class timing.`
  });
}

async function sendDemoConfirmation(booking) {
  return sendEmail({
    to: booking.email,
    subject: "Your free demo class is booked",
    text: `Hello ${booking.name}, your free demo class request has been received for ${booking.preferredTiming || booking.timing}. Our team will confirm the final slot on WhatsApp.`
  });
}

async function sendPaymentReceipt({ email, amount, transactionId }) {
  return sendEmail({
    to: email,
    subject: "Speak-Up English payment receipt",
    text: `Payment received. Amount: INR ${amount}. Transaction ID: ${transactionId}. Thank you for joining Speak-Up English Online Academy.`
  });
}

module.exports = {
  sendDemoConfirmation,
  sendEnrollmentConfirmation,
  sendPaymentReceipt
};
