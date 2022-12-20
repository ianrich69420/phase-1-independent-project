function fetchAnimes(){
    fetch("http://localhost:3000/animes")
    .then(res => res.json())
    .then(json => console.log(json))
}



document.addEventListener('DOMContentLoaded', () => {
    fetchAnimes();
})