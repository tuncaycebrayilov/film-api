document.getElementById('film-btn').addEventListener('click', () => {
    document.getElementById("films").innerHTML = ``
    inputData = document.getElementById('film-input').value
    fetch(`https://imdb-api.com/API/Search/k_udg4tq4x/${inputData}`)
        .then((resp) => resp.json())
        .then((data) => {
            for (let film of data.results) {
                console.log(film);
                document.getElementById("films").innerHTML += 
                `
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${film.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${film.title}</h5>
                            <p class="card-text">${film.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
        })

})