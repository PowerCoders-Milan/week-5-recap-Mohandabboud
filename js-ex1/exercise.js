
function arr(array) {
    var countNumbers = 0
    var countLetters= 0
    array.forEach( function(item) {
        if (typeof item === "number"){
        countNumbers = countNumbers +1 ;
        } else {
            countLetters = countLetters + 1;
        }
        });  
console.log("there is " + array.length +" elements in your array.");
console.log("you have " + countNumbers +" numbers");
console.log("you have " + countLetters +" letters");
}

arr (["d", "a", 5, 6, 7 , "e"]);
arr (["d", "a", 5, 6, 7 , "e", 5]);

