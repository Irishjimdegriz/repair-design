<?php

  $userName = $_POST['userName'];
  $userPhone = $_POST['userPhone'];
  $userEmail = $_POST['userEmail'];
  
  // Load Composer's autoloader
  require 'phpmailer/Exception.php';
  require 'phpmailer/PHPMailer.php';
  require 'phpmailer/SMTP.php';
  
  // Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  
  try {
      //Server settings
      $mail->SMTPDebug = 0;                      // Enable verbose debug output
      $mail->CharSet = 'UTF-8';
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
      $mail->Username   = 'repair.design277@gmail.com';                     // SMTP username
      $mail->Password   = 'Repair-design1';                               // SMTP password
      $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
  
      //Recipients
      $mail->setFrom('repair.design277@gmail.com', 'Евгений');
      $mail->addAddress('irishjimdegriz@gmail.com');     // Add a recipient
  
      // Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Новая заявка с сайта';
      $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}";
  
      //$mail->send();
      if($mail->send()) {

      }
      else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
      }
      //header('Location: thanks.html');
  } catch (Exception $e) {
      echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
  }

?>