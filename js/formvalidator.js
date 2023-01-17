const form=document.querySelector("#signup_form")
            
        

            form.addEventListener("submit",(e)=>{

                const Full_name=document.forms.signup_form.Full_Name.value
                const Email = document.forms.signup_form.Email.value
                const username = document.forms.signup_form.username.value
                const password = document.forms.signup_form.password.value
                const confirm_password = document.forms.signup_form.confirm_password.value
                const email_error=document.querySelector(".email_error")
                const password_error=document.querySelector(".password_error")
                const confirm_password_error=document.querySelector(".confirm_password_error")
                if(Email){
                    let last=Email.slice(-10,Email.length-1)
                    let errors=false
                    if(last!="@gmail.co"){
                        email_error.style.display="block"
                        errors=true
                    }
                    else{
                        email_error.style.display="none"
                        errors=false
                    }
                }
                if(password){
                    let number=password.length
                    if(number<8){
                        password_error.style.display="block"
                        errors=true
                    }
                    else{
                        password_error.style.display="none"
                        errors=false
                    }
                }
                if(password&& confirm_password){
                    if (password != confirm_password) {
                        confirm_password_error.style.display="block"
                        errors=true
                    }
                    else{
                        confirm_password_error.style.display="none"
                        errors=false
                    }

                }
                if(errors==true){
                    e.preventDefault()
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