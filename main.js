var cardAvt= document.querySelector('.card-avt');

cardAvt.addEventListener("mouseover",function(){
    cardAvt.removeAttribute("src")
    cardAvt.setAttribute("src","./img/bg.jpg")
})
cardAvt.addEventListener("mouseout",function(){
    cardAvt.removeAttribute("src")
    cardAvt.setAttribute("src","./img/a.png")
})
