
/*
 var button = document.querySelector("button");
 var number = 0;
 
function sol() {
    var body = document.querySelector("body");
    let p = document.createElement("p");
    var movieM = { title: "movie1", duration: 120, actor: "Meryl Streep"};
    var movieR = { title: "movie1", duration: 120, actor: "Meryl Streep"};
    var movieJ = { title: "movie1", duration: 120, actor: "Meryl Streep"};
    var movieD = { title: "movie1", duration: 120, actor: "Meryl Streep"};
    var moviess = [ movieM, movieR, movieJ, movieD ];
    p.innerHTML =  moviess[number].title +" has a "+  moviess[number].duration +" minutes duration and the leading role actor is " + moviess[number].actor;
    body.appendChild(p);
    console.log(p);
 }


button.addEventListener("click", sol);



  // Movies.forEach(function(item) { 

  //  })

  */

 var button = document.querySelector("button");
 var body = document.querySelector("body");
 var number = 0;
 // var movieM = { title: "movie1", duration: 120, actor: "Meryl Streep"};
 // var movieR = { title: "movie1", duration: 120, actor: "Meryl Streep"};
 //var movieJ = { title: "movie1", duration: 120, actor: "Meryl Streep"};
 //var movieD = { title: "movie1", duration: 120, actor: "Meryl Streep"};
 // var moviess = [ movieM, movieR, movieJ, movieD ];

Movies = [
    { title: "movie1", duration: 120, actor: "Meryl Streep"},
    { title: "movie2", duration: 150, actor: "Robert De Niro"},
    { title: "movie3", duration: 160, actor: "Jack Nicholson"},
    { title: "movie4", duration: 100, actor: "Denzel Washington"},
   ];
number = 0;
function sol() {
    var body = document.querySelector("body");
    let p = document.createElement("div");
    console.log(Movies[0].title);
    console.log(Movies[1].title);
    console.log(Movies[2].title);
    console.log(Movies[3].title);
    p.innerHTML = Movies[number].title +" , "+Movies[number].duration +" , "+Movies[number].actor;
    body.appendChild(p);
    number++ ;
};
console.log(number);
button.addEventListener("click", sol);
if (number > 4) {
button.removeEventListener("click", sol);
}

