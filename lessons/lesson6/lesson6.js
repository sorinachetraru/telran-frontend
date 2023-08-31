function square (num) {
    return num * num;
}
console.log (square (3));

 
function final_price (price, discount) {
    return price - price * discount;
}  

console.log (final_price (100, .5));

function circle_area (r) {
    return r * r * 3.14;        
}


console.log (circle_area (3));


function user_info(name, age)
 {
    return `${name} ${age}`;
}

console.log (user_info ('Sam', 22));


for (let n=3; n<8; n++) {
    console.log (n);
}

for (let n=0; n<=10; n++) {
    if (n?) {
        console.log (n);
    }
}

function range (from, to)
 {
    let sum = 0;
    for (let n=from; n<=to; n++) {
        sum = sum + n;
    }
return sum;
}

for (let n=0; n<5; n++) {
    console.log (Math.random()*100);
}


function check_elements (e) {
    if (e.length<10) {
        return true;
        
    } else {
        return false;
    }
}
console.log (check_elements([3]))