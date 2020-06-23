<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'marcustmckenzie.info';

  $email_subject = "New Form Submission";

  $email_body = "User Name: $name.\n". 
                  "User Email: $visitor_email.\n". 
                    "User Message: $message.\n";


  $to = "marcustmckenzie@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-to: $visitor_email \r\n";

  mail($to,$email_subject, $email_body, $headers);

  #include 'contact.html'
  header("Location: contact.html")

?>