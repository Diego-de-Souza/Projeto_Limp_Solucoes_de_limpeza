/*############# Cases #############*/


const sucessCases=[{
    image: "/img/img-cases/praca-das-palmeiras.png",
    title: 'Praça Das Palmeiras',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
},{
    image: "/img/img-cases/rua-belo-asfalto.jpg",
    title: 'Rua Belo Asfalto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
},{
    image: "/img/img-cases/piscina-michael-phelps.jpeg",
    title: 'Piscína Pública Michael Phelps',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
},{
    image: "/img/img-cases/lab-heisenberg.jpg",
    title: 'Laboratório Heisenberg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, necessitatibus exercitationem, sed dolores quaerat maxime quasi tempora reprehenderit aut voluptatibus, tenetur quibusdam deleniti dolorum quisquam. Facilis dolorum incidunt aliquam placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ducimus eveniet repellendus autem cupiditate necessitatibus alias officiis laudantium perferendis iusto quos delectus praesentium magnam magni, enim debitis culpa suscipit laborum.'
}]
for(let i = 0; i < sucessCases.length; i++){
    //creating elements
    const cases = document.createElement("cases")
    //manipulating elements
    cases.innerHTML=
    `
    <div class="cases-box">
            
        <h1 class="case-title">${sucessCases[i].title}</h1>

        <div class="inside-cases-flex">
            <img class="case-image" src=${sucessCases[i].image} alt="case image">
            <p class="case-text">
                ${sucessCases[i].description}
            </p>
        </div>

    </div>
    `
    //adding elements to the DOM
    const cases_box_elements = document.querySelector(".cases-flex")
    cases_box_elements.appendChild(cases)
}