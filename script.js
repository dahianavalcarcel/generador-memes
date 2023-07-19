// FOTO
const darkMode = document.querySelector(".dark-mode")
const buttonMode = document.querySelector(".button-mode")
const lightMode = document.querySelector(".light-mode")

buttonMode.onclick = () => {
darkMode.classList.toggle("dark-mode")
darkMode.classList.toggle("light-mode")

if (darkMode.classList.contains("dark-mode")) {
buttonMode.textContent = "🌞 Modo Claro"
}
else {
buttonMode.textContent = "🌙 Modo Oscuro"
}
}

const buttonDescarga = document.getElementById("btn-descarga");
const meme = document.getElementById("contenedor-main");


buttonDescarga.onclick = () => {
  
    domtoimage.toBlob(meme)
    .then((blob) => {
        window.saveAs(blob, 'Your_Meme.png');
    })
    
}


const asideImage = document.getElementById("aside-imagen")
const asideText = document.getElementById("aside-texto")
const buttonImage = document.getElementById("button-imagen")
const buttonText = document.getElementById("button-texto")


const openAsideImage = () => {
asideImage.style.display = "flex"
asideText.style.display = "none"
}

buttonImage.onclick = openAsideImage

const openAsideText = () => {
asideText.style.display = "flex"
asideImage.style.display = "none"
}

buttonText.onclick = openAsideText

const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById ('generador')

urlInput.addEventListener('input',(e)=> changeBackground(e))
  const changeBackground = (e)=> {
    console.log(e.target.value)
    memeImg.style.backgroundImage = `url(${e.target.value})`
    memeImg.style.backgroundSize = 'cover'
    memeImg.style.backgroundRepeat ='no-repeat'  
    memeImg.style.backgroundPosition = 'center'
    
}

const inputColor = document.getElementById("blend-mode-color-input");
const colorHex = document.getElementById("blend-mode-color");

inputColor.oninput = () => {
memeImg.style.backgroundColor = (inputColor.value)
colorHex.textContent = (inputColor.value)
}

//Mix Blend 

const mixBlend = document.getElementById("blend-mode-select"); //id de select 

mixBlend.onchange = () => {

if (mixBlend.value === "aclarar") {
  memeImg.style.mixBlendMode = "lighten"
}
else if (mixBlend.value === "oscurecer") {
  memeImg.style.mixBlendMode = "darken"
}
else if (mixBlend.value === "diferencia") {
  memeImg.style.mixBlendMode = "difference"
}
else if (mixBlend.value === "luminosidad") {
  memeImg.style.mixBlendMode = "luminosity"
}
else if (mixBlend.value === "multiplicar") {
  memeImg.style.mixBlendMode = "multiply"
}
else {
  memeImg.style.mixBlendMode = ""
}
}

// FILTROS

const saturationInput = document.getElementById('saturate-input');
const grayscaleInput= document.getElementById('grayscale-input');
const contrastInput= document.getElementById('contrast-input');
const opacityInput = document.getElementById('opacity-input');
const brightInput = document.getElementById('bright-input');
const invertInput = document.getElementById('invert-input');
const sepiaInput= document.getElementById('sepia-input');
const blurInput = document.getElementById('blur-input');
const hueInput= document.getElementById('hue-input');

const filtros= () => {

  memeImg.style.filter = `brightness(${brightInput.value})
    opacity(${opacityInput.value}) blur(${blurInput.value}px) 
    contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%)
    hue-rotate(${hueInput.value}deg) sepia(${sepiaInput.value}%)
    saturate(${saturationInput.value}%) invert(${invertInput.value})`
} 

saturationInput.addEventListener('input', () => filtros());
grayscaleInput.addEventListener('input', () => filtros());
contrastInput.addEventListener('input', () => filtros());
opacityInput.addEventListener('input', () => filtros());
brightInput.addEventListener('input', () => filtros());
invertInput.addEventListener('input', () => filtros());
sepiaInput.addEventListener('input', () => filtros());
blurInput.addEventListener('input', () => filtros());
hueInput.addEventListener('input', () => filtros());


// Reset FILTROS
const buttonRestored = document.getElementById("button-filtros");

buttonRestored.onclick = () => {
  brightInput.value = 1;
  opacityInput.value = 1;
  contrastInput.value = 100;
  blurInput.value = 0;
  grayscaleInput.value = 0;
  sepiaInput.value = 0;
  saturationInput.value = 100;
  invertInput.value = 0;
  hueInput.value = 0;

    memeImg.style.filter = "none";
}


const topCheck = document.getElementById("top-check");
const btmCheck = document.getElementById("btm-check");

topCheck.addEventListener("click", () => {
if (topCheck.checked) {
    txt1.style.display = "none";
} else {
    txt1.style.display = "flex";
}
});

btmCheck.addEventListener("click", () => {
if (btmCheck.checked) {
    txt2.style.display = "none";
} else {
    txt2.style.display = "flex";
}
});

const toptxt = document.getElementById("toptxt");
const btmtxt = document.getElementById("btmtxt");

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");

toptxt.addEventListener("keyup", () => {
txt1.innerHTML = toptxt.value;
});

btmtxt.addEventListener("keyup", () => {
txt2.innerHTML = btmtxt.value;
});

