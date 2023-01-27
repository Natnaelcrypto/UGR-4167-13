const lab=document.querySelector("#lab")
const public=document.querySelector("#public")
const private=document.querySelector("#private")

const filter = document.querySelector("#filter")
            filter.addEventListener("click", (e) => {
                const values = document.forms.filters.filter.value
                console.log(values)
                if(values=="Private hospital"){
                    
                    lab.style.display="none"
                    public.style.display="none"
                    private.style.display="block"
                }
                
                if(values=="Public hospital"){

                    lab.style.display="none"
                    public.style.display="block"
                    private.style.display="none"
                }
                if(values=="Labratory"){
                    public.style.display="none"
                    lab.style.display="block"
                    private.style.display="none"
                }
                if(values=="All"){
                    public.style.display="block"
                    private.style.display="block"
                    lab.style.display="block"
                }
                
})


const button_hidden=document.querySelector(".button-hidden")
const exitbutton= document.querySelector(".exitbutton");
const nevcontent=document.querySelector(".nevcontent")

button_hidden.addEventListener("click",()=>{
    nevcontent.style.display="flex"
}
);

exitbutton.addEventListener("click",()=>
    nevcontent.style.display="none"
)