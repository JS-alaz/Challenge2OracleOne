function guardarEmpezar() {//tambien hay que guardar la palabra escrita
    document.location.href = "./inicio.html"
}

function cancelar() {
    document.location.href = "./index.html"
}

var palabraEscrita = document.querySelector('.palabra-agregada')
palabraEscrita.focus()
palabraEscrita.addEventListener('keypress', function(event) {
    var regex = new RegExp("^[A-Z]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      alert('Ingrese solo letras MAYÚSCULAS y sin acentos')
      return false;
    }
  });

  var btnAgregarPalabra = document.querySelector('.boton-agregar-palabra')
  
  btnAgregarPalabra.addEventListener('click', function(e){
      e.preventDefault()
      palabras.push(palabraEscrita.value)
      alert('Palabra agregada') 
       
      guardarEmpezar()
  })

