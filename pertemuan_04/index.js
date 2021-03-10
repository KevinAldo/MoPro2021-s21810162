//Array

//let numbers = [1, 2, 3, 4, 5];
//let Person = ['Kevin', 'Aldo', 20, true];

//let numbers = new Array(1,2,3,4,5);
//let Person = new Array('Kevin', 'Aldo', 20, true);

//Person[3] = false;

//console.log(numbers[numbers.lenght - 1]);
//console.log(Person[Person.lenght - 1]);

//Object

const Person = {
    firstName : "Kevin",
    lastName : "Aldo",
    age : 33,
    isSingle : true,
    sayHello : function (){
        console.log("Hello");
    },
};

//const Person = new Object();
//Person.firstName = "Kevin";
//Person.lastName = "Aldo";
//Person.age = "20";
//Person.isSingle = true;

console.log(Person.lastName);
console.log(Person["isSingle"]);

Person.address = "Manado";
Person["Nationality"] = "Indonesian";
console.log(Person);

Person.sayHello();