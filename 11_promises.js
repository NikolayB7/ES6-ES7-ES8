

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

    async function asyncDelay(){
        await dela
    }