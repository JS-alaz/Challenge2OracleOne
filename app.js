var palabra = 'CASABLANCA'
var res = document.querySelector('.res')
var letra
var botonAceptar = document.querySelector('.boton')

for (let i = 0; i < palabra.length; i++) {//puede ser una funcion crear palabra
    letra = document.createElement('span')
    letra.innerHTML = palabra[i]
    letra.classList.add('letrasOcultas')
    res.appendChild(letra)    
}


/* botonAceptar.addEventListener('click', (Event)=>{
    Event.preventDefault()
    //la idea es crear un input que recibe iuna letra y comparar con las letras que hay y cambiarle el estilo para hacerla visible
    //letra.classList.replace("letrasOcultas", "letras")//solo cambia la ultima letra        
    var le = document.querySelectorAll('span')
    
    for(let i = 0; i < le.length; i++){
        console.log(le[i].textContent)

        if(le[i].textContent === letraAdescubrir){
            le[i].classList.replace("letrasOcultas", "letras")
            console.log(le[i])
        }
    }
    
    //letra.classList.replace("letrasOcultas", "letras")//colo cambia la ultima letra
    //letra.classList.remove('letrasOcultas')
    //letra.classList.add('letras')
    //letra.className = "letras"
    //letra.classList.add('letras')
    //res.appendChild(letra)
//    console.log('hice click', letra)
}) */

var objeto
          //Al documento le añadimos una nueva funcion suscrita al evento keydown, tambien
          //esta el Keyup y el key press
    document.addEventListener('keydown', function (Event) {
        //Dependiendo del navegador usara el which o el keycode OJO ES IMPORTANTE
        var keycodeentero = Event.which || Event.keyCode;
        var letraAdescubrir = String.fromCharCode(keycodeentero);
        console.log(letraAdescubrir)
        var le = document.querySelectorAll('span')
    
        for(let i = 0; i < le.length; i++){
            console.log(le[i].textContent)
    
            if(le[i].textContent === letraAdescubrir){
                le[i].classList.replace("letrasOcultas", "letras")
                console.log(le[i])
            }
        }
    })
    