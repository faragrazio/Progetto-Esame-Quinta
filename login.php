<!doctype html>
<html>
    <head>
    	<title>Login</title>
    </head>
    
    <body>
        <h2>Accedi ad AereoShop</h2>
        <form action="" method="post">
          <p>
            E-mail: <input type="text" name="email" size="40" /> <br>
            Password: <input type="password" name="password" size="40" /><br/>
          </p>
          
          <a href = "./register.php">Non hai un account? Registrati</a>
          <p>
            <input type="submit" name="invio" value="Login" />
          </p>
        </form>
        
        <?php
        	function redirect($url) {
              ob_start();
              header('Location: '.$url);
              ob_end_flush();
              die();
            }
            
            $mail = $_POST['email'];
            $password = $_POST['password'];
			
            if(isset($_POST["invio"])) {
                if($password == "" || $mail == "") {
                  echo "Devi compilare tutti i campi";
                }

                else {
                    $query="select email, password from utenti where email = '$mail' and password = $password";

                    try {
                        $pdo = new PDO('mysql:host=localhost;dbname=my_kedisvilobatir', 'root', '');
                    }

                    catch (PDOException $e) {
                      echo "Errore: " . $e->getMessage();
                      die();
                    }

                    $statement = $pdo->prepare($query);
                    $statement->execute();
                    $values = $statement-> fetchAll();
                    if(empty($values)) echo "Credenziali errate";
                    else {
                        session_start();

                        $query="select id from utenti where email = '$mail' and password = $password";
                        $statement = $pdo->prepare($query);
                        $statement->execute();
                        $values = $statement-> fetchAll();

                        $_SESSION["id"] = $values[0]["id"];
                        $_SESSION["email"] = $mail;
                        $_SESSION["password"] = $password;
                        redirect("shop.php");
                    }
                 }
             }
        ?>
    </body>
</html>