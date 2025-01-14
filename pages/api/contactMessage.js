const nodemailer = require("nodemailer");

// Function to send email
async function sendEmail(emailData) {
  // Create a transporter using Gmail SMTP settings
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "josiahdav360@gmail.com",  // Your Gmail address
      pass: "09021105486"  // Your Gmail password or App Specific Password
    }
  });

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Maddison Foo Koch 👻" <josiahdavid111@gmail.com>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    });

    console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// Example usage
async function main() {
  const emailData = {
    to: "josiahdav360@gmail.com", // Replace with admin's email address
    subject: "Contact Form Submission",
    text: `Name: John Doe\nEmail: john.doe@example.com\nPhone: +1234567890\nMessage: Hello from the contact form!`,
    html: `<p><strong>Name:</strong> John Doe</p><p><strong>Email:</strong> john.doe@example.com</p><p><strong>Phone:</strong> +1234567890</p><p><strong>Message:</strong> Hello from the contact form!</p>`,
  };

  try {
    const messageId = await sendEmail(emailData);
    console.log("Message sent successfully. Message ID:", messageId);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

main();
