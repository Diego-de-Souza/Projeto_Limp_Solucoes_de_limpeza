// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
/*
usernameInput.addEventListener("focus",function(){
    usernameLabel.classList.add("requerid-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur",function(){
    usernameLabel.classList.remove("requerid-popup")
})
*/
// Validar valor do input
usernameInput.addEventListener("change",function(e){
    let valor = e.target.value

    if(valor.length <4){
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "O nome precisa ser maior de 3 caracteres"
        usernameHelper.classList.add("visible")

    }else{
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
        usernameInput.classList.remove("error")

    }
})

// ---------- VALIDAÇÃO E_MAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");


function mostrarPopup(input,label){
    input.addEventListener("focus",function(){
        label.classList.add("requerid-popup")
    })
}

emailInput.addEventListener("change",function(e){
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")

    }else{
    emailInput.classList.remove("correct")
    emailInput.classList.add("error")
    emailHelper.classList.add("visible")
    emailHelper.innerText = "E-mail inválido!"

}

})

input.addEventListener("blur",function(){
    label.classList.remove("requerid-popup")
})
mostrarPopup(usernameInput,usernameLabel)
mostrarPopup(emailInput,emailLabel)