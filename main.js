const genre_info = document.querySelector(".movie");
const genre_group = document.querySelector(".genre_group");
const adult_all = document.querySelector(".adult")
const p_enter = document.querySelector(".enter")

const API_KEY = "27b04d28b3c48267ca2d4119b0197e69";
let clicked = []


function getMovie() {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=27b04d28b3c48267ca2d4119b0197e69&language=en-US`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      json.genres.map((genre)=> {

        if (genre.name ==- "TV Movie" || genre.name ==- "War" ||genre.name ==- "Family"){
        }
        else {
          const item = document.createElement("button")
          item.innerText = genre.name
          item.id = genre.id
          genre_group.appendChild(item)
          item.addEventListener('click', function(event) {
            item.style.backgroundColor = "black"
            item.style.color = "white"
            clicked.push(genre.id)
          
          })
        
          console.log(clicked)
        }
        

      })

    });
}



getMovie()
console.log(clicked)


// makefir()

function makesec() {
  const adults = document.createElement("button")
  adults.innerText = "Adult"
  adult_all.appendChild(adults)
  adults.id = 'adult'
  

  const every = document.createElement("button")
  every.innerText = "All"
  adult_all.appendChild(every)
  every.id = 'non-adult'
}

makesec()

function make_enter(){
  const next = document.createElement("button")
  next.innerText = "Enter"
  p_enter.appendChild(next)
}

make_enter()

// function list(){
//   this.dataStore = [];
//   this.pos = 0;
//   this.listSize = 0;
// }

// List.prototype.append = function(element){
//   this.dataStore[this.listSize] = element;
//   this.listSize++;
// }

// List.prototype.remove = function(element){
//   var removePos = this.find(element);

//   if(removePos > -1){
//     this.dataStore.splice(removePos, 1);
//     this.listSize--;
//     return true;
//   }
//   return false;
// }

// function onclick_event(){
  
// }