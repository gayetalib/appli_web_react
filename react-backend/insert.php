<?php
  require 'connect.php';
  
  $classe         = $_REQUEST['prenom']     ;
  $classe         = $_REQUEST['nom']     ;
  $classe         = $_REQUEST['email']     ;
  $bdd->query("INSERT INTO students VALUES (0,'".$prenom."', '".$nom."', '".$email."')");
?>