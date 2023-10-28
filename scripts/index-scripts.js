/*Author: Felipe Prado Ferreira*/
//Example services boxes
const exampleServices = [{
    title: "Limpeza Urbana",
    description: "Efetuamos a coleta seletiva de lixo, limpeza e capinação de ruas, parques, praças, podas de árvores e limpeza de bueiros. Dispomos de profissionais e ferramentas de ponta para todos os trabalhos de limpeza urbana."
},{
    title: "Limpeza Industrial",
    description: "Limpeza de piso, parede, vidros e caixilhos, varrição, aspiração, higienização de sanitários, aplicação de produtos de limpeza e tratamento de piso; fornecimento e reposição de materiais, descartáveis e equipamento de limpeza em geral caso haja necessidade."
},{
    title: "Limpeza Laboratorial",
    description: "A limpeza do laboratório consiste na limpeza do espaço comum, limpeza da lixeira e local de escarte. Profissionais treinados periodicamente para manter o operador de limpeza sempre atualizado."
}]
for(let i = 0; i < exampleServices.length; i++){
    //creating elements
    const service = document.createElement("service")
    //manipulating elements

    /*
    service.innerHTML=
    `
    <div class="services">
        <h1>${exampleServices[i].title}</h1>
        <div class="services-content">
            <p>${exampleServices[i].description}<p>
        </div>
    </div>
    `
    //adding elements to the DOM
    let services_box_elements = document.querySelector(".flex-box-services")
    services_box_elements.appendChild(service)
    */
}

//Deposition boxes
const clientDepositions=[{
    photo: "",
    title: 'Cliente 1',
    depo: 'Deposição 1 ... ... ... ... ... ... ... ... ... ...'
},{
    photo: "",
    title: 'Cliente 2',
    depo: 'Deposição 2 ... ... ... ... ... ... ... ... ... ...'
},{
    photo: "",
    title: 'Cliente 3',
    depo: 'Deposição 3 ... ... ... ... ... ... ... ... ... ...'
}]
for(let i = 0; i < clientDepositions.length; i++){
    //creating elements
    const deposition = document.createElement("deposition")
    //manipulating elements
    deposition.innerHTML=
    `
    <div class="depositions">
    <img class="generic-client-img" src="./img/index-images/generic-client.png" alt="generic client">
        <h1>${clientDepositions[i].title}</h1>
        <div class="depositions-content">
            <p>
                ${clientDepositions[i].depo}
            </p>
        </div>
    </div>
    `
    //adding elements to the DOM
    const deposition_box_elements = document.querySelector(".flex-box-depositions")
    deposition_box_elements.appendChild(deposition)
}

/*############# Slideshow content #############*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}