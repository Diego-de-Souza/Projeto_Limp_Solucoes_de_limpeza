/*############# Depositions #############*/
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