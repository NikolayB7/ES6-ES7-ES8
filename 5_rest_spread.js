/*
//расчет среднего значения
function average(arr){
    return arr.reduce((acc,i)=>acc += i,0)/ arr.length;
}

console.log(average([10,20,30,40]));
*/

/*
function average(arr){
    //arguments - псевдомассив
    return Array.from(arguments).reduce((acc,i)=>acc += i,0)/ arguments.length;
}

console.log(average(10,20,30,40,50));
*/



//Rest

/*
function average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
}

console.log(average(10, 20, 30, 40, 50));
*/

/*
function average(a,b,...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
}
//a,b - параметры (10,20) , args - массив ([30,40,50])
console.log(average(10, 20, 30, 40, 50));
*/

// -----------------------------------------------------------------------------------------------

//Spread

// const array = [1,2,3,5,8,13];

/*
Spread обьявляется через ... перед массивом
Раскладывает массив по частям
*/

// console.log(...array);
/*
console.log(Math.max(array));       //NaN
console.log(Math.max(...array));    //13
console.log(Math.min(...array));    //1
console.log(Math.max.apply(null,array));        //Как делалось ранее    


const fib = [1,...array];

console.log(fib);
*/


// -------------------------------------------------------------------------------------------------------

//Destructuring (Деструктуризация)

const array = [1,2,3,5,8,13];

//Ранее
// const a=array[0];
// const b=array[1];

//Сейчас

// const [a,b] = array;
// console.log([a,b]); //1,2

// const [a,b,...c] = array;
// console.log([a,b,c]); //1,2, с - массив

// const [a,b = 42,...c] = array;
// console.log(a,c);       //b - по умолчанию 42


// const [a,,c] = array;
// console.log(a,c);   //1,3


// --------------------------------------------------------------

//Object

const  address = {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'Lenina',
    concat:function(){
        return `${this.country}, ${this.city}, ${this.street} `
    }
}

// console.log(address.concat());


// ********************************************

//Destructuring обьекта:


/*
const {city,country,street,concat} = address;
console.log(city);
console.log(concat.call(address)); //используй метод call  в контекст которого передаетм address
*/

/*
const {city,country,street = "st.Marksa",concat:addressConcat} = address;     // st.Marksa - значение по умолчанию , addressConcat - рез вып ф-ии переместили в перем.
console.log(street);
console.log(addressConcat.call(address));
*/

/*
const {city,...rest} = address;

console.log(city);  //Dnipro
console.log(rest);  //Массив со всеми элементами обьекта address кроме city 
*/


const newAddress = {...address,street:"st.Polya",code:123}      //Создаем новый обьект на основе address, при этом можно перезаписать существующие поля и добавить новые 
console.log(address);
console.log(newAddress);


