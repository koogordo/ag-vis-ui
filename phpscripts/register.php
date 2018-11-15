<?php
class Errors {
  public $status;
  public $message;
}

function respond($status, $message) {
  $errObj = new Errors;
  $errObj->status = $status;
  $errObj->message = $message;
  echo json_encode($errObj);
  exit(0);
}

if(count($_POST) > 0){
  try {
    $user = 'root';
    $pass = '19Liberty95!';
    $conn = new PDO('mysql:host=localhost;dbname=ag-vis-test', $user, $pass);
    $insert_stmt = $conn->prepare("INSERT INTO users (firstName, lastName, email, password) VALUES (:firstName, :lastName, :email, :password)");
    $select_stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");

    $select_stmt->bindParam(':email', $_POST['email']);
    $insert_stmt->bindParam(':firstName', $_POST['firstName']);
    $insert_stmt->bindParam(':lastName', $_POST['lastName']);
    $insert_stmt->bindParam(':email', $_POST['email']);

    $new_password = $_POST['password'];
    $conf_password = $_POST['confPass'];

    if(strcmp($new_password, $conf_password) == 0){
      $salt = bin2hex(openssl_random_pseudo_bytes(22));
      $hash = crypt($_POST['password'], "$2a$12$".$salt);
    } else {
       respond("fail","The passwords you entered don't match.");
       
    }
    
    $insert_stmt->bindParam(':password', $hash);

    if($select_stmt->execute()) {
      $exising_user = $select_stmt->fetchAll(PDO::FETCH_ASSOC);
      if (count($exising_user) > 0) {
        respond("fail", "This user already exists.");
      } else {
        if($insert_stmt->execute())
        {
          respond("success","Congratualtions! Registration complete.");
        } else {
          respond("fail", "Sorry, this registration failed.");
        } 
      }
    } else {
      respond("fail","Error executing database transaction");
    }
    
    
    $insert_stmt = null;
    $select_stmt = null;
    $conn = null;
  } catch (PDOException $e) {
    respond("fail", "Error!: " . $e->getMessage());
  }
} else {
  respond("fail", "You cannot submit a blank registration");
}
?>