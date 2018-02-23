<?php
if (isset($_REQUEST['accion']))
	$accion = $_REQUEST['accion'];
	else
		exit;
	
	$conexion = new mysqli("localhost", "root", "", "proyecto_js");
	if ($conexion->connect_error)
		die("Conexión fallida: ".$conexion->connect_error);			

	
	if ($accion == "insertUser") {
        $username = $_REQUEST['username'];
        $passwd = $_REQUEST['passwd'];
        $biography = $_REQUEST['biography'];
        $email = $_REQUEST['email'];
        $phone = $_REQUEST['phone'];
        $sex = $_REQUEST['sex'];
		insertUser($username, $passwd, $biography,$email,$phone,$sex);
	}
    function insertUser ($username, $passwd, $biography,$email,$phone,$sex) {
		global $conexion;
		if (existeUsuario($email) == false) {		// si no existe ya el usuario
			$consultaSQL = "INSERT INTO users (username,passwd,biography,email,phone,sex) VALUES ('".$username."','".$passwd."','".$biography."','".$email."',".$phone.",'".$sex."');";
            //echo $consultaSQL;
            if ($conexion->query($consultaSQL) === false) {
				echo "Error: ".$conexion->error;
				return false;
            }
            echo "¡Registrado correctamente!";
			return true;
		}else{
            echo "¡Error: Email ya registrado!";
        }
	}
    function existeUsuario ($email) {
		global $conexion;
		$consultaSQL = "SELECT * FROM users WHERE email = '".$email."';";
		$resultado = $conexion->query($consultaSQL);
		if ($resultado->num_rows == 0)		// no existe ya el usuario
			return false;
		else
			return true;
	}


       


?>