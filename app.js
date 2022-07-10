// elementos con los que trabajo paneles
// ****************************************************PANEL TEXTO*************************************
// abir y cerrar paneles
const imagen = document.getElementById('panel-imagen');
const texto = document.getElementById('panel-texto');
const panel = document.getElementById('panel');
const botonImagen = document.getElementById('boton-imagen');
const botonTexto = document.getElementById('boton-texto');
const botonCerrar = document.getElementById('cerrar-panel');
const modoClaro = document.getElementById('boton-modo-claro');
const header = document.getElementById('header');
const memeContenedor = document.getElementById('meme-contenedor');
const panelControlColorImg = document.getElementById('panel-control-color-imagen');
const panelControlColorTxt = document.getElementById('panel-control-color-texto');
const panelControlColorTxt2 = document.getElementById('panel-control-color-texto2');
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

modoClaro.addEventListener('click', () => {
    modoClaro.innerText = 'Modo Oscuro';
    header.classList.toggle('header-claro');
    memeContenedor.classList.toggle('meme-contenedor-claro');
    panel.classList.toggle('panel-claro');
    url.classList.toggle('panel-control-input-claro');
    panelControlColorImg.classList.toggle('claro');
    mezclaMenu.classList.toggle('panel-control-input-claro');
    botonRestablecer.classList.toggle('boton-restablecer-claro');
    botonCerrar.classList.toggle('button-claro');
    botonContornoClaro.classList.toggle('button-claro');
    botonContornoOscuro.classList.toggle('button-claro');
    botonSinContorno.classList.toggle('button-claro');
    botonCentro.classList.toggle('button-claro');
    botonDerecha.classList.toggle('button-claro');
    botonIzquierda.classList.toggle('button-claro');
    botonTexto.classList.toggle('button-claro');
    botonImagen.classList.toggle('button-claro');
    modoClaro.classList.toggle('button-claro');
    inputTextoInferior.classList.toggle('panel-control-input-claro');
    inputTextoSuperior.classList.toggle('panel-control-input-claro');
    interlineado.classList.toggle('panel-control-input-claro');
    espaciado.classList.toggle('panel-control-input-claro');
    fuentes.classList.toggle('claro');
    tamañoTexto.classList.toggle('claro');
    panelControlColorTxt.classList.toggle('claro');
    panelControlColorTxt2.classList.toggle('claro');
})
//texto 
const inputTextoSuperior = document.getElementById('texto-superior-input');
const textoAriba = document.getElementById('texto-arriba');
const inputTextoInferior = document.getElementById('texto-inferior-input');
const textoAbajo = document.getElementById('texto-abajo');
inputTextoSuperior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    textoAriba.innerHTML = textoIngresado;
})
inputTextoInferior.addEventListener('input', (event) => {
    const textoIngresado2 = event.target.value;
    textoAbajo.innerHTML = textoIngresado2;
})

const textoSuperior = document.getElementById('sin-texto-superior');
const textoInferior = document.getElementById('sin-texto-inferior');
textoSuperior.addEventListener('click', (event) => {
    textoAriba.classList.toggle('oculto');
})
textoInferior.addEventListener('click', (event) => {
    textoAbajo.classList.toggle('oculto');
})
//fuentes
const fuentes = document.getElementById('selector-fuentes');
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
//tamaños de texto
const tamañoTexto = document.getElementById('tamaño-texto')
tamañoTexto.addEventListener('input', (event) => {
    const numeroIngresado = event.target.value;
    textoAriba.style.fontSize = `${numeroIngresado}px`;
    textoAbajo.style.fontSize = `${numeroIngresado}px`;

})
//alineacion
const botonIzquierda = document.getElementById('alineacion-izquierda');
const botonCentro = document.getElementById('alineacion-centro');
const botonDerecha = document.getElementById('alineacion-derecha');
botonIzquierda.addEventListener('click', () => {
    textoAriba.style.textAlign = 'left';
    textoAbajo.style.textAlign = 'left';
})
botonCentro.addEventListener('click', () => {
    textoAriba.style.textAlign = 'center';
    textoAbajo.style.textAlign = 'center';
})
botonDerecha.addEventListener('click', () => {
    textoAriba.style.textAlign = 'right';
    textoAbajo.style.textAlign = 'right';
})
//color
const colorTexto = document.getElementById('texto-color-input');
const colorTextoSpan = document.getElementById('texto-color')
colorTexto.addEventListener('input', (event) => {
  const colorElegido = event.target.value;
  textoAriba.style.color = `${colorElegido}`;
  textoAbajo.style.color = `${colorElegido}`;
  colorTextoSpan.innerText = `${colorElegido}`;
})
//fondo
const colorFondo = document.getElementById('texto-color-fondo-input');
const colorFondoFinal = document.getElementById('imagen-editable');
const colorFondoSpan = document.getElementById('texto-color-fondo');
colorFondo.addEventListener('input', (event) => {
    const colorFondoElegido = event.target.value;
    textoAriba.style.backgroundColor = `${colorFondoElegido}`;
    textoAbajo.style.backgroundColor = `${colorFondoElegido}`;
    colorFondoSpan.innerText = `${colorFondoElegido}`;
})

