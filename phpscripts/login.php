<?php
class AuthToken {
  public $message;
  public $authenticated;
}
function respond($message, $authenticated){
  $resObj = new AuthToken;
  $resObj->message = $message;
  $resObj->authenticated = $authenticated;
  echo json_encode($resObj);
  exit(0);
}
session_start();
if(isset($_SESSION['authenticated']) && $_SESSION['authenticated'] == true) {
  respond($_SESSION['email'], $_SESSION['authenticated']);
} else {
  try {
    $user = 'root';
    $pass = '19Liberty95!';
    $conn = new PDO('mysql:host=localhost;dbname=ag-vis-test', $user, $pass);
    $select_stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $select_stmt->bindParam(':email', $_POST['email']);
    
    if($select_stmt->execute()) {
      $user_logging_on = $select_stmt->fetch(PDO::FETCH_ASSOC);
      if(isset($user_logging_on['email'])) {
        if (crypt($_POST['password'], $user_logging_on['password']) ==      $user_logging_on['password']) {
          $_SESSION['email'] = $user_logging_on['email'];
          $_SESSION['authenticated'] = true;
          respond($user_logging_on['email'], true);
        } else {
          respond("Incorrect password", false);
        }
      } else {
        respond("There is no user with that email.", false);
      }
    } else {
      respond("Login failed.", false);
    }
    
    
    $insert_stmt = null;
    $select_stmt = null;
    $conn = null;
  } catch (PDOException $e) {
    respond("fail", "Error!: " . $e->getMessage(), false);
  }
}
?>