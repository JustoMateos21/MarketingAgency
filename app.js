const nav= document.getElementById("nav")

//Form
const formBtn= document.getElementById('formBtn')
const nameInput= document.getElementById('name')
const correoInput= document.getElementById('correo')
const inputResultados= document.getElementById('inputResultados')
const errorElement= document.getElementById('error')
const form= document.getElementById('form')
const formMessage= document.querySelector('#formSent')

//Captcha
const captchaC= document.querySelector('#captchaCnt')
const captchaInput = document.getElementById("userInput");
const captchaImgContainer= document.querySelector('#imgContainer')
const captchaImage= document.createElement('img')
const captchaAlert= document.getElementById('captchaAlert')
const captchaBtn= document.querySelector('#captchaBtn')
const validado= document.createElement('h4')

//VALIDACIONES 
let nombreV= document.getElementById('nombreValidado')
const emailV= document.getElementById('emailValidado')
const nombreCarac= document.getElementById('nombreCaract')
const resultadosDeseados= document.getElementById('resultadosDeseados')
const ingreseCaptcha= document.getElementById('ingreseCaptcha')
const ingreseCaptchaV= document.getElementById('ingreseCaptchaValido')

//slide reviews
const nextArrow= document.querySelector('#nArrow')
const prevArrow= document.querySelector('#pArrow')
const comentContainer= document.getElementById('comentContainer')
const reviewsCont= document.getElementById('reviewsCont')
const comentario= document.getElementById('comentario')
const personImage= document.querySelector('#personImage')


if(location.pathname.match("contacto")){

let randNum= Math.floor(Math.random() * (8 - 1) + 1);

let randomImage= () =>{
    captchaImage.src = `./captcha/captcha${randNum}.png`
    captchaImgContainer.appendChild(captchaImage)
    captchaImage.classList.toggle('imgcaptcha')
}

randomImage()

let randomNewImage= () =>{
  captchaImgContainer.removesChild(captchaImage)
  captchaImage.src = `./captcha/captcha${randNum}.png`
  captchaImgContainer.appendChild(captchaImage)
  captchaImage.classList.toggle('imgcaptcha')
}

const agregarColorCondicion= () =>{
document.addEventListener('keypress', () =>{
    if(nameInput.value.length !== 0){
        nombreV.classList.add("colorverde")
      }
    if(nameInput.value.length > 2){
        nombreCarac.classList.add("colorverde")
    }
    if(correoInput.value.length !== 0){
        emailV.classList.add("colorverde")
      }  
    if(inputResultados.value.length !== 0){
     resultadosDeseados.classList.add("colorverde")
    } 
    if(captchaInput.value.length !== 0){
        ingreseCaptcha.classList.add("colorverde")
    }
})
}

agregarColorCondicion()


const limpiarColorCondicion=() => {
document.addEventListener('keydown', ()=>{
if(nameInput.value.length <2){
  nombreV.classList.remove("colorverde")
}
if(nameInput.value.length < 4){
  nombreCarac.classList.remove("colorverde")
}
if(correoInput.value.length < 2){
  emailV.classList.remove("colorverde")
}
if(inputResultados.value.length < 2){
  resultadosDeseados.classList.remove("colorverde")
}
if(captchaInput.value.length < 2){
  ingreseCaptcha.classList.remove("colorverde")
}    
})
}

limpiarColorCondicion()

const limpiarImputs= ()=>{
  nameInput.value= " "
  correoInput.value= " "
  inputResultados.value= " "
  captchaInput.value= " "
}

const limpiarColor= ()=>{
  nombreV.classList.remove("colorverde")
  nombreCarac.classList.remove("colorverde")
  emailV.classList.remove("colorverde")
  resultadosDeseados.classList.remove("colorverde")
  ingreseCaptcha.classList.remove("colorverde")
}

//VALIDACION FORMULARIO

form.addEventListener('submit', (e) =>{
    let messages= [] 
  if(nameInput.value === '' || nameInput.value === null){
      messages.push('no hay nombre')
      nombreV.classList.toggle('vibracion')
      
  }
  if(nameInput.value.length <= 3 || nameInput.value === null){
      messages.push('nombre corto')
     nombreCarac.classList.toggle('vibracion')
    }

  if(correoInput.value === '' || correoInput.value === null){
    messages.push('no hay correo')
    emailV.classList.toggle('vibracion')
    }

  if(inputResultados.value === '' ||inputResultados.value === null){
    messages.push('no hay resultados')
    resultadosDeseados.classList.toggle('vibracion')
    }  

  if(captchaInput.value === '' || captchaInput === null){
    messages.push('ingrese captcha valido')
    ingreseCaptcha.classList.toggle('vibracion')
  }
  
  const captchaValido= ["itemnulo","imkiz", "fdamc", "qgphjd", "pqjryd", "phxxjdrk", "wvvjcfua", "dpbaiajz", "lucytpft"]
  const imageNum= [randNum]
      if(captchaInput.value.toLowerCase() !== captchaValido[imageNum]){
        messages.push('ingrese captcha valido')
        ingreseCaptchaV.innerHTML= "Captcha invalido"
        ingreseCaptchaV.classList.toggle('vibracion')
      }
  
if(inputResultados.value === '' || inputResultados.value === null){
    messages.push('no completaste resultados')
     ingreseCaptchaV.innerHTML= "Captcha invalido"
}

  if(messages.length > 0){
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
  }
  if(messages.length === 0){
    e.preventDefault()
    limpiarImputs()
    formMessage.classList.toggle('formsent__container')
    limpiarColor()
}
})

}




//SLIDE
const sum= +1;
const rest= -1
if(location.pathname.match("resenas")){

  nextArrow.addEventListener('click', () =>{
    comentContainer.classList.toggle('animacion-slide')
    for(let i= 0; i< 5; i++){
      personImage.src= `./personas/persona${i}.png`
    }
  })

  prevArrow.addEventListener('click', () =>{
    comentContainer.classList.toggle('animacion-slide')
      personImage.src= `./personas/persona${rest}.png`
  })

 }

//EFECTO MENU
window.addEventListener("scroll", function() {
  nav.classList.add("nav-bg", window.scrollY > 0)
})

if(window.scrollY > 0){
  nav.classList.add("nav-bg")
}

