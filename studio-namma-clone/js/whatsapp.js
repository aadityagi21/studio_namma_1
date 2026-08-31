const whatsapp = document.querySelector(".whatsapp");
let div = document.createElement("div");
div.setAttribute("class","whatsappOpen");
document.querySelector("body").append(div);
div.style.visibility = "hidden";
f = true;
whatsapp.addEventListener("click",()=>{
    // f = true;
    if(f){
        div.style.visibility = "visible";
        f = false;
    }
    else {
        div.style.visibility = "hidden";
        f = true;
    }
})