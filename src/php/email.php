<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Email details
  $to = "kushalyolo@gmail.com"; // Replace with your email address
  $subject = "New Contact Form Submission";

  // Compose email message
  $email_message = "Name: $name\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Message:\n$message";

  // Send email
  mail($to, $subject, $email_message);

  // Redirect after submission (optional)
  header("Location: ../index.html"); // Create a thank_you.html file for a thank you message
  exit();
}
?>
