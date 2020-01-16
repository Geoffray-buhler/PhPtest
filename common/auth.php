<?php
function do_login(string $username, string $password): bool {
  $allowedUsername = "JeanJean";
  $allowedPassword = "password";

  if($username === $allowedUsername && 
     $password === $allowedPassword){
       $_SESSION['username'] = $username;
    return true;
  }

  return false;
}