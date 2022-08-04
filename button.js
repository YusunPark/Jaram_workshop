const genre_info = document.querySelector(".combo");
const genre_group = document.querySelector(".genre_group");
const adult_all = document.querySelector(".adult");
const p_enter = document.querySelector(".enter");

// const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";
let clicked = [];

function getMovie() {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=27b04d28b3c48267ca2d4119b0197e69&language=en-US`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      json.genres.map((genre) => {
        if (
          genre.name == "TV Movie" ||
          genre.name == "War" ||
          genre.name == "Family"
        ) {
        } else {
          const item = document.createElement("button");
          item.classList = "item_button button";

          item.innerText = genre.name;
          item.id = genre.id;
          genre_group.appendChild(item);
          item.addEventListener("click", function (event) {
            item.style.backgroundColor = "black";
            item.style.color = "white";
            clicked.push(genre.id);
          });
        }
      });
    });
}

function makesec() {
  const adults = document.createElement("button");
  adults.classList = "adults_button button";

  adults.innerText = "Adult";
  adult_all.appendChild(adults);
  adults.id = "adult";
  adults.addEventListener("click", function (event) {
    adults.style.backgroundColor = "black";
    adults.style.color = "white";
    clicked.push(adults.id);
  });

  const every = document.createElement("button");
  every.classList = "every_button button";

  every.innerText = "All";
  adult_all.appendChild(every);
  every.id = "non-adult";
  every.addEventListener("click", function (event) {
    every.style.backgroundColor = "black";
    every.style.color = "white";
    clicked.push(every.id);
  });
}

function make_enter() {
  const next = document.createElement("button");
  next.innerText = "Enter";
  p_enter.appendChild(next);
  next.addEventListener("click", function (event) {
    localStorage.setItem("clicked", JSON.stringify(cast));
    location.href = "이동할 페이지 주소";
  });
}

console.log("adfs");
getMovie();
makesec();
// make_enter();

console.log(clicked);
