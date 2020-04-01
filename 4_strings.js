//String
/*
const title= "Hello"

const isVisible =()=> Math.random() > 0.5

const template = `
    ${isVisible() ? `<p>Visible</p>` : '' }
<h1 id='demo' style="color:red">${title}</h1>`

console.log(template);
*/

//Methods

const str = "Hello";

//метод startsWith - оперделяет с какого символа начинается строка  и возвращает true/false
//метод endsWith - опр. конец стр.
//includes - определяет наличиче подстроки  в данной строке
//repeat - позволяет повторить строчку n раз
//trim - удаляет пробелы слева и справа
//padStart - увеличивает длину строки c начала, вторым параметром принимает чем наполнить строку
// padEnd - увеличивает длину строки c конца

console.log(str.startsWith('He'));
console.log(str.startsWith('De'));
console.log(str.endsWith('lo'));
console.log(str.endsWith('me'));

console.log(str.includes('llo'));

console.log(str.repeat(3));

console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());


console.log(str.padStart(10,'1234'));
console.log(str.padEnd(8,'abc'));




