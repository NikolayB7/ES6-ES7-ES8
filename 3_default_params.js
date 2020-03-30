
const defaultB = 50;

const getDefault = c => c*2;

function compute(a,b =getDefault(10)){
    return a+b;
}

console.log(compute(20));
