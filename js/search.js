
const loadByName = () => {
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML=""
    const nameOptionContainer = document.getElementById('nameOptionContainer').value
    fetch(`https://restcountries.com/v2/name/${nameOptionContainer}`)
        .then(res => res.json())
        .then(nameContries => searchByName(nameContries[0]))
}

const searchByName = (nameContries) => {


    const mainContainer = document.getElementById('mainContainer')
    
    const createDivElement = document.createElement('div')

    createDivElement.innerHTML = `
    <div class="card w-full h-52 bg-base-100 shadow-xl image-full">
<figure><img src="${nameContries.flags.png}" alt="Shoes" /></figure>
<div class="card-body">
<h2 class="card-title">${nameContries.name}</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div class="card-actions justify-end">
<label for="${nameContries.cca2}" class="btn">open modal</label>
</div>
</div>

<input type="checkbox" id="${nameContries.cca2}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="${nameContries.cca2}" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">${nameContries.name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
</div>

    `
    mainContainer.appendChild(createDivElement)
    
}



//Load By Capital
const loadByCapital = () => {
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML=""
    const capitalContainer = document.getElementById('capitalContainer').value
    fetch(`https://restcountries.com/v3.1/capital/${capitalContainer}`)
        .then(res => res.json())
        .then(nameContries => searchByCapital(nameContries[0]))
}

const searchByCapital = (nameContries) => {
   

    console.log(nameContries.cca2);
    const mainContainer = document.getElementById('mainContainer')
    
    const createDivElement = document.createElement('div')
    // console.log(contry);

    createDivElement.innerHTML = `
    <div class="card w-full h-52 bg-base-100 shadow-xl image-full">
<figure><img src="${nameContries.flags.png}" alt="Shoes" /></figure>
<div class="card-body">
<h2 class="card-title">${nameContries.name.common}</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div class="card-actions justify-end">
<label for="${nameContries.cca2}" class="btn">open modal</label>

</div>
</div>

<input type="checkbox" id="${nameContries.cca2}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="${nameContries.cca2}" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">${nameContries.cca2}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>


</div>

    `

    mainContainer.appendChild(createDivElement)
    
}