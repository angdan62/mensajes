


const passwordInput = document.querySelector(".password");
const submitInput = document.querySelector(".login");
const forgetPassword = document.querySelector(".forgetPassword");
const alertMessage = document.querySelector(".alertMessage");
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
    let passwordUser = passwordInput.value;
    if(passwordUser == "081217"){
        window.open("./pages/main.html", "_self");
    }
    else{
        alertMessage.textContent = "Contraseña Incorrecta."
    }
})

