const Signup_button=document.querySelector("#Signup_button")
            
            const validate=()=>{
                
                const Full_name=document.forms.signup_form.Full_Name.value
                const Email = document.forms.signup_form.Email.value
                const username = document.forms.signup_form.username.value
                const password = document.forms.signup_form.password.value
                const confirm_password = document.forms.signup_form.confirm_password.value

                if(Email){
                    let last=Email.slice(-10,Email.length-1)
                    if(last!="@gmail.co"){
                        alert(`Email form is not correct (example@gmail.com) ${last}`)
                    }
                }
                if(password){
                    let number=password.length
                    if(number<8){
                        alert("password must be greater than 8")
                    }
                }
                if(password&& confirm_password){
                    if (password == confirm_password) {
                        alert("password and confirm password must be same")
                    }

                }
                console.log("clicked")
            }

            Signup_button.addEventListener("click",()=>{
                validate()
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