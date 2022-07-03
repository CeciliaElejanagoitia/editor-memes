// elementos con los que trabajo
const imagen = document.getElementById('panel-imagen');
const texto = document.getElementById('panel-texto');
const panel = document.getElementById('panel')

const botonImagen = document.getElementById('boton-imagen');
const botonTexto = document.getElementById('boton-texto');
const botonCerrar = document.getElementById('cerrar-panel')

const inputTextoSuperior = document.getElementById('texto-superior-input');
const textoAriba = document.getElementById('texto-arriba');
const inputTextoInferior = document.getElementById('texto-inferior-input');
const textoAbajo = document.getElementById('texto-abajo')

const textoSuperior = document.getElementById('sin-texto-superior');
const textoInferior = document.getElementById('sin-texto-inferior');

const fuentes = document.getElementById('selector-fuentes');

const tamañoTexto = document.getElementById('tamaño-texto')

const botonIzquierda = document.getElementById('alineacion-izquierda');
const botonCentro = document.getElementById('alineacion-centro');
const botonDerecha = document.getElementById('alineacion-derecha');

const colorTexto = document.getElementById('texto-color-input');

const colorFondo = document.getElementById('texto-color-fondo-input');
const colorFondoFinal = document.getElementById('imagen-editable');

const sinFondo = document.getElementById('texto-sin-fondo');

const botonSinContorno = document.getElementById('sin-contorno');
const botonContornoClaro = document.getElementById('contorno-claro');
const botonContornoOscuro = document.getElementById('contorno-oscuro');

const espaciado = document.getElementById('espaciado-input');

const interlineado = document.getElementById('interlineado-input');


// eventos y funciones que se ejecutan 
botonTexto.addEventListener('click', () => {
    imagen.classList.add('oculto');
    texto.classList.remove('oculto');
    panel.classList.remove('oculto');
})
botonImagen.addEventListener('click', () => {
    texto.classList.add('oculto');
    imagen.classList.remove('oculto');
    panel.classList.remove('oculto');
})
botonCerrar.addEventListener('click', () => {
    panel.classList.add('oculto');
})


inputTextoSuperior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    textoAriba.innerHTML = textoIngresado;
})
inputTextoInferior.addEventListener('input', (event) => {
    const textoIngresado2 = event.target.value;
    textoAbajo.innerHTML = textoIngresado2;
})


textoSuperior.addEventListener('click', (event) => {
    textoAriba.classList.toggle('oculto');
})


textoInferior.addEventListener('click', (event) => {
    textoAbajo.classList.toggle('oculto');
})


fuentes.addEventListener('change', () => {
    if(fuentes.value == 'Arial'){
        textoAriba.style.fontFamily = 'Arial';
        textoAbajo.style.fontFamily = 'Arial';
    }
    if(fuentes.value == 'Arial Black'){
        textoAriba.style.fontFamily = 'Arial Black';
        textoAbajo.style.fontFamily = 'Arial Black';
    }
    if(fuentes.value == 'American Typewriter'){
        textoAriba.style.fontFamily = 'American Typewriter';
        textoAbajo.style.fontFamily = 'American Typewriter';
    }
    if(fuentes.value == 'Andale Mono'){
        textoAriba.style.fontFamily = 'Andale Mono';
        textoAbajo.style.fontFamily = 'Andale Mono';
    }
    if(fuentes.value == 'Comic Sans MS'){
        textoAriba.style.fontFamily = 'Comic Sans MS';
        textoAbajo.style.fontFamily = 'Comic Sans MS';
    }
    if(fuentes.value == 'Helvetica'){
        textoAriba.style.fontFamily = 'Helvetica';
        textoAbajo.style.fontFamily = 'Helvetica';
    }
    if(fuentes.value == 'Impact'){
        textoAriba.style.fontFamily = 'Impact';
        textoAbajo.style.fontFamily = 'Impact';
    }
    if(fuentes.value == 'Verdana'){
        textoAriba.style.fontFamily = 'Verdana';
        textoAbajo.style.fontFamily = 'Verdana';
    }
    if(fuentes.value == 'Times New Roman'){
        textoAriba.style.fontFamily = 'Times New Roman';
        textoAbajo.style.fontFamily = 'Times New Roman';
    }
})


tamañoTexto.addEventListener('input', (event) => {
    const numeroIngresado = event.target.value;
    textoAriba.style.fontSize = `${numeroIngresado}px`
    textoAbajo.style.fontSize = `${numeroIngresado}px`

})


botonIzquierda.addEventListener('click', () => {
    textoAriba.style.textAlign = 'left'
    textoAbajo.style.textAlign = 'left'
})
botonCentro.addEventListener('click', () => {
    textoAriba.style.textAlign = 'center'
    textoAbajo.style.textAlign = 'center'
})
botonDerecha.addEventListener('click', () => {
    textoAriba.style.textAlign = 'right'
    textoAbajo.style.textAlign = 'right'
})


colorTexto.addEventListener('input', (event) => {
  const colorElegido = event.target.value;
  textoAriba.style.color = `${colorElegido}`
  textoAbajo.style.color = `${colorElegido}`
})


colorFondo.addEventListener('input', (event) => {
    const colorFondoElegido = event.target.value;
    colorFondoFinal.style.backgroundColor = `${colorFondoElegido}`
})


sinFondo.addEventListener('click', (event) => {
    textoAbajo.classList.toggle('fondo');
    textoAriba.classList.toggle('fondo');
})


botonSinContorno.addEventListener('click', () => {
    textoAriba.style.webkitTextStroke = 'transparent'
    textoAbajo.style.webkitTextStroke = 'transparent'
})
botonContornoClaro.addEventListener('click', () => {
    textoAriba.style.webkitTextStroke = '0.5px white'
    textoAbajo.style.webkitTextStroke = '0.5px white'
})
botonContornoOscuro.addEventListener('click', () => {
    textoAriba.style.webkitTextStroke = '0.5px black'
    textoAbajo.style.webkitTextStroke = '0.5px black'
})


espaciado.addEventListener('input', (event) => {
    const espacioIngresado = event.target.value;
    textoAriba.style.height = `${espacioIngresado}vh`
    textoAbajo.style.height = `${espacioIngresado}vh`
})


interlineado.addEventListener('change', () => {
    if(interlineado.value == '0.8'){
        textoAriba.style.lineHeight = '0.8';
        textoAbajo.style.lineHeight = '0.8';
    }
    if(interlineado.value == '1'){
        textoAriba.style.lineHeight = '1';
        textoAbajo.style.lineHeight = '1';
    }
    if(interlineado.value == '1.2'){
        textoAriba.style.lineHeight = '1.2';
        textoAbajo.style.lineHeight = '1.2';
    }
    if(interlineado.value == '1.5'){
        textoAriba.style.lineHeight = '1.5';
        textoAbajo.style.lineHeight = '1.5';
    }
    if(interlineado.value == '2'){
        textoAriba.style.lineHeight = '2';
        textoAbajo.style.lineHeight = '2';
    }
    if(interlineado.value == '2.5'){
        textoAriba.style.lineHeight = '2.5';
        textoAbajo.style.lineHeight = '2.5';
    }
})

// ****************************************************PANEL IMAGEN**************************************
const url = document.getElementById('input-url')
const imagenMeme = document.getElementById('imagen-meme');

imagenMeme.addEventListener('click', (event) => {
    const urlIngresado2 = url.innerText('');
    imagenMeme = event.target.value
    imagenMeme.style.backgroundImage = src= `${urlIngresado2}`
} )