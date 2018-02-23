$(document).ready(function (){
    $(".operaciones").on("click", function(){
        switch($(this).attr("id")){
            case "suma":
                methods.sumar();
                break; 
            case "resta":
                methods.restar();
                break; 
            case "multiplicacion":
                methods.multiplicar();
                break; 
            case "division":
                methods.dividir();
                break; 
        }
    });
    $("#salir").on("click",function(){
        window.location = "../login.html";
    });
    $("#ruleta").on("click",function(){
        window.location = "../ruleta/ruleta.html";
    });
});
var methods = {
    sumar: function(){
        var num1 = Math.round((Math.random()*10)+1);
        var num2 = Math.round((Math.random()*10)+1);
        $("#pizarra").html(num1+" + "+num2+" = <div id='correcto'></div>");
        methods.generarNumeros(methods.generarArray(num1+num2), num1+num2, "sumar");
    },
    restar: function(){
        var num1 = Math.round((Math.random()*10)+1);
        var num2 = Math.round((Math.random()*10)+1);
        $("#pizarra").html(num1+" - "+num2+" = <div id='correcto'></div>");
        methods.generarNumeros(methods.generarArray(num1-num2), num1-num2, "restar");
    },
    multiplicar: function(){
        var num1 = Math.round((Math.random()*10)+1);
        var num2 = Math.round((Math.random()*10)+1);
        $("#pizarra").html(num1+" * "+num2+" = <div id='correcto'></div>");
        methods.generarNumeros(methods.generarArray(num1*num2), num1*num2, "multiplicar");
    },
    dividir: function(){
        var num1 = Math.round((Math.random()*10)+1);
        var num2 = Math.round((Math.random()*10)+1);
        while(num1 % num2 != 0){
            num1 = Math.round((Math.random()*10)+1);
            num2 = Math.round((Math.random()*10)+1);
        }
        $("#pizarra").html(num1+" / "+num2+" = <div id='correcto'></div>");
        methods.generarNumeros(methods.generarArray(num1/num2), num1/num2, "dividir");
    },
    generarNumeros: function(posibles, resultado, operacion){
        timer.reset();
        timer.start(operacion);
        $("#resultados").html("");
        var all = "";
        all+="<div class='row' style='position:absolute; bottom: 0px;'>";
        for (let i = 0; i < posibles.length; i++) {
            if(posibles[i] == resultado)
                all+="<div class='col-md-4'><div class='numero' id='resultado'>"+posibles[i]+"</div></div>";    
            else    
                all+="<div class='col-md-4'><div class='numero'>"+posibles[i]+"</div></div>";
        }        
        $("#pizarra").append(all);
        $(".numero").on("click", function(){
            if($(this).attr("id") == "resultado"){
                $("#aciertos").html(parseInt($("#aciertos").html())+1);
                $(this).css("position","absolute");
                methods.mover();
                var sonido = new Audio("success.wav");
                sonido.play();
                setTimeout(function (){
                    methods.generarOperacion(operacion);
                }, 3500);
            }else{
                var sonido = new Audio("wrong.wav");
                sonido.play();
                setTimeout(function (){
                    methods.generarOperacion(operacion);
                }, 1000);
            }
            timer.reset();
        });
    },
    buscar: function(aguja, pajar){
        var length = pajar.length;
        for(var i = 0; i < length; i++) {
            if(pajar[i] == aguja){
                return true;
            } 
        }
        return false;
    },
    generarArray: function(resultado){
        var posibles = [];
        for(i = 0; i < 2; i++){
            var candidato = Math.round((Math.random()*10)+1);
            while(methods.buscar(candidato, posibles)){
                candidato = Math.round((Math.random()*10)+1);
            }
            posibles.push(candidato);
        }
        posibles.push(resultado);
        posibles = posibles.sort(function() {
            return Math.random() - 0.5;//el 0.5 para desordenar el random
        });
        return posibles;
    },
    mover: function () {//setInterval bucle
        atun1 = setInterval(function () {//eje x
            bordesResultado = document.getElementById("resultado").getBoundingClientRect();
            bordesCorrecto = document.getElementById("correcto").getBoundingClientRect();
            $("#resultado").css("left","+=6px");
            if(bordesResultado.left >= bordesCorrecto.left){
                clearInterval(atun1);
            }
        },30);
        atun2 = setInterval(function () {//eje y
            bordesResultado = document.getElementById("resultado").getBoundingClientRect();
            bordesCorrecto = document.getElementById("correcto").getBoundingClientRect();
            $("#resultado").css("top","-=3px");
            if(bordesResultado.top <= bordesCorrecto.top){
                clearInterval(atun2);
            }
        },30);
    },
    generarOperacion: function(operacion){
        switch(operacion){
            case "sumar":
                methods.sumar();
                break;
            case "restar":
                methods.restar();
                break;
            case "multiplicar":
                methods.multiplicar();
                break;
            case "dividir":
                methods.dividir();
        }   
    }
}
var timer = {//time para las operaciones
    interval: null,
    time: 60,
    init: function(){
        timer.time = 60;
    },
    start: function(operacion){
        timer.interval = setInterval(function (){
            timer.time--;
            var sonido = new Audio("tic.wav");
            sonido.play();
            timer.check(operacion);
            timer.draw();
        }, 1000);
    },
    check: function(operacion){//cuando falla si el tiempo se acaba
        if(timer.time < 0){
            timer.reset();
            var sonido = new Audio("wrong.wav");
            sonido.play();
            methods.generarOperacion(operacion);
        }
    },
    stop: function(){
        clearInterval(timer.interval);
    },
    draw: function(){
        $("#tiempo").html(timer.time);
    },
    reset: function(){
        timer.stop();
        timer.init();
    }
}