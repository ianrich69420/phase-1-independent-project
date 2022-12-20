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
        <div class="row" id="random-meal">
            <div class="card col-12">
                <div class="row">
                    <div class="col-6 card-body">
                        <a href="${anime.title.link}><h5 class="card-title">${anime.title.text}</h5></a>
                        <p class="card-text">${anime.description}</p>
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