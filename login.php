<?php
    if (isset($_REQUEST['accion']))
        $accion = $_REQUEST['accion'];
        else
            exit;

    $conexion = new mysqli("localhost", "root", "", "proyecto_js");
        if ($conexion->connect_error)
            die("Conexión fallida: ".$conexion->connect_error);			


    if ($accion == "login") {
        $username = $_REQUEST['username'];
        $passwd = $_REQUEST['passwd'];
        login($username, $passwd);
    }

    function login(){
        $conexion = new mysqli("localhost", "root", "", "proyecto_js");
        $username = $_REQUEST['username'];
        $passwd = $_REQUEST['passwd'];
        $validacionDatos = false;
        $sql = "SELECT * FROM users WHERE username='".$username."' AND passwd='".$passwd."';";
        if($result = $conexion->query($sql)){
            if ($result->num_rows > 0) {
                while ($registro = $result->fetch_assoc()) {
                    if($registro["username"] == $username && $registro["passwd"] == $passwd)
                    $validacionDatos = true;
                }
            }
            if($validacionDatos){
                echo "Usuario registrado";
            }else{
                echo "Acceso incorrecto";
            }
        }	
    }




?>