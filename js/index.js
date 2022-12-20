function fetchAnimes(){
    fetch("http://localhost:3000/animes")
    .then(res => res.json())
    .then(json => getAnime(json))
}

function getAnime(anime){
    let rateCount = 0
    anime.forEach(anime => {
        let card = document.createElement('li')
        card.innerHTML = `
        <div class="container" id="main-container">
        <div class="row">
            <div class="card col-12">
                <div class="row">
                    <div class="col-9">
                        <img class="card-img" src="${anime.img}" id="anime-image">_
                        <button type="button" class="btn btn-dark" id="oneoutoffive">1</button>
                        <button type="button" class="btn btn-dark" id="secondoutoffive">2</button>
                        <button type="button" class="btn btn-dark" id="threeoutoffive">3</button>
                        <button type="button" class="btn btn-dark" id="fouroutoffive">4</button>
                        <button type="button" class="btn btn-dark" id="fiveoutoffive">5</button>
                        <p>Rating: <span id="rating">${rateCount}</span></p> 
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