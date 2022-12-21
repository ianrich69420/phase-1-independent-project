function fetchAnimes(){
    fetch("http://localhost:3000/animes")
    .then(res => res.json())
    .then(json => getAnime(json))
}

function getAnime(anime){
    let rateCount = 0
    let numberOfRatings = 0
    anime.forEach(anime => {
        let card = document.createElement('li')
        card.innerHTML = `
        <div class="container" id="main-container">
        <div class="row">
            <div class="card col-12">
                <div class="row">
                    <div class="col-6">
                        <img class="card-img" src="${anime.img}" id="anime-image">_
                        <p id="rating">Rating: <span id="rate-count">0</span> / 5</p>
                        <p id="what-rating"> What score out of 5 do you think the anime should get?</p>
                        <button type="button" class="btn btn-dark" id="oneoutoffive">1</button>
                        <button type="button" class="btn btn-dark" id="twooutoffive">2</button>
                        <button type="button" class="btn btn-dark" id="threeoutoffive">3</button>
                        <button type="button" class="btn btn-dark" id="fouroutoffive">4</button>
                        <button type="button" class="btn btn-dark" id="fiveoutoffive">5</button>
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
        card.querySelector('#oneoutoffive').addEventListener('click', () => {
            rateCount += 1
            ++numberOfRatings             
            card.querySelector('#rate-count').textContent = rateCount
            card.querySelector('#rate-count').textContent /= numberOfRatings
            card.querySelector('#rate-count').textContent = Math.round(card.querySelector('#rate-count').textContent * 10) / 10
            console.log(rateCount)
            console.log(numberOfRatings)
            console.log(rateCount / numberOfRatings)
        })
        card.querySelector('#twooutoffive').addEventListener('click', () => {
            rateCount += 2
            ++numberOfRatings            
            card.querySelector('#rate-count').textContent = rateCount
            card.querySelector('#rate-count').textContent /= numberOfRatings
            card.querySelector('#rate-count').textContent = Math.round(card.querySelector('#rate-count').textContent * 10) / 10
            console.log(rateCount)
            console.log(numberOfRatings)
            console.log(rateCount / numberOfRatings)
        })
        card.querySelector('#threeoutoffive').addEventListener('click', () => {
            rateCount += 3
            ++numberOfRatings             
            card.querySelector('#rate-count').textContent = rateCount
            card.querySelector('#rate-count').textContent /= numberOfRatings
            card.querySelector('#rate-count').textContent = Math.round(card.querySelector('#rate-count').textContent * 10) / 10
            console.log(rateCount)
            console.log(numberOfRatings)
            console.log(rateCount / numberOfRatings)
        })
        card.querySelector('#fouroutoffive').addEventListener('click', () => {
            rateCount += 4
            ++numberOfRatings             
            card.querySelector('#rate-count').textContent = rateCount
            card.querySelector('#rate-count').textContent /= numberOfRatings
            card.querySelector('#rate-count').textContent = Math.round(card.querySelector('#rate-count').textContent * 10) / 10
            console.log(rateCount)
            console.log(numberOfRatings)
            console.log(rateCount / numberOfRatings)
        })
        card.querySelector('#fiveoutoffive').addEventListener('click', () => {
            rateCount += 5
            ++numberOfRatings            
            card.querySelector('#rate-count').textContent = rateCount
            card.querySelector('#rate-count').textContent /= numberOfRatings
            card.querySelector('#rate-count').textContent = Math.round(card.querySelector('#rate-count').textContent * 10) / 10
            console.log(rateCount)
            console.log(numberOfRatings)
            console.log(rateCount / numberOfRatings)
        })
        document.querySelector('body').appendChild(card)
        
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAnimes();
})