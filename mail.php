<?php

$recepient = "zakandaiev@gmail.com";
$siteName = "#zakandaiev.site";

$name = trim($_POST["contact_name"]);
$email = trim($_POST["contact_email"]);
$subject = trim($_POST["contact_subject"]);
$message = trim($_POST["contact_message"]);
$mail_message = "Name: $name \r\nEmail: $email \r\nSubject: $subject \r\n\r\nMessage:\r\n$message";

$pagetitle = "$siteName - $name: \"$subject\"";
mail($recepient, $pagetitle, $mail_message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: admin@asss.zzz.com.ua \r\n");

?>