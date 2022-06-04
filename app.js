var palabra = ''
var res = document.querySelector('.caja')
var line = document.querySelector('.line')
var letra
var botonAceptar = document.querySelector('.boton')
var linea 
var letrasUsadas = []
var le = []
var palabras = ['ALURA', 'ORACLE', 'AHORCADO', 'ENCRIPTADOR', 'ESTUDIANTES', 'DESAFIOS', 'SURAMERICA', 'JAVASCRIPT', 'FRONTEND', 'PERSEVERANCIA']
/*generar palabra aleatoria -> la palabra aleatoria debe quedar en palabra */
palabra = palabras[Math.floor(Math.random() * palabras.length)];

for (let i = 0; i < palabra.length; i++) {//puede ser una funcion crear palabra
    letra = document.createElement('span')//queda span
    letra.innerHTML = palabra[i]
    letra.classList.add('transparent')//tiene letras ocultas cambia a c1
    linea = document.createElement('div')
    linea.classList.add('c2')
    res.append(letra)  
    line.append(linea)  
}

le = document.querySelectorAll('span')//captura los span para acceder a su textContent

//-------------------------------------------------------------
    document.addEventListener('keydown', function (event) {
        event.preventDefault()
            //validar que solo sean letras
            var regex = new RegExp("^[A-Z]+$");//hace falta capturar el enter o quitar el alert
            var letraAdescubrir = String.fromCharCode(event.which || event.keyCode);
             if (regex.test(letraAdescubrir)) {
              event.preventDefault();
              //guarda las letras que se van presionando
              letrasUsadas.push(letraAdescubrir)//si la letra es correcta no se debe guardar?!!!! :S
              
            }// else alert('Ingrese solo letras mayusculas y sin acentos')
               
    function op(){
        for (item of le){
            if(item.textContent === letraAdescubrir){
                item.classList.replace("transparent", "c1")
            }       
        }
    }
   op() 

  var cont = 0
  for (let i = 0; i < le.length; i++) {    
      if (le[i].classList.value === 'c1') {
          cont++
          if (cont === le.length) { 
            mensajeGanoPerdio('green', 'Felicidades, Ganaste!')
            return
          }
      }   
   } 

    letrasQueNoEstanEnLaPalabra =  letrasUsadas.filter(function(e) {
            return palabra.indexOf(e) == -1
        });

//controla que no se muestre en panatalla mas de una vez las letras que se usaron
        var result = letrasQueNoEstanEnLaPalabra.filter((item,index)=>{
            return letrasQueNoEstanEnLaPalabra.indexOf(item) === index
            })

        var res2 = document.querySelector('.res2')
        res2.textContent = result.join(' ')

        //dibujando el ahorcado y mostrando msn de perdio
        for (let i = 0; i < result.length; i++) {
            if(result){
                if(i === 0){       //l    t   w   h   br bb bl r
                    dibujarAhorcado(800, 400, 300, 0, 0, 0, 0, 0 )
                }
                if(i === 1){
                    dibujarAhorcado(950, 100, 0, 300, 0, 0, 0  )
                }
                if(i === 2){
                    dibujarAhorcado(950, 100, 150, 0, 0, 0, 0  )
                }
                if(i === 3){
                    dibujarAhorcado(1100, 100, 0, 50, 0, 0,  0  )
                }
                 if(i === 4){
                    dibujarAhorcado(1080, 153, 40, 40, 50, 4, 4  )
                }
                if(i === 5){
                    dibujarAhorcado(1100, 197, 0, 120, 0, 0, 0  )
                }
                if(i === 6){
                    dibujarAhorcado(1097, 218, 50, 0, 0, 0, 0, 45  )
                }
                if(i === 7){
                    dibujarAhorcado(1055, 216, 50, 0, 0, 0, 0, -225  )
                }
                if(i === 8){
                    dibujarAhorcado(1096, 336, 50, 0, 0, 0, 0, 45  )
                }
                if(i === 9){
                    dibujarAhorcado(1057, 336, 50, 0, 0, 0, 0, -225  )
                    mensajeGanoPerdio('red', 'Perdiste, Intentalo de nuevo')
                    result = null
                    letrasUsadas = null//corta el flujo !! lo malo de esto es que para el juego de mala manera, causando un error             
                }
            }    
        }
     })
     
       //se crea la clase con las variables comunes
function dibujarAhorcado(a,b,c,d,e,f,g, h){//cada vez que se llame a esta funcion se dibuja una linea del ahorcado
    var linea = document.createElement('div')//parte del ahoraca
    var ahorcado = document.querySelector('.ahorcado')//donde se va a mostrar el ahoracado
    linea.classList.add('dibujo')//                                                                                transform: rotate(45deg); me salvo!!!
 //propiedades del ahoracado 
    linea.style.cssText = `left:${a}px; top:${b}px; width: ${c}px; height: ${d}px; border-radius: ${e}%; border-bottom: ${f}px solid #0A3871; border-left:${g}px solid #0A3871; transform: rotate(${h}deg);`
    return ahorcado.append(linea)
}

/*nuevo juego hace que se cargue de nuevo la pagina  */
var nuevoJuego = document.querySelector('#nuevo')
nuevoJuego.addEventListener('click', _ => {
    location.reload();
})

/**Desistir hace que vaya a la pagina de inicio */
function paraInicio() {
    document.location.href = "./index.html"
}

function mensajeGanoPerdio(color, mensaje ){
    let ahorcado = document.querySelector('.ahorcado')//podria hacer una funcion?
    let msnPerdio = document.createElement('div')
    msnPerdio.classList.add('msnPerdio')
    msnPerdio.style.color = color;
    msnPerdio.textContent = mensaje
    ahorcado.append(msnPerdio)
}


