`use strict`

let obj = {
    name: ``,
    secondfunction(a) {
        console.log(`sec ok` + a);
        this.name = a;
    }
}

function firstfunction(a) {
    console.log(`first ok` + a);
    obj.secondfunction(a);
}

firstfunction(`ali`);
console.log(obj.name);