/*############# Cases #############*/


const sucessCases=[{
    image: "/img/img-cases/praca-das-palmeiras.png",
    title: 'Praça Das Palmeiras',
    description: 'Teste teste teste teste teste teste teste teste teste'
},{
    image: "/img/img-cases/rua-belo-asfalto.jpg",
    title: 'Rua Belo Asfalto',
    description: 'Teste teste teste teste teste teste teste teste teste'
},{
    image: "/img/img-cases/piscina-michael-phelps.jpeg",
    title: 'Piscína Pública Michael Phelps',
    description: 'Teste teste teste teste teste teste teste teste teste'
},{
    image: "/img/img-cases/lab-heisenberg.jpg",
    title: 'Laboratório Heisenberg',
    description: 'Teste teste teste teste teste teste teste teste teste'
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