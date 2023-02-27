const loadInformation = () => {
    fetch('https://api.github.com/users/programminghero1')
        .then(res => res.json())
        .then(datas => showDataInDisplay(datas))
}

const showDataInDisplay = (datas) => {
    //Folllowers
    const followerApiUrl = datas.followers_url
    console.log(followerApiUrl);

    //fetch reposotory
    const reposotoryApiUrl = datas.repos_url
    console.log(reposotoryApiUrl);

    // let repoValue = 0;
    fetch(followerApiUrl)
        .then(response => response.json())
        .then(followers => {

            fetch(reposotoryApiUrl)
                .then(res => res.json())
                .then(respositories => {

                    const mainContainer = document.getElementById('mainContainer');
                    mainContainer.innerHTML = `
        
        <div class="card lg:card-side bg-base-100 w-2/4 p-7 shadow-xl">
            <figure><img class="w-28 h-28 rounded-full" src="${datas.avatar_url}" alt="Album" /></figure>

            <div class="card-body space-y-3">

                <div class="title flex justify-between">
                    <h1 class="font-bold text-lg">${datas.name}</h1>
                    <h1 class="font-bold text-lg">${datas.created_at}</h1>
                </div>

                <h1>The profile is no bio</h1>

                <section class="space-y-3">
                    <div class="card-body grid grid-cols-3 rounded-lg bg-slate-200">
                        <h1 class="font-bold text-lg">Repositories</h1>

                        <h1 class="font-bold text-lg">Followers</h1>

                        <h1 class="font-bold text-lg">Following</h1>
                        <h1>${respositories.length}</h1>
                        <div class="followes flex items-center gap-3">
                            <h1>${datas.followers}</h1>
                            <img class="w-8 h-8 rounded-full" src="${followers[0].avatar_url}" alt="">
                            <img class="w-8 h-8 rounded-full" src="${followers[2].avatar_url}" alt="">
                        </div>
                        <div class="followes flex items-center gap-3">
                            <h1>9</h1>
                            <img class="w-8 h-8 rounded-full" src="/hasib.jpg" alt="">
                            <img class="w-8 h-8 rounded-full" src="/hasib.jpg" alt="">
                        </div>
                    </div>
                    <div class="card-body grid grid-cols-2 rounded-lg bg-green-300">
                        <h1 class="font-bold text-red-400 text-lg">Locattion: ${datas.location ? datas.location:'Location not found'}</h1>
                        <h1 class="font-bold text-lg">Tweeter</h1>
                        <h1 class="font-bold text-lg">Web Url</h1>
                        <h1 class="font-bold text-lg">Github Url</h1>
                    </div>
                    <p>Last Update: ${datas.updated_at}</p>
                </section>
            </div>


        </div>
        `
                })
        })
}

loadInformation()