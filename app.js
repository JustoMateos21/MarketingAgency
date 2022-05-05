const nav= document.getElementById("nav")

//Form
const formBtn= document.getElementById('formBtn')
const nameInput= document.getElementById('name')
const correoInput= document.getElementById('correo')
const inputResultados= document.getElementById('inputResultados')
const errorElement= document.getElementById('error')
const form= document.getElementById('form')

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
const emailExampV= document.getElementById('emailExample')

// IMAGENES
const primerImg='./captcha/captcha1.png'
const segImg='./captcha/captcha2.png'
const terImg='./captcha/captcha3.png'
const cuarImg= './captcha/captcha4.png'

let randNum= Math.floor(Math.random() * (4 - 1) + 1);

let randomImage= () =>{
    captchaImage.src = `./captcha/captcha${randNum}.png`
    captchaImgContainer.appendChild(captchaImage)
    captchaImage.classList.toggle('imgCaptcha')
}
randomImage()

let mostrarCaptcha= () =>{
    captchaC.classList.toggle("captcha__container")
}

let mostrarAlert= () =>{
    captchaAlert.classList.toggle('textalert')
}

const captchaValidado= ()=>{
    validado.innerHTML= "Ok validado"
    captchaC.appendChild(validado)
}

const captchaValidation= ()=>{
      mostrarCaptcha()
      if(captchaImage.src === primerImg){
        if(userInput === imkiz){
            alert("captcha")
        }
      }
}



nameInput.addEventListener('keypress', () =>{
        nombreV.classList.add("colorverde")
})

nameInput.addEventListener('keydown', () =>{
    const minCaract= 0;
    if(nameInput.value.length <2){
       nombreV.classList.remove("colorverde")
     }
})


nameInput.addEventListener('keypress', () =>{
    if(nameInput.value.length > 2){
       nombreCarac.classList.add("colorverde")
     }
})

nameInput.addEventListener('keydown', () =>{
    if(nameInput.value.length < 4){
       nombreCarac.classList.remove("colorverde")
     }
})

correoInput.addEventListener('keypress', () =>{
    if(correoInput.value.length !== 0){
        emailV.classList.add("colorverde")
      }
})

correoInput.addEventListener('keydown', () =>{
    if(correoInput.value.length < 2){
        emailV.classList.remove("colorverde")
      }
})

correoInput.addEventListener('keypress', () =>{
    var cont=0;
	for (var i = 0, j = correoInput.length; i < j; i++) {
	 if(correoInput.value.indexOf(i) === "@"){
	//  cont++;
     emailV.classList.add("colorverde")
	  }
	}
})

correoInput.addEventListener('keydown', () =>{
    var cont=0;
	for (var i = 0, j = correoInput.length; i < j; i++) {
	 if(correoInput[i] !== "@"){
	 cont++;
     emailV.classList.add("colorverde")
	  }
	}
})


//VALIDACION FORMULARIO
form.addEventListener('submit', (e) =>{
    let messages= [] 
  if(nameInput.value === '' || nameInput.value === null){
      messages.push('Se requiere un nombre')
  }
  if(nameInput.value.length < 3 || nameInput.value === null){
    messages.push('El nombre debe tener al menos 3 caracteres')
    }


  if(correoInput.value === '' || correoInput.value === null){
    messages.push('Se requiere un correo')
    }

  if(captchaInput.value.lenth === 0 || captchaInput === null){
      messages.push('Captcha requerido para enviar formulario')
  }

  if(messages.length > 0){
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
  }
})

formBtn.addEventListener('click', captchaValidation())

window.addEventListener("scroll", function() {
    nav.classList.toggle("nav-bg", window.scrollY > 0)
})