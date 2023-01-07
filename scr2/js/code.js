

const service_button=document.querySelector(".service-button")
const linkes=document.querySelector(".linkes")
const button_hidden=document.querySelector(".button-hidden")
const exitbutton= document.querySelector(".exitbutton");
const nevcontent=document.querySelector(".nevcontent")
const detile1=document.querySelector(".detile1")
const detile2=document.querySelector(".detile2")
const detile3=document.querySelector(".detile3")
const detile4=document.querySelector(".detile4")
const down1=document.querySelector("#down1");
const up1=document.querySelector("#up1");
const down2=document.querySelector("#down2");
const up2=document.querySelector("#up2");
const down3=document.querySelector("#down3");
const up3=document.querySelector("#up3");
const down4=document.querySelector("#down4");
const up4=document.querySelector("#up4");

service_button.addEventListener("click",()=>{
    if (linkes.style.display=="none"){
    linkes.style.display="flex";
   
    }
    else{                      
    linkes.style.display="none";
    }
});

button_hidden.addEventListener("click",()=>nevcontent.style.display="flex"
);

exitbutton.addEventListener("click",()=>
    nevcontent.style.display="none"
)
down1.addEventListener("click",()=>{
        detile4.style.display="block";
        down1.style.display="none"
        up1.style.display="block"

})
up1.addEventListener("click",()=>{
    detile4.style.display="none";
    down1.style.display="block";
    up1.style.display="none";
})
down2.addEventListener("click",()=>{
        detile3.style.display="block";
        down2.style.display="none"
        up2.style.display="block"

})
up2.addEventListener("click",()=>{
    detile3.style.display="none";
    down2.style.display="block";
    up2.style.display="none";
})
down3.addEventListener("click",()=>{
        detile2.style.display="block";
        down3.style.display="none"
        up3.style.display="block"

})
up3.addEventListener("click",()=>{
    detile2.style.display="none";
    down3.style.display="block";
    up3.style.display="none";
})
down4.addEventListener("click",()=>{
        detile1.style.display="block";
        down4.style.display="none"
        up4.style.display="block"

})
up4.addEventListener("click",()=>{
    detile1.style.display="none";
    down4.style.display="block";
    up4.style.display="none";
})