const sinFondo = document.getElementById('texto-sin-fondo');
sinFondo.addEventListener('click', (event) => {
    textoAbajo.classList.toggle('fondo');
    textoAriba.classList.toggle('fondo');
})
//contornos
const botonSinContorno = document.getElementById('sin-contorno');
const botonContornoClaro = document.getElementById('contorno-claro');
const botonContornoOscuro = document.getElementById('contorno-oscuro');
botonSinContorno.addEventListener('click', () => {
    textoAriba.style.webkitTextStroke = 'transparent';
    textoAbajo.style.webkitTextStroke = 'transparent';
})
botonContornoClaro.addEventListener('click', () => {
    textoAriba.style.webkitTextStroke = '0.5px white';
    textoAbajo.style.webkitTextStroke = '0.5px white';
})
botonContornoOscuro.addEventListener('click', () => {
    textoAriba.style.webkitTextStroke = '0.5px black';
    textoAbajo.style.webkitTextStroke = '0.5px black';
})
//espaciado
const espaciado = document.getElementById('espaciado-input');
espaciado.addEventListener('input', (event) => {
    const espacioIngresado = event.target.value;
    textoAriba.style.height = `${espacioIngresado}vh`;
    textoAbajo.style.height = `${espacioIngresado}vh`;
})
//interlineado
const interlineado = document.getElementById('interlineado-input');
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
// agregado de la imagen mediante url
const url = document.getElementById('input-url');
const imagenMeme = document.getElementById('imagen-meme');
url.addEventListener('input', (event) => {
    const rutaImg = event.target.value;
    imagenMeme.style.backgroundImage = `url(${rutaImg})`;
})
//mezcla de colores
const mezclaColores = document.getElementById('mezcla-colores-input');
const mezclaColoresSpan = document.getElementById('mezcla-colores');
mezclaColores.addEventListener('input', (event) => {
    const mezclaFinal = event.target.value;
    imagenMeme.style.backgroundColor = `${mezclaFinal}`;
    mezclaColoresSpan.innerText = `${mezclaFinal}`;
})
//opciones de mezcla
const mezclaMenu = document.getElementById('mezcla-colores-menu');
mezclaMenu.addEventListener('change', () => {
    if(mezclaMenu.value == 'Ninguno'){
        imagenMeme.style.backgroundBlendMode = 'unset';
    }
    if(mezclaMenu.value == 'Aclarar'){
        imagenMeme.style.backgroundBlendMode = 'lighten';
    }
    if(mezclaMenu.value == 'Oscurecer'){
        imagenMeme.style.backgroundBlendMode = 'darken';
    }
    if(mezclaMenu.value == 'Diferencia'){
        imagenMeme.style.backgroundBlendMode = 'difference';
    }
    if(mezclaMenu.value == 'Luminocidad'){
        imagenMeme.style.backgroundBlendMode = 'luminosity';
    }
    if(mezclaMenu.value == 'Multiplicar'){
        imagenMeme.style.backgroundBlendMode = 'multiply';
    }
})
//filtros
const brillo = document.getElementById('brillo-deslizar');
brillo.addEventListener('input', (event) => {
    brilloFinal = event.target.value;
    imagenMeme.style.filter = `brightness(${brilloFinal})`;
}) 
const opacidad = document.getElementById('opacidad-deslizar');
opacidad.addEventListener('input', (event) => {
    opacidadFinal = event.target.value;
    imagenMeme.style.filter = `opacity(${opacidadFinal})`;
}) 
const contraste = document.getElementById('contraste-deslizar');
contraste.addEventListener('input', (event) => {
    constrasteFinal = event.target.value;
    imagenMeme.style.filter = `contrast(${constrasteFinal}%)`;
}) 
const desenfoque = document.getElementById('des-deslizar');
desenfoque.addEventListener('input', (event) => {
    desenfoqueFinal = event.target.value;
    imagenMeme.style.filter = `blur(${desenfoqueFinal}px)`;
}) 
const escalaDeGrises = document.getElementById('escala-deslizar');
escalaDeGrises.addEventListener('input', (event) => {
    escalaDeGrisesFinal = event.target.value;
    imagenMeme.style.filter = `grayscale(${escalaDeGrisesFinal}%)`;
}) 
const sepia = document.getElementById('sepia-deslizar');
sepia.addEventListener('input', (event) => {
    sepiaFinal = event.target.value;
    imagenMeme.style.filter = `sepia(${sepiaFinal}%)`;
}) 
const hue = document.getElementById('hue-deslizar');
hue.addEventListener('input', (event) => {
    hueFinal = event.target.value;
    imagenMeme.style.filter = `hue-rotate(${hueFinal}deg)`;
}) 
const saturacion = document.getElementById('saturacion-deslizar');
saturacion.addEventListener('input', (event) => {
    saturacionFinal = event.target.value;
    imagenMeme.style.filter = `saturate(${saturacionFinal}%)`;
}) 
const negativo = document.getElementById('negativo-deslizar');
negativo.addEventListener('input', (event) => {
    negativoFinal = event.target.value;
    imagenMeme.style.filter = `invert(${negativoFinal})`;
}) 
//boton restablecer
const botonRestablecer = document.getElementById('boton-restablecer');
botonRestablecer.addEventListener('click', (event) => {
    brillo.value = '1';
    imagenMeme.style.filter = 'brightness(1)';
    opacidad.value = '1';
    imagenMeme.style.filter = 'opacity(1)';
    contraste.value = '0';
    imagenMeme.style.filter = 'contrast(100%)';
    desenfoque.value = '0';
    imagenMeme.style.filter = 'blur(0px)';
    escalaDeGrises.value = '0';
    imagenMeme.style.filter = 'grayscale(0%)';
    sepia.value = '0';
    imagenMeme.style.filter = 'sepia(0%)';
    hue.value = '0';
    imagenMeme.style.filter = 'hue-rotate(0deg)';
    saturacion.value = '0';
    imagenMeme.style.filter = 'saturate(100%)';
    negativo.value = '0';
    imagenMeme.style.filter = 'invert(0)';
})
//boton de descarga
const botonDescargar = document.getElementById('boton-descargar');
botonDescargar.addEventListener('click', () => {
    domToImage.toBlob(document.getElementById('imagen-editable')).then(blob => 
        saveAs(blob, 'mi-meme.png'));
})