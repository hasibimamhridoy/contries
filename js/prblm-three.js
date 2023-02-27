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
      <button class="btn btn-primary">See Details</button>
    </div>
  </div>
</div>

        `

        mainContainer.appendChild(createDivElement)


       

    })
}

loadAllCountry()


