
const textArea = document.querySelector(".campo-texto");
const mensaje = document.querySelector(".campo-lectura");
const copia = document.querySelector(".boton-copiar");
copia.style.display = "none" //el boton copiar se oculta hasta que se encripte un texto

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//VALIDAR TEXTO
function validarTexto() {  //Funcion que muestra una alerta si se escriben letras mayúsculas
   let textoEscrito = document.querySelector(".campo-texto").value;
   let validador = textoEscrito.match(/[a-z]/);

    if (!validador || validador === 0) {
        alert("¡Solo son permitidas letras minúsculas y sin acentos!") 
        location.reload(); //El metodo location.reload() carga de nuevo la URL actual, como lo hace el boton de Refresh de los navegadores.
        return true;
    }
}

//BOTON ENCRIPTAR
function btnEncriptar(){
    if(!validarTexto()){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; //borra el texto al dar click en el boton encriptar
    mensaje.style.backgroundImage = "none"; //al momento de dar click en encriptar se oculta la imagen
    copia.style.display = "block" //el boton copiar se muestra cuando se da click en encriptar
  }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
     
       }

    }
    return stringEncriptada
}

//BOTON DESENCRIPTAR
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
     
       }

    }
    return stringDesencriptada
}

//boton copiar texto
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}





