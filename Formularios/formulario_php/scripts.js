function replace(){
    password=document.getElementById('passwd')
    ojo=document.getElementById('ojito')
    if (password.type=="password"){
        password.type="text"
        document.getElementById('boton').value='Ocultar'
    }else{
        password.type="password"
        document.getElementById('boton').value='Mostrar'
    }
}