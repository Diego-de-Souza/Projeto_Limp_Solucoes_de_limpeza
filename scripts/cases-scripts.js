/*############# Cases #############*/

const image1 = new Image()
image1.src = "/img/img-cases/generic-case.jpg"

const sucessCases=[{
    image: "/img/img-cases/generic-case.jpg",
    title: 'Título',
    description: 'Teste teste teste teste teste teste teste teste teste'
},{
    image: "/img/img-cases/generic-case.jpg",
    title: 'Título',
    description: 'Teste teste teste teste teste teste teste teste teste'
},{
    image: "/img/img-cases/generic-case.jpg",
    title: 'Título',
    description: 'Teste teste teste teste teste teste teste teste teste'
},{
    image: "/img/img-cases/generic-case.jpg",
    title: 'Título',
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