const optionFont = document.getElementById("optionfont")

optionFont.addEventListener('change', () =>{
if ( optionFont.value === "Arial"){
    txt1.style.fontFamily = "Arial, Helvetica, sans-serif"
    txt2.style.fontFamily = "Arial, Helvetica, sans-serif"
}
else if ( optionFont.value === "Montserrat"){
    txt1.style.fontFamily = "Montserrat"
    txt2.style.fontFamily = "Montserrat"       
}
else if (optionFont.value === "American" ) {
    txt1.style.fontFamily = "American Typewriter"
    txt2.style.fontFamily = "American Typewriter"
}
else if (optionFont.value === "Monospace" ) {
    txt1.style.fontFamily = "monospace"
    txt2.style.fontFamily = "monospace"
}
else if (optionFont.value === "Comic Sans MS" ) {
    txt1.style.fontFamily = "Comic Sans MS"
    txt2.style.fontFamily = "Comic Sans MS"
}
else if (optionFont.value === "Comic Neue" ) {
    txt1.style.fontFamily = "Comic Neue"
    txt2.style.fontFamily = "Comic Neue"
}
else if (optionFont.value === "Impact" ) {
    txt1.style.fontFamily = "Impact"
    txt2.style.fontFamily = "Impact"
}
else if (optionFont.value === "Verdana" ) {
    txt1.style.fontFamily = "Verdana"
    txt2.style.fontFamily = "Verdana"
}
else if (optionFont.value === "DGothic" ) {
    txt1.style.fontFamily = "DotGothic16"
    txt2.style.fontFamily = "DotGothic16"
}
})

// tamaño de fuente

const inputNumberFont = document.getElementById("number")

inputNumberFont.oninput = () =>{
    txt1.style.fontSize = `${inputNumberFont.value}px` 
    txt2.style.fontSize = `${inputNumberFont.value}px`
}

// buttons textalign
        
const textAlignLeft = document.getElementById("textalign-left")
const textAlignCenter = document.getElementById("textalign-center")
const textAlignRight = document.getElementById("textalign-right")

textAlignLeft.onclick = () => {
txt1.style.justifyContent = "flex-start"
txt2.style.justifyContent = "flex-start"
}

textAlignCenter.onclick = () => {
txt1.style.justifyContent = "center"
txt2.style.justifyContent = "center"
}

textAlignRight.onclick = () => {
txt1.style.justifyContent = "flex-end"
txt2.style.justifyContent = "flex-end"
}



const inputColorText = document.getElementById("font-color")

inputColorText.addEventListener('input', () =>{
txt1.style.color = inputColorText.value
txt2.style.color = inputColorText.value
})



const inputBackgroundColorText = document.getElementById("back-color")

inputBackgroundColorText.addEventListener('input', () =>{
txt1.style.backgroundColor = inputBackgroundColorText.value
txt2.style.backgroundColor = inputBackgroundColorText.value
})


const backgroundColor = document.getElementById("input-color")

backgroundColor.addEventListener('input', () =>{
mainCenter.style.backgroundColor = backgroundColor.value
})



const inputTransparent = document.getElementById("check-transparent")
inputTransparent.addEventListener('change', () =>{

if ( inputTransparent.checked == true ){
txt1.style.backgroundColor = backgroundColor.value
txt2.style.backgroundColor = backgroundColor.value
} 
else if ( inputTransparent.checked == false){
txt1.style.backgroundColor = inputBackgroundColorText.value
txt2.style.backgroundColor = inputBackgroundColorText.value
}
})

inputTransparent.addEventListener('change', () =>{

if ( inputTransparent.checked == true ){
txt1.style.backgroundColor = "transparent"   
txt2.style.backgroundColor = "transparent"     
} 
else if ( inputTransparent.checked == false){
txt1.style.backgroundColor = "white"
txt2.style.backgroundColor = "white"    
}
})



const buttonNone = document.getElementById("button1")
const buttonLight = document.getElementById("button2")
const buttonDark = document.getElementById("button3")

buttonNone.onclick = () =>{
txt1.style.textShadow = "none"
txt2.style.textShadow = "none"
}

buttonLight.onclick = () =>{
txt1.style.textShadow = "2px 2px 4px #FFFFFF"
txt2.style.textShadow = "2px 2px 4px #FFFFFF"
}

buttonDark.onclick = () =>{
txt1.style.textShadow = "2px 2px 2px #000000"
txt2.style.textShadow = "2px 2px 2px #000000"
}

// button espaciado

const inputNumberSpacing = document.getElementById("number-spacing");

inputNumberSpacing.oninput = () =>{
    txt1.style.height = `${inputNumberSpacing.value * 2}px`;
    txt1.style.marginBottom = `-${inputNumberSpacing.value * 2}px`;
    txt2.style.height = `${inputNumberSpacing.value * 2}px`;
    txt2.style.marginTop = `-${inputNumberSpacing.value * 2}px`;
}



const inputSelectLineSpacing = document.getElementById("line-spacing");

inputSelectLineSpacing.oninput = () => {
    txt1.style.lineHeight = inputSelectLineSpacing.value;
    txt2.style.lineHeight = inputSelectLineSpacing.value;
}
