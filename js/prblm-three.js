const loadAllCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(contries => showAllCountry(contries))
}

const showAllCountry = (contries) => {

    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML=""


    contries.map(contry => {
     
     
         //Search By Name
         const nameOptionContainer = document.getElementById('nameOptionContainer')
         const createOption = document.createElement('option')
         createOption.innerText = contry.name.common
         nameOptionContainer.appendChild(createOption)
         
        //  Search By Region
         const capitalContainer = document.getElementById('capitalContainer')
         const capitalRegion = document.createElement('option')
         capitalRegion.innerText = contry.capital
         capitalContainer.appendChild(capitalRegion)



        const createDivElement = document.createElement('div')
        createDivElement.innerHTML = `
        <div class="card w-full h-52 bg-base-100 shadow-xl image-full">
  <figure><img src="${contry.flags.png}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${contry.name.common}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <label for="${contry.ccn3}" class="btn btn-primary">open modal</label>
    </div>
  </div>


<!-- Put this part before </body> tag -->
<input type="checkbox" id="${contry.ccn3}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="${contry.ccn3}" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">${contry.name.common}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
  
</div>
</div>

        `

        mainContainer.appendChild(createDivElement)


       

    })
}

loadAllCountry()


