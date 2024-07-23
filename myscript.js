const cardkonten = document.querySelectorAll(".card-konten");
const cardhover = document.querySelectorAll(".card-hover");
const navbartext = document.querySelectorAll(".navbar-text");

cardkonten.forEach((e)=>{
    e.addEventListener("mouseenter",(elem)=>{
        elem.stopImmediatePropagation();
        e.children[0].style.opacity = 1;
    })
    e.addEventListener("mouseleave",(elem)=>{
        elem.stopImmediatePropagation();
        e.children[0].style.opacity = 0;
    })
})

navbartext.forEach((e)=>{
    e.addEventListener("mouseenter",(elem)=>{
        console.log("p")
        elem.stopImmediatePropagation();
        e.children[0].classList.remove("text-body");
        e.children[0].style.color = "#B88E2F";
        e.children[0].style.borderBottom = "1px solid #B88E2F";
    })
    e.addEventListener("mouseleave",(elem)=>{
        elem.stopImmediatePropagation();
        e.children[0].classList.add("text-body");
        e.children[0].style.color = "";
        e.children[0].style.borderBottom = "0px solid #B88E2F";
    })
})