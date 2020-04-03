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

    great(){
        super.great();
        console.log('Rewritten');
        
    }
}

const frontend = new Programmer('Ted','Frontend')

console.log(frontend);
frontend.great()
