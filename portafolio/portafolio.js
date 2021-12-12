function cambiarmodo(){
    var boton_modo=document.getElementById("boton_cambiante");
    var web=document.body;
    var letracambio=document.getElementById("letra_cambio");
    var checkbox=document.getElementById("ligth_dark")
    web.classList.toggle("body_oscuro");
    if (checkbox.checked==true){
        letracambio.style.color="white";
        letracambio.innerHTML="Dark";
        checkbox.checked=true;
    }
    else{
        letracambio.style.color="black";
        letracambio.innerHTML="Light";
        checkbox.checked=false;
    }
};

var mostrar_codigo=function(numero){
    if (document.getElementById(numero).style.display=="none"){
        document.getElementById(numero).style.display="block";
    }else{
        document.getElementById(numero).style.display="none";
    }
}
var ocultar_boton=function(id){
    if (document.getElementById(id).style.display=="none"){
        document.getElementById(id).style.display="block";
    }else{
        document.getElementById(id).style.display="none";
    }
};

var correo=function(){
    document.getElementById('nombre_form').value="";
    document.getElementById('correo_form').value="";
    document.getElementById('numero_form').value="";
    document.getElementById('razon_form').value="";
};