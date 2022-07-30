let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let tooltip_text = document.querySelector("#tooltip");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@*()-+&#";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    password.innerHTML = pass;
    containerPassword.classList.remove('hide');  
    novaSenha = pass;
}





function copyPassword(){
   navigator.clipboard.writeText(novaSenha);
   tooltip_text.innerHTML = "COPIADO! 👍";
   setTimeout(function(){
    tooltip_text.innerHTML = "Clique na senha para copiar 👆";
   },1500);

}

