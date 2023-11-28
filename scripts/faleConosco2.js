/*Declarção de váriaveis instaciação de objetos*/
const btnSubmit = document.getElementById('BtnSubmit');
const containerNome = document.getElementById('username');
const containerEmail = document.getElementById('email');
const containerAssunto = document.getElementById('assunto');
const containerMensagem = document.getElementById('mensagem');
/*****inicia a verificação e validação do formulario*****/
/* ação de mudar a cor do campo quando selecionado*/

containerNome.addEventListener('focus',()=>{
    containerNome.style.backgroundColor="#07478361";
})
containerEmail.addEventListener('focus',()=>{
    containerEmail.style.backgroundColor="#07478361";
})
containerAssunto.addEventListener('focus', ()=>{
    containerAssunto.style.backgroundColor="#07478361";
})
containerMensagem.addEventListener('focus',()=>{
    containerMensagem.style.backgroundColor="#07478361";
})
/***********Validação dos dados dos campos *************/
//declaração de variavel de confirmação de campos ok
let campoUsername=false; 
let campoEmail=false;
let campoAssunto=false; 
let campoMensagem = false;
/*ação de voltar a transparencia (sem cor) ao tirar o focu do elemento */
// Validar valor do input
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
containerNome.addEventListener('blur', (e)=>{
    containerNome.style.backgroundColor="";
    let valor = e.target.value
    if(valor.length <4 || valor== null){
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "O nome precisa ser maior de 3 caracteres";
        usernameHelper.classList.add("visible");
    }else{
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.remove("error");
        campoUsername=true;
    }
})
//validação do email
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
function mostrarPopup(input,label){
    input.addEventListener("focus",function(){
        label.classList.add("requerid-popup")
    })
}
containerEmail.addEventListener('blur',(e)=>{
    containerEmail.style.backgroundColor="";
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
        campoEmail=true;
    }else{
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "E-mail inválido!"
    }
})
//validação do campo assunto
let assuntoInput = document.getElementById("assunto");
let assuntoLabel = document.querySelector('label[for="assunto"]');
let assuntoHelper = document.getElementById("assunto-helper");
containerAssunto.addEventListener('blur', (e)=>{
    containerAssunto.style.backgroundColor="";
    let valorAssunto = e.target.value
    if(valorAssunto.length <10){
        assuntoInput.classList.remove("correct")
        assuntoInput.classList.add("error")
        assuntoHelper.innerText = "O nome precisa ser maior de 10 caracteres"
        assuntoHelper.classList.add("visible")

    }else{
        assuntoInput.classList.add("correct")
        assuntoHelper.classList.remove("visible")
        assuntoInput.classList.remove("error")
        campoAssunto=true;
    }
})
//validação do campo mensagem
let mensagemInput = document.getElementById("mensagem");
let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemHelper = document.getElementById("mensagem-helper");
containerMensagem.addEventListener('blur',(e)=>{
    containerMensagem.style.backgroundColor="";
    let valorMensagem = e.target.value
    if(valorMensagem.length <10){
        mensagemInput.classList.remove("correct")
        mensagemInput.classList.add("error")
        mensagemHelper.innerText = "O nome precisa ser maior de 10 caracteres"
        mensagemHelper.classList.add("visible")
        
    }else{
        mensagemInput.classList.add("correct")
        mensagemHelper.classList.remove("visible")
        mensagemInput.classList.remove("error")
        campoMensagem=true;
    }
})
/**completa validação com o aperto  do botão de submissão */
btnSubmit.addEventListener("click", Event=>{
    Event.preventDefault();
    if(campoUsername==false){
        containerSpan.style.display="flex";
    }else if(campoEmail == false){
        containerSpan.style.display="flex";
    }else if(campoAssunto == false){
        containerSpan.style.display="flex";
    }else if(campoMensagem == false){
        containerSpan.style.display="flex";
    }else if(campoUsername == true && campoEmail == true && campoAssunto == true && campoMensagem == true){        
        containerCorrect.style.display='flex';
        containerNome.value="";
        containerEmail.value="";
        containerAssunto.value="";
        containerMensagem.value="";
        usernameInput.classList.remove("correct")
        emailInput.classList.remove("correct")
        assuntoInput.classList.remove("correct")
        mensagemInput.classList.remove("correct")
    }
    console.log(campoUsername,campoEmail, campoAssunto,campoMensagem)
})
/*
/*Ação de fechamento do span */
let btnSpan = document.getElementById('btnSpan');
const containerSpan = document.getElementById('spanError');
const containerCorrect = document.getElementById('spanCorrect');
const btnFechar = document.getElementsByClassName('btnFechar');
const containerTelefone = document.getElementById('telefone');
btnSpan.addEventListener('click',()=>{
    containerSpan.style.display = 'none';
    campoUsername=false; 
    campoEmail=false;
    campoAssunto=false; 
    campoMensagem = false;
    containerTelefone.value="";
})
btnFechar[0].addEventListener('click', ()=>{
    containerCorrect.style.display='none';
    campoUsername=false; 
    campoEmail=false;
    campoAssunto=false; 
    campoMensagem = false;
    containerTelefone.value="";
})
