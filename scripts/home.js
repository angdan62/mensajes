const videoList = document.querySelectorAll(".videoIcon");
const videoShow = document.querySelector(".videoShow");


console.log(videoList[0])
let i=0;
videoList.forEach(video => {
    video.addEventListener("click", () =>{
        playVideo();
    })
});


function playVideo(){
    videoShow.innerHTML=`<video class="videoPlay" width="100%" height="100%" controls>  
                            <source src="../img/home/videos/vi_001.mp4" type="video/mp4">   
                        </video> "`
}























// CONTROLES PARA MANEJO DE PANELES EN LA SECCION DE GALERIA Y VIDEOS


const panels = document.querySelectorAll('.panel')
const panels2 = document.querySelectorAll('.panel2')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panels)
        panel.classList.add('active')
    })
})

panels2.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panels2)
        panel.classList.add('active2')
    })
})


function removeActiveClasses(panel) {
    panel.forEach(p => {
        if(p.classList.contains('active')){
            p.classList.remove('active');
        }else{
            p.classList.remove('active2');
        }
    })
}