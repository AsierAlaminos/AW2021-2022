function cambiarmodo(){
    var web=document.body;
    var letracambio=document.getElementById("letra_cambio");
    var checkbox=document.getElementById("ligth_dark");
    web.classList.toggle("body_oscuro");
    if (checkbox.checked==true){
        letracambio.style.color="white";
        letracambio.innerHTML="Dark";
        document.getElementById("texto_empresas_electroeco").style.color="white";
        document.getElementById("texto_empresas_facebook").style.color="white";
        document.getElementById("texto_empresas_youtube").style.color="white";
        document.getElementById("texto_empresas_twitter").style.color="white";
        document.getElementById("texto_empresas_twitch").style.color="white";
        document.getElementById("form_container").style.borderColor="black";
        document.getElementById("container_empresas").style.borderColor="white";
    }
    else{
        letracambio.style.color="black";
        letracambio.innerHTML="Light";
        document.getElementById("texto_empresas_electroeco").style.color="black";
        document.getElementById("texto_empresas_facebook").style.color="black";
        document.getElementById("texto_empresas_youtube").style.color="black";
        document.getElementById("texto_empresas_twitter").style.color="black";
        document.getElementById("texto_empresas_twitch").style.color="black";
        document.getElementById("form_container").style.borderColor="white";
        document.getElementById("container_empresas").style.borderColor="black";
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

function redes_sociales(){
    if (document.getElementById("redes").style.display=="none"){
        document.getElementById("redes").style.display="block";
    }else{
        document.getElementById("redes").style.display="none";
    }
}