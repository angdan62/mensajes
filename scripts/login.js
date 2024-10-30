


const passwordInput = document.querySelector(".password");
const submitInput = document.querySelector(".login");
const forgetPassword = document.querySelector(".forgetPassword");
const alertMessage = document.querySelector(".alertMessage");
const keyUser = "e102f95572e59f8e8f4590e6dfd86f64d1dbd9b92ee9847e7875bedcecbe74d9";
//CONTROL PARA CUANDO SE OLVIDÓ LA CONTRASEÑA

forgetPassword.addEventListener("click", () =>{
    swal({
        title: "¿Te has olvidado de la fecha especial?",
          text: "Fecha a 6 digitos, dd/mm/aa",
          type: "warning",
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Volver a Intentarlo'
        });
});


//CONTROL INICIAR SESIÓN

submitInput.addEventListener("click", ()=>{
    let passwordUser = encryptSHA256(passwordInput.value);
    if(passwordUser == keyUser){
        window.open("./pages/main.html", "_self");
    }
    else{
        alertMessage.textContent = "Contraseña Incorrecta."
        passwordInput.value="";
    }
})

passwordInput.addEventListener("click", ()=>{
    alertMessage.textContent="";
})


//FUNCION PARA ENCRIPTAR KEY

function encryptSHA256(text) {
    return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
  }