/* var array3 =[];
var array4 =[];
var number = 0;
var string = 0;
function arr(x , y){
    x.forEach( function(item) {
        if (typeof item === "number") {
        array3[number] = item;
        number = number +1;
    } else {array4[string] = item;
            string = string +1;
    }
    });
    number = number;
    string = string;
    y.forEach( function(item) {
        if (typeof item === "number") {
        array3[number] = item;
        number = number +1;
    } else {array4[string] = item;
            string = string +1;
    }  
})
console.log(array3);
console.log(array4);
var score = {};

var Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
var Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]
arr(Array1 , Array2);
}
*/


// arr(Array1 , Array2);


// score[Array1[0]] = Array2[0];
// console.log(score);

// function arr(Array1 , Array2){}

    var score = {};

    var Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
    var Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]

    var number = 0;
    Array1.forEach( function(item) {
        if (typeof item === "number") {
            score[Array2[number]] = Array1[number]; 
            number = number +1; 
        } else {
            score[Array1[number]] = Array2[number];
            number = number +1; 
        }
    })

console.log(score);