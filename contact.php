<?php

if($_POST["submit"]) {
    $recipient="pianistanniez@gmail.com";
    $subject="Form to email message";
    $senderEmail=$_POST["senderEmail"];

    $mailBody="Email: $senderEmail";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>Contact form to email</title>
</head>

<body>

    <?=$thankYou ?>

    <form method="post" action="contact.php">

        <label>Email address:</label>
        <input name="senderEmail">

        <input type="submit" name="submit">
    </form>

</body>

</html>