class Person {
    
    // type = 'human'

    constructor(name){
        this.name = name
    }

    great(){
        console.log(this.name + ' говорит привет !');
    }
}

const john = new Person('John');
john.great();

// console.log(john);
// console.log(john.type);

// console.log(john.__proto__ === Person.prototype);


class Programmer extends Person {
    constructor(name,job){
        super(name)

        this._job = job
    }

    get job(){
        return this._job.toUpperCase();
    }

    set job(job){
        //В сеттерах как правило пишут валидацию

        if(job.length < 2){
            // throw new Error('Validation falied')
            console.log('Validation falied');
        }else{
            this._job = job
        }

    }


    great(){
        super.great();
        console.log('Rewritten');
        
    }
}

const frontend = new Programmer('Ted','Frontend')

// console.log(frontend);
// frontend.great()

console.log(frontend.job);
// frontend.job = '1'
// console.log(frontend.job);

frontend.job = 'Backend'
console.log(frontend.job);

//Static methods

class Util {
    average(...args){
return args.reduce((acc,i)=> acc += i,0)/args.length
    }
}

// Просто обратится к Util.average у нас не получится тк он не доступен

const util = new Util()

console.log(util.average(1,2,3,5,8,13));


// Но если мы сделаем метод статическим то можем обратится через Util.average

class Util2 {
  static average(...args){
return args.reduce((acc,i)=> acc += i,0)/args.length
    }
}

const res = Util2.average(1,2,3,5,8,13);

console.log(res);


