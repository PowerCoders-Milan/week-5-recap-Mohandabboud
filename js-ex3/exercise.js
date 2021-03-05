formula(1, 3, 5) //=> 8
formula(3, 4, 6) //=> 18
formula(2, 4) //=> 9
formula(5, 6) //=> 31
formula(3) //=> 4
formula(5) //=> 6
formula() //=> 2

// review all the possible parameters
function formula(x ,y ,z){
    var result = 0;
    if (x > 0 && y > 0  && z > 0) {
        result = (x*y) + (z);
    } else if (x > 0 && y > 0  && typeof z === "undefined") {
        result = (x*y) + (1);
    } else if (x > 0 && typeof y === "undefined"  && typeof z === "undefined") {
        result = x + 1;
    } else { result = 1 + 1; }
    console.log(result);
}
