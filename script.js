



let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchMovies);

const api_key = `49e97756cf86356fc76bd8eb8dcab680`;
const urlBase ='https://api.themoviedb.org/3/search/movie';
const urlImg ='https://image.tmdb.org/t/p/w500';


let resultContainer = document.getElementById('results');


function searchMovies(){
    resultContainer.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value;
   
     fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then((response)=>response.json())
    .then((response)=>{displayMovies(response.results)
        console.log(response.results)
    })
   
}

function displayMovies(movies){
    resultContainer.innerHTML = '';

    if(movies.length == 0){
        resultContainer.innerHTML = `<p>No se encontro la pelicula</p>`;        
        return
    }
    else{
        movies.forEach((movie)=>{
            let movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            let titulo = document.createElement('h3');
            titulo.textContent = movie.title;

            let releaseDate = document.createElement('p');
            releaseDate.textContent = `Fecha de estreno: ${movie.release_date}`;

            let overView = document.createElement('p');
            overView.textContent = `Reseña: ${movie.overview}.`;

            let poster = document.createElement('img');
            poster.src = `${urlImg}${movie.poster_path}`;

            movieDiv.appendChild(poster);
            movieDiv.appendChild(titulo);
            movieDiv.appendChild(releaseDate);
            movieDiv.appendChild(overView);
            
            resultContainer.appendChild(movieDiv);

        })

    }

}