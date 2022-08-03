const movie_info = document.querySelector(".movie_data");

const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";

function getMovie_Img(query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        console.log(json);
        const img = document.createElement("img");
        img.class="img";
        //img.style.background = "red";
        img.src = `https://image.tmdb.org/t/p/w300/${json.results[0].poster_path}`;
        movie_info.appendChild(img);
      });
  }
  function getMovie_Genre_id (query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        console.log(json);
        const genre_id = json.results[0].genre_ids;
        getMovie_Genre (query,genre_id)
      });
  }
function getMovie_Genre (query,id) {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        json.genres.map((i)=>{console.log(i)
            if(id.includes(i.id)){
            const genre = document.createElement("div")
            genre.innerText= i.name;
            genre.class="genre";
            movie_info.appendChild(genre);
        }});
      });
  }
function getMovie_Title(query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        console.log(json);
        const title = document.createElement("div");
        title.innerText = json.results[0].original_title;
        title.class="title";
        movie_info.appendChild(title);
      });
  }

 
  function getMovie_Overview (query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        console.log(json);
        const overview = document.createElement("div");
        overview.innerText = json.results[0].overview;
        overview.class="overview";
        movie_info.appendChild(overview);
      });
  }
function init() {
    getMovie_Img("comedy");
    getMovie_Genre_id("comedy");
    getMovie_Title("comedy");
    getMovie_Overview("comedy");
}

init();
