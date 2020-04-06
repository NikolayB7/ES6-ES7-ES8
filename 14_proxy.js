const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в обьекте нет`
    },
    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Длина долюна быть больше двух символов. Сейчас ' + value.length);
        }
    }
}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator);

// console.log(formProxy);               // {login: "tester", password: "12345"}
// console.log(formProxy.login);        //tester
// console.log(formProxy.password);    //12345
// console.log(formProxy.age);        //Поля age в обьекте нет



// formProxy.password = '123';
// console.log(formProxy.password);    //123



// formProxy.password = '12';
// console.log(formProxy.password);    //Длина долюна быть больше двух символов. Сейчас 2      ; 12345


function log(message) {
    console.log('[Loc]:',message);
}

const proxy = new Proxy(log,{
    apply(target,thisArg,argArray){
        if(argArray.length === 1){
            Reflect.apply(target,thisArg,argArray)
        }else{
            console.log('Количество аргументов не совпадает');
            
        }
    }
})

proxy('Custom message');
proxy('Message',2);
proxy();
