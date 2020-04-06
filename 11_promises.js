

/*
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('After delay');
    },500)
})
*/


/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 500)
})


promise.then(data=> console.log(data)); //Success
*/

// console.log(promise);


/*
// resolve

const delay = ms => new Promise((resolve,reject) => {
    setTimeout(()=>resolve(`Done! ${ms}`),ms);
})

delay(1000).then(data => console.log(data));
delay(1000).then(data => delay(500)).then(data => console.log(data));
*/


/*
//reject

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => reject(`Done! ${ms}`), ms);
})

// delay(1000).then(data => console.log(data));
delay(1000)
    .then(data => delay(500))
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))

    */


    /*
//resolve async
const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms);
})

async function asyncDelay() {
   const data =  await delay(2000)
    console.log(data);
    
} 

asyncDelay()    //Done! 2000

*/


/*
//reject async
const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => reject(`Done! ${ms}`), ms);
})

async function asyncDelay() {
   try{
    const data =  await delay(2000)
    console.log(data);
   }catch(e){
       console.log('Error',e);
       
   }
    
} 

asyncDelay()    //Error Done! 2000
*/


// ---------------------------------------------------------------------------------

/*
const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms);
})

//Promise.all ждет пока выполнятся все промисы, и выдаст результат массивом

Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then( data => console.log(data));
*/

// ---------------------------------------------------------------------------------



const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms);
})

//Promise.race ждет пока выполнятся самы быстрый из промисов

Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then( data => console.log(data));


// Promise.race и Promise.all - удобно использовать для загрузки данных с сервера