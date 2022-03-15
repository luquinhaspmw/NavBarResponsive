window.onload = () =>{
    // open sub-menu
    const simbolo = document.querySelector(".simbolo");
    const subContato = document.querySelector(".sub-contato")
    const subMenuLink = document.querySelector(".link-sub-contato")
    subMenuLink.addEventListener("click",()=>{
        subContato.classList.toggle("sub-active");
        simbolo.classList.toggle("simbolo-open");
    })
    
    // menu-mobile active 
    const menu = document.querySelector("#container-menu");
    const barIcon = document.querySelector(".bar-icon");
    barIcon.addEventListener("click",()=>{
        menu.classList.toggle("active");
        barIcon.classList.toggle("bar-icon-active")
    })
}