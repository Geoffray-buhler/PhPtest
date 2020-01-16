<?php
function send_json(Array $response) {
  header('Content-Type: application/json');
  echo json_encode($response);
}