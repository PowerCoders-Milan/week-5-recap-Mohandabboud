var button = document.querySelector("button");
function print() {
    var p = document.querySelector("p");
    p.style.color = "white";
    console.log("print");
}
function copy() {
    button.style.color ="white";
    button.style.backgroundColor ="blue";
    console.log("copy");
}
function copy1() {
    button.style.color ="blue";
    button.style.backgroundColor ="grey";
    console.log("copy1");
}

function print1() {
    var body = document.querySelector("body")
    body.style.backgroundColor ="red";
    console.log("print1");
}



button.addEventListener("click" , print);
button.addEventListener("mouseenter", copy);
button.addEventListener("mouseleave", copy1);
button.addEventListener("click", print1);