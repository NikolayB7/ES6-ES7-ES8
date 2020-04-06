//map

const map = new Map(
    [['a',1]]
)

// console.log(map);
// console.log(map.get('a'));
map.set('b',2);
map.set('b',2).set(NaN,'Number');   //безумие но такая возможность есть(задать значение в NaN)
// console.log(map.get(NaN));


// map.clear()
// console.log(map);


// console.log(map.has(45));    //false
// console.log(map.has('b'));      //true

// map.delete('b');
// console.log(map.has('b')); 

// console.log(map.size);


//Есть возможность работать итераторами позволяющими работать с циклом for of:
// console.log(map.keys());
// console.log(map.entries());
// console.log(map.values());

// -------------------------------------------------------------------------------------------------------

//Set


const set = new Set([1,1,2,3,5,8,13,13,13,5,8]);

//Set - автоматически удаляет повторя.щиеся элементы

// console.log(set);       //1,2,3,5,8,13

// console.log(set.size);
// console.log(set.add(21));
// set.clear()

// set.delete(1);
// console.log(set);


//Есть возможность работать итераторами позволяющими работать с циклом for of:
// console.log(set.keys());
// console.log(set.entries());
// console.log(set.values());



