
function print(){
    var body = document.querySelector("body")
    var x = document.getElementById("text").value;
    let p = document.querySelector("p");
    p.innerHTML= x;
}

var button =document.querySelector("button");
console.log(button);
button.addEventListener("click", print)