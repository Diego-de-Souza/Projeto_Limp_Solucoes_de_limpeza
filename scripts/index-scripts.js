/*Author: Felipe Prado Ferreira*/

/*############# Slideshow elements #############*/
const slideshowElements=[{
  img: "/img/index-images/Slideshow/img1.jpg",
  numberText: '1 / 3',
  title: 'Limpeza Urbana'
},{
  img: "/img/index-images/Slideshow/img2.jpg",
  numberText: '2 / 3',
  title: 'Limpeza Industrial'
},{
  img: "/img/index-images/Slideshow/img3.jpg",
  numberText: '3 / 3',
  title: 'Limpeza Laboratorial'
}]
for(let i = 0; i < slideshowElements.length; i++){
  //creating elements
  const slideElement = document.createElement("slideElement")

    //manipulating elements
    slideElement.innerHTML=
    `
    <div class="mySlides fade">
    <img src=${slideshowElements[i].img} style="width:100%">
    <div class="text">${slideshowElements[i].title}</div>
    </div>
    `
  
  
  //adding elements to the DOM
  const slide_container = document.querySelector(".slideshow-container")
  slide_container.appendChild(slideElement)
}

/*############# Slideshow content #############*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*############# Depositions #############*/
const clientDepositions=[{
    photo: "./img/index-images/generic-client.png",
    title: 'Cliente 1',
    depo: 'Depoimento 1 ... ... ... ... ... ... ... ... ... ...'
},{
    photo: "./img/index-images/generic-client.png",
    title: 'Cliente 2',
    depo: 'Depoimento 2 ... ... ... ... ... ... ... ... ... ...'
},{
    photo: "./img/index-images/generic-client.png",
    title: 'Cliente 3',
    depo: 'Depoimento 3 ... ... ... ... ... ... ... ... ... ...'
}]
for(let i = 0; i < clientDepositions.length; i++){
    //creating elements
    const deposition = document.createElement("deposition")
    //manipulating elements
    deposition.innerHTML=
    `
    <div class="depositions">
    <img class="generic-client-img" src=${clientDepositions[i].photo} alt="generic client">
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

