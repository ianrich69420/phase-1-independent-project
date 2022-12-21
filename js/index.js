function fetchAnimes(){
    fetch("http://localhost:3000/animes")
    .then(res => res.json())
    .then(json => getAnime(json))
}

function getAnime(anime){
    anime.forEach(anime => {
        let card = document.createElement('li')
        card.innerHTML = `
        <div class="container" id="main-container">
        <div class="row">
            <div class="card col-12">
                <div class="row">
                    <div class="col-6">
                        <img class="card-img" src="${anime.img}" id="anime-image">_
                        <p id="rating">Rating: <span>0</span></p> 
                    </div>
                    <div class="col-6 card-body">
                        <h5 class="card-title" id="${anime.title.text}">${anime.title.text}</h5>
                        <p class="card-text">${anime.description}</p>
                        <p class="card-text"><small class="text-muted">${anime.genres.join(', ')}</small></p>
                        <p class="card-text"><small class="text-muted">Done by ${anime.studio} on ${anime.start_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `
        document.querySelector('body').appendChild(card)
        
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAnimes();
})