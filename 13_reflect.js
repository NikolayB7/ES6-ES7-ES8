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

// class ProtoStudent {
//     university = "Oxford"
// }

const student = Reflect.construct(Student,['John'])
//первый параметр таргет функция в нашем случае это класс Student
//второй параметр массив аргументов которые попадут в конструктор
console.log(student);


// Reflect.apply(student.great,{name:'Tester'},[])
// console.log(Reflect.ownKeys(student));  //name

Reflect.preventExtensions(student);

student.age = 25;
console.log(student);   //name: "John", поле age не добавилось т.к. мы запретили изменение обьекта ранее через  preventExtensions

console.log(Reflect.isExtensible(student));
