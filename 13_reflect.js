class Student {
    constructor(name){
        this.name = name;
    }

    great(){
        console.log(`Hi! My name is ${this.name}`);
        
    }
}

//Можнно обьявить об использовании класса так:
// const student = new Student('John');
// console.log(student.great());

// или использовать Reflect

const student = Reflect.construct(Student,['John'])
//первый параметр таргет функция в нашем случае это класс Student
//второй параметр массив аргументов которые попадут в конструктор
console.log(student);
