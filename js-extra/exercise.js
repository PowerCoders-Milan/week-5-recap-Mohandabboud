
/*var goal = [{}];
array1 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will'];
array2 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23];
var x = array1[Math.floor(Math.random() * 7)];
var y = array2[Math.floor(Math.random() * 10)];
console.log(x);
console.log(y);
goal[0].name = x; 
goal[0].score = y; 
console.log(goal);

   // var x = array1[Math.floor(Math.random() * 7)];
    //var y = array2[Math.floor(Math.random() * 10)];
    //console.log(x);
    //console.log(y);
    //goal[0].name = x;
    //goal[0].score = y;
    // console.log(goal);
    
    */




/*
function random(){
    for (i = 0 ; i < array1.length ; i++ ) {
    var x = array1[Math.floor(Math.random() * 8)];
    if (x == a) {
    var x = array1[Math.floor(Math.random() * 8)]; 
    }
    var a = x;
    var y = array2[Math.floor(Math.random() * 11)];
    if (y == b) {
        var x = array1[Math.floor(Math.random() * 8)]; 
        }
    var b = y;
    goal[i].name = a; 
    goal[i].score = b; 
    console.log(goal);
}
}
console.log(goal);
*/

// var x = array1[Math.floor(Math.random() * 8)]
// console.log(x);

/*


function random( array1 , array2 ){
    var goal = [];
    array1 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will'];
    array2 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23];
    var a = "d";
    var b = 1;

    for (i = 0 ; i < 7 ; i++ ) {
    var x = array1[Math.floor(Math.random() * 7)];
    var y = array2[Math.floor(Math.random() * 10)];
    if (x == a|| y == b) {
        return
    }
    console.log(x);
    console.log(y);
    var second = {};
    second.name = x;
    second.score = y;
    goal.push(second);
    
    var x = a;
    var y = b;
}
console.log(goal);
};
random();


*/



/*
function random( array1 , array2 ){
    var goal = {};
    var a = [];
    var b = [];
    array1 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will'];
    array2 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23];
    for (i=0 ; i < array1.length ; i++ ) {
        var x = array1[Math.floor(Math.random() * 7)];
        var y = array2[Math.floor(Math.random() * 10)];
        goal[x]= y;
        a[i] = x;
        b[i] = y;
    }
    console.log(goal);
    console.log(a);
    console.log(b);
}
random();
*/
/*


array1 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will']
array2 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23]
var goal = {};

array1.forEach (function (item) {
    var y = array2[Math.floor(Math.random() * 10)];
    goal[item]= y;
})

console.log(goal);
*/

function random( array1 , array2 ){
    var goal = [];
    array1 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will'];
    array2 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23];
    var a = "d";
    var b = 1;

    for (i = 0 ; i < 7 ; i++ ) {
    var x = array1[Math.floor(Math.random() * 7)];
    var y = array2[Math.floor(Math.random() * 10)];
    if (x == a|| y == b) {
        return
    }
    console.log(x);
    console.log(y);
    var second = {};
    second.name = x;
    second.score = y;
    goal.push(second);
    
    var x = a;
    var y = b;
}
console.log(goal);
};
random();