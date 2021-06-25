<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once(ROOT . "/libraries/vendor/autoload.php");
require_once(PROJECT_ROOT . "/config/config.php");
require_once(PROJECT_ROOT . "/log/log.php");

class Mail
{
    private $serviceBerater;
    private $data;

    public function __construct($serviceBerater, $data)
    {
        $this->serviceBerater = $serviceBerater;
        $this->data = $data;
    }

    public function send()
    {
        $mail = new PHPMailer(true);
        // Encoding
        $mail->CharSet = "UTF-8";
        $mail->Encoding = 'base64';
        
        try {
            //Server settings
            // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // DEL uncomment
            $mail->isSMTP();
            $mail->Host       = Config::$hostSmtp;
            $mail->SMTPAuth   = false;
            $mail->Port       = Config::$portSmtp;

            $mail->SMTPOptions = array(
                'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
                )
            );

        
            //Recipients
            $mail->setFrom(Config::$absender);
            
            if (strpos($this->serviceBerater->emailAdresse, ',') !== false) {
                $mailadresses = explode(",", $this->serviceBerater->emailAdresse);
                foreach ($mailadresses as $mailadress) {
                    $mail->addAddress($mailadress);
                }
            } else {
                $mail->addAddress($this->serviceBerater->emailAdresse);
            }
            
            // Attachments
            $mail->addAttachment(Config::$pdfFolder . "/" . $this->data->fileName);
        
            // Content
            $mail->isHTML(true);
            $mail->Subject = html_entity_decode("Auftrag: " . $this->data->auftragsnummer . " / " . $this->data->kennzeichen);
            $mail->Body    = html_entity_decode("Der Auftrag befindet sich im Anhang.");
            $mail->AltBody = html_entity_decode("Der Auftrag befindet sich im Anhang.");
        
            $mail->send();
            Log::write("Message to " . $this->serviceBerater->emailAdresse. " has been sent");
            echo "Message to " . $this->serviceBerater->emailAdresse. " has been sent \n"; // DEL
        } catch (Exception $e) {
            Log::write("Message to " . $this->serviceBerater->emailAdresse. "could not be sent. Mailer Error: {$mail->ErrorInfo} Exception: {$e}");
            echo "Message to " . $this->serviceBerater->emailAdresse. "could not be sent. Mailer Error: {$mail->ErrorInfo} Exception: {$e}"; // DEL
        }
    }
}
