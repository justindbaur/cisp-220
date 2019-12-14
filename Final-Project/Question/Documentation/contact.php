<?php

$name = $_POST['first_name'] .' ' .$_POST['last_name'];
$email = $_POST['email'];
$comments = $_POST['comments'];
$sep = '\r\n';


$body = 'New Contact form' .$sep .$name .$sep .$email .$sep .$comments;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= 'From: ' . 'Justin Website' . ' <no-reply@email.com>' . "\r\n";


mail('jbaur@email.davenport.edu', 'New Contact form.', $body, $headers);
    echo("Thank you for contacting us.");

?>

