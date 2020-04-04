const symbol = Symbol('demo')
const other = Symbol('demo')


// console.log(symbol);
// console.log(other);

// console.log(symbol == other);


const obj = {
    name:'Elena',
    demo: 'DEMO',
    [symbol]:'meta'
}

console.log(obj);
console.log(obj[symbol]);
console.log(obj[other]);


for(let key in obj){
    console.log(key);   //получим только поле 'name', символов цикл не видит
    //символы необходимы для задания мета данных обьектов или классов
}

//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol