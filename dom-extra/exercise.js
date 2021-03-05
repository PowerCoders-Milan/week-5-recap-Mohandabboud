
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
    p.innerHTML = Movies[number].title +" , "+Movies[number].duration +" , "+Movies[number].actor;
    body.appendChild(p);
    function color (){
        p.style.backgroundColor= "black"
        p.style.color= "white"
    }
    function color1 (){
        p.style.backgroundColor= "white"
        p.style.color= "black"
    }
    if (Movies[number].duration > 130 ) {
        function duration () {
        p.style.backgroundColor= "green"
        }
    }
    console.log(Movies[number].duration);
    p.addEventListener("mouseenter", color);
    p.addEventListener("mouseleave", color1);
    p.addEventListener("click",  duration);
    number++ ;
    if (number > 3) {
        console.log("this is condition")
        button.removeEventListener("click", sol);
    }
    
};
button.addEventListener("click", sol);




/*
function color (){
    p[0].style.backgroundColor= "black"
    p[0].style.color= "white"
    console.log(p[0])
}
function color2 (){
    var div2 = document.querySelectorAll("p")[1];
    div2.style.backgroundColor= "black"
    div2.style.color= "white"
}
function color3 (){
    var div3 = document.querySelectorAll("p")[2];
    div3.style.backgroundColor= "black"
    div3.style.color= "white"
}
function color4 (){
    var div4 = document.querySelectorAll("p")[3];
    div4.style.backgroundColor= "black"
    div4.style.color= "white"
}
p[0].addEventListener("mouseover",color1);
div2.addEventListener("mouseover",color2);
div3.addEventListener("mouseover",color3);
div4.addEventListener("mouseover",color4);

*/
