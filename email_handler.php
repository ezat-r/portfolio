<?php
$name = htmlentities($_POST["name"]);
$email = htmlentities($_POST["email"]);
$mes = htmlentities($_POST["message"]);

if(mail($email, $name, $mes) == true){
    echo "Email sent.";
}else{
    echo "Something went wrong.";
}

?>