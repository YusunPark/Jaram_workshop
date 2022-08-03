const movie_info = document.querySelector(".movie");

const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";

function getMovie(query) {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json);

      const title = document.createElement("div");
      const overview = document.createElement("div");
      const img = document.createElement("img");

      
      title.innerText = json.results[0].original_title;
      overview.innerText = json.results[0].overview;
      img.src = `https://image.tmdb.org/t/p/w500/
${json.results[0].poster_path}`;
      // div.innerText = json.results.overview;
      movie_info.appendChild(title);
      movie_info.appendChild(overview);
      movie_info.appendChild(img);
    });
}

function init() {
  getMovie("comedy");
}

init();
