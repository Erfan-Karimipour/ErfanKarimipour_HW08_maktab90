`use strict`

function counter() {
    let counter = 0;
    return function (num) {
        if (typeof (num) == `number`) counter += num;
        return counter;
    }
}

const dotheshit = counter();

console.log(dotheshit());
console.log(dotheshit());
console.log(dotheshit(1));
console.log(dotheshit());
console.log(dotheshit(3));
console.log(dotheshit(7));
console.log(dotheshit(-5));