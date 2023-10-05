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

console.log(exampleServices)

for(let i = 0; i < exampleServices.length; i++){
    //creating elements
    const service = document.createElement("service")
    //manipulating elements
    service.innerHTML=
    `
    <div class="services">
        <h1>${exampleServices[i].title}</h1>
        <div class="services-content">
            <p${exampleServices[i].description}><p>
        </div>
    </div>
    `
    //adding elements to the DOM
    const services_box_elements = document.querySelector(".flex-box-services")
    services_box_elements.appendChild(service)
}