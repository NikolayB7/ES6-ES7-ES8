//как создавались функции ранее
/*
function sum(a,b){
    return a+b;
}

function cub(a){
    return a**3; //** - возведение в степень
}
*/

// -----------------------------------------------------------------

//Стрелочные функции

/*
const sum = (a,b)=>{
    return a+b;
}

// console.log(sum(41,1));

let cub = a => a**3;
// console.log(cub(5));


setTimeout(function(){
    console.log('After 1 second');
    
},1000);

setTimeout(()=>console.log('After 3 second'),3000);
*/

// ----------------------------------------------------------------------------

//Context

function log(){
    console.log(this);
    
}

const arrowLog = ()=>console.log(this);


const person = {
    name: 'Elena',
    age: 20,
    log:log,
    arrowLog:arrowLog
}

person.log();
person.arrowLog();