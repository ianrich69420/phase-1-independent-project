function fetchAnimes(){
    fetch("https://ianrich69420.github.io/phase-1-independent-project/db.json")
    .then(res => res.json())
    .then(json => getAnime(json.animes))
}

document.querySelector('#searchForm').addEventListener('submit', (e) => {
    e.preventDefault()
    location.href = `#${e.target.search.value}`
})

document.querySelector('#addAnimeForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let animeObj = [
        {
            studio: e.target.add_studio.value,
            genres: [
                e.target.add_genre.value
            ],
            img: e.target.add_image.value,          
            description: e.target.add_description.value,
            title: {
                text: e.target.add_title.value
            },
            start_date: e.target.add_start_date.value,
            vote_count: 0,
            number_of_ratings: 0
        }
    ]
    getAnime(animeObj)
    alert('Anime added! Search for the title in the searchbar!')
})

function getAnime(anime){
    anime.forEach(anime => {
        let card = document.createElement('li')
        card.id = `anime`
        card.innerHTML = `
        <div class="container" id="main-container">
        <div class="row">
            <div class="card col-12">
                <div class="row">
                    <div class="col-6 text-white bg-dark text-opacity-40">
                        <img class="card-img" src="${anime.img}" alt="${anime.title.text}" id="anime-image">_
                        <p id="rating">Current Average Rating: <span id="vote-count">${anime.vote_count}</span> / 5</p>
                        <p id="rate-counter">Current Vote Count: <span id="rate-count">${anime.number_of_ratings}</span> votes</p>
                        <p id="what-rating">What score out of 5 do you think the anime should get?</p>
                        <p id="authenticate-rating">Authenticate your rating!</p>
                        <button type="button" class="btn btn-outline-light" id="oneoutoffive">1</button>
                        <button type="button" class="btn btn-outline-light" id="twooutoffive">2</button>
                        <button type="button" class="btn btn-outline-light" id="threeoutoffive">3</button>
                        <button type="button" class="btn btn-outline-light" id="fouroutoffive">4</button>
                        <button type="button" class="btn btn-outline-light" id="fiveoutoffive">5</button>
                        <form id="authenticationForm">
                            <input type="email" class="form-control" placeholder="Email" id="email"><br>
                            <input type="password" class="form-control" placeholder="Password" id="password"><br>
                            <button class="btn btn-outline-info ms-1" id="authenticationBtn">Authenticate</button>
                        </form>
                    </div>
                    <div class="col-6 card-body">
                        <h5 class="card-title" id="${anime.title.text}">${anime.title.text}</h5>
                        <p class="card-text">${anime.description}</p>
                        <p class="card-text"><small class="text-muted">${anime.genres.join(', ')}</small></p>
                        <p class="card-text"><small class="text-muted">Done by ${anime.studio} on ${anime.start_date}</small></p>
                    </div>
                </div>
            </div>
        </div><br>
        `
        card.querySelector('#oneoutoffive').addEventListener('click', () => {
            anime.vote_count += 1
            ++anime.number_of_ratings
            card.querySelector('#rate-count').textContent = anime.number_of_ratings             
            card.querySelector('#vote-count').textContent = anime.vote_count
            card.querySelector('#vote-count').textContent /= anime.number_of_ratings
            card.querySelector('#vote-count').textContent = Math.round(card.querySelector('#vote-count').textContent * 10) / 10
        })
        card.querySelector('#twooutoffive').addEventListener('click', () => {
            anime.vote_count += 2
            ++anime.number_of_ratings
            card.querySelector('#rate-count').textContent = anime.number_of_ratings            
            card.querySelector('#vote-count').textContent = anime.vote_count
            card.querySelector('#vote-count').textContent /= anime.number_of_ratings
            card.querySelector('#vote-count').textContent = Math.round(card.querySelector('#vote-count').textContent * 10) / 10
        })
        card.querySelector('#threeoutoffive').addEventListener('click', () => {
            anime.vote_count += 3
            ++anime.number_of_ratings
            card.querySelector('#rate-count').textContent = anime.number_of_ratings             
            card.querySelector('#vote-count').textContent = anime.vote_count
            card.querySelector('#vote-count').textContent /= anime.number_of_ratings
            card.querySelector('#vote-count').textContent = Math.round(card.querySelector('#vote-count').textContent * 10) / 10
        })
        card.querySelector('#fouroutoffive').addEventListener('click', () => {
            anime.vote_count += 4
            ++anime.number_of_ratings
            card.querySelector('#rate-count').textContent = anime.number_of_ratings             
            card.querySelector('#vote-count').textContent = anime.vote_count
            card.querySelector('#vote-count').textContent /= anime.number_of_ratings
            card.querySelector('#vote-count').textContent = Math.round(card.querySelector('#vote-count').textContent * 10) / 10
        })
        card.querySelector('#fiveoutoffive').addEventListener('click', () => {
            anime.vote_count += 5
            ++anime.number_of_ratings
            card.querySelector('#rate-count').textContent = anime.number_of_ratings            
            card.querySelector('#vote-count').textContent = anime.vote_count
            card.querySelector('#vote-count').textContent /= anime.number_of_ratings
            card.querySelector('#vote-count').textContent = Math.round(card.querySelector('#vote-count').textContent * 10) / 10
        })
        document.querySelector('body').appendChild(card)
        
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAnimes();
})
