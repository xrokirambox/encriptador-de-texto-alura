let textoIngresado = "";
let spanEncriptado = document.getElementById('id__contenedor__span__resultado');
let imgOculta = document.getElementById('ocultar__img');
let botonCopiar = document.getElementById('id__boton__oculto'); 

function encriptarTexto() {
    let textoIngresado = document.querySelector('textarea').value;
    let caracteres = Array.from(textoIngresado);

    let textoEncriptado = caracteres.map(caracteres => {
        if (caracteres === "a") {
            return "ai";
        } else if (caracteres === "e") {
            return "enter";
        } else if (caracteres === "i") {
            return "imes";
        } else if (caracteres === "o") {
            return "ober";
        } else if (caracteres === "u") {
            return "ufat";
        }
        return caracteres;
    }).join('');

    
    cambiarSeccionResultado(textoEncriptado);
}


function cambiarSeccionResultado(texto){
    let section = document.getElementById('id__seccion__resultado');
    section.style.textAlign = "center";
    section.style.justifyContent = "space-between";
    section.style.padding = "15px 10px";
    section.className= "seccion__resultado__aux"

    spanEncriptado.textContent = texto;
    spanEncriptado.style.overflowY = "auto"; 
    imgOculta.style.display = "none";
    botonCopiar.style.visibility = "visible";
}

function desencriptarTexto() {
    textoIngresado = document.querySelector('textarea').value;
    let textoDesencriptado = "";

    for (let i = 0; i < textoIngresado.length; i++) {
        let caracter = textoIngresado[i];

        if (caracter === "a" && textoIngresado.substring(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i++;
        } else if (caracter === "e" && textoIngresado.substring(i, i + 5) === "enter") {
            textoDesencriptado += "e";
            i += 4;
        } else if (caracter === "i" && textoIngresado.substring(i, i + 4) === "imes") {
            textoDesencriptado += "i";
            i += 3;
        } else if (caracter === "o" && textoIngresado.substring(i, i + 4) === "ober") {
            textoDesencriptado += "o";
            i += 3;
        } else if (caracter === "u" && textoIngresado.substring(i, i + 4) === "ufat") {
            textoDesencriptado += "u";
            i += 3;
        } else {
            textoDesencriptado += caracter;
        }
    }

    cambiarSeccionResultado(textoDesencriptado);

     let section = document.getElementById('id__seccion__resultado');
     botonCopiar.style.visibility = "visible";
     imgOculta.style.display = "none";
     section.style.textAlign = "center";
     section.style.justifyContent = "space-between";
  section.style.padding = "15px 10px";
    spanEncriptado.textContent = textoDesencriptado;
}

function copiarTexto() {
    const texto = document.getElementById('id__contenedor__span__resultado').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado!");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}



document.querySelector('textarea').addEventListener('input', function(e) {
    let input = e.target.value;

    
    input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    
    input = input.replace(/[^a-z\s]/g, '');

    event.target.value = input;
});