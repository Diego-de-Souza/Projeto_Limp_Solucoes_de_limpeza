/*Author: Felipe Prado Ferreira*/
//Example services boxes
const exampleServices = [{
    title: "Serviço 1",
    description: "Descrição do serviço 1"
},{
    title: "Serviço 2",
    description: "Descrição do serviço 2"
},{
    title: "Serviço 3",
    description: "Descrição do serviço 3"
}]
for(let i = 0; i < exampleServices.length; i++){
    //creating elements
    const service = document.createElement("service")
    //manipulating elements
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
}

//Deposition boxes
const clientDepositions=[{
    photo: "",
    title: 'Cliente 1',
    depo: 'Deposição 1'
},{
    photo: "",
    title: 'Cliente 2',
    depo: 'Deposição 2'
},{
    photo: "",
    title: 'Cliente 3',
    depo: 'Deposição 3'
}]
for(let i = 0; i < clientDepositions.length; i++){
    //creating elements
    const deposition = document.createElement("deposition")
    //manipulating elements
    deposition.innerHTML=
    `
    <div class="depositions">
        <img class="generic-client-img" src="/img/index-images/generic-client.png" alt="generic client">
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