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
    photo: "./img/index-images/cientista.jpg",
    title: 'Cientista',
    depo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
},{
  photo: "./img/index-images/politico.jpg",
  title: 'Político',
  depo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
},{
    photo: "./img/index-images/empresario.jpg",
    title: 'Empresário',
    depo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
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

