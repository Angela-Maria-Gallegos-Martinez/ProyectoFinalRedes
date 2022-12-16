
function guardarDatos () {
    window.close();
    window.open("./registro.html");
    
}

function recuperarDatos () {
    if ((localStorage.correo == document.getElementById("correo").value) && (localStorage.password == document.getElementById("password").value)){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
        window.close();
        window.open("./principalat.html");
        document.getElementById('perfils').innerHTML = localStorage.nombre; 
    }else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password"
    }
    
   
}

function escribir () {
var fso = ActiveXObject("Scripting.FileSystemObject");
var a = fso.CreateTextFile("C:\Users\Usuario\Desktop\Página Web Redes\AdopciónMascotas\testfile.txt", true);
a.WriteLine("This is a test.");
a.Close();
console.log("esta creado");
}

function registrarse () {
    localStorage.idu = document.getElementById("idu").value;
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.correo = document.getElementById("correo").value;
    localStorage.password = document.getElementById("password").value;
    localStorage.telefono = document.getElementById("telefono").value;
    localStorage.direccion = document.getElementById("direccion").value;

    
      
      // Start file download.
     download("usuarioPagina.txt", "Id: " + localStorage.idu + " Usuario: "  + localStorage.nombre + " passord: " + localStorage.password + 
      " Correo: " + localStorage.correo + " Telefono: " + localStorage.telefono + " Dirección: " + localStorage.direccion);
      

     window.close();
    window.open("./principalat.html");
    
}

function adoptar () {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.correo = document.getElementById("correo").value;
    localStorage.telefono = document.getElementById("telefono").value;
    localStorage.direccion = document.getElementById("direccion").value;

    
      
      // Start file download.
      download("Adopcion" + localStorage.iddog + ".txt", "Id Dog: " + localStorage.iddog + " Usuario: "  + localStorage.nombre +
      " Correo: " + localStorage.correo + " Telefono: " + localStorage.telefono + " Dirección: " + localStorage.direccion);
      

     window.close();
    window.open("./principalat.html");
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function irad(id) {
    localStorage.iddog = id;
    window.close();
    window.open("./contacto.html");
    

}

function volver () {
    window.close();
    window.open("./indix.html");
}

function animaliast () {
    window.close();
    window.open("./principalat.html");
}

function contacto () {
    window.close();
    window.open("./contacto.html");
}

function conocelos (){
    window.close();
    window.open("./conocelos.html");
}

function perfil () {
    window.close();
    window.open("./perfil.html");
}

function prueba () {
    var name = 'dog'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
    headers: { 'X-Api-Key': 'SNZZIcZSZakjFjO969OrfA==OOmlIDLDcoAqiQJm'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}