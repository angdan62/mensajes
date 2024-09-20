const mensajeQR = document.getElementById("mensajeqr");
const imagenQR = document.getElementById("imagenQR");
const imgQR = "qr.png";
const imgtexto = "mensaje.png";

let qrToText = true;


mensajeQR.addEventListener("click", ()=>{
    if(qrToText){
        imagenQR.src = `./img/${imgtexto}`;
    }else{
        imagenQR.src = `./img/${imgQR}`;
    }
    qrToText = !qrToText;
})