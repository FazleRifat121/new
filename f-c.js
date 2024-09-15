function celcius(f) {
    let c = (f - 32) * 5 / 9
    return c ;
}

let result = celcius(32)
console.log(result);
result = celcius(100.4)
console.log(result);