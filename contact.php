<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields safely
    $name    = htmlspecialchars(trim($_POST['name']));
    $phone    = htmlspecialchars(trim($_POST['phone']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $region    = htmlspecialchars(trim($_POST['region']));
    $city    = htmlspecialchars(trim($_POST['city']));
    $subject    = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate fields
    if (empty($name) || empty($email) || empty($message)) {
        echo "<p class='error'>Please fill in all fields.</p>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p class='error'>Invalid email format.</p>";
        exit;
    }

    // Email settings
    $to      = "yourmaail@mail.com";   // 👉 Replace with your email
    $subject = "New Contact Form Message from $name";
    $body    = "
        <h3>New message from your website</h3>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Region:</strong> {$region}</p>
        <p><strong>City:</strong> {$city}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: {$name} <{$email}>" . "\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p class='success'>Thank you, $name. Your message has been sent successfully!</p>";
    } else {
        echo "<p class='error'>Sorry, something went wrong. Please try again later.</p>";
    }
} else {
    echo "<p class='error'>Invalid request.</p>";
}
?>