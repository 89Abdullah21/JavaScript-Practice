// Things done with the Object class can be done with the functional programming too but in OOP we create real world objects and use them in our code. In functional programming, we just create functions and use them.

// In OOP, we create a single class and then create multiple objects from that class.

// Classes are like registration forms and objects are filled forms each having different values. Classes are blueprints and objects are instances of those blueprints.


let obj1={
    name:"John",
    age:30,
    city:"New York"
}

console.log(obj1);


// Prototypal inheritance is a feature in JavaScript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.

let animal ={
    eats:true
};

let dog ={
    name:"Buddy",
    sound:"bark"
}

dog.__proto__=animal;
console.log(dog.eats); // true
console.log(dog);

// ========================================= Creating Classes ==============================================================================

class Bot{
    constructor(){
        console.log("Bot is created");
    } // When an object is created, constructor is called automatically.

    chat(){
        console.log("I have the ability to chat because I am a chat bot");
    }

    walk(){
        console.log("I can walk too bcz i am a walking bot also")
    }


}

let bot1 = new Bot();
bot1.chat();
bot1.walk();
console.log(bot1);


//========================================= Creating Classes with Parameters ==============================================================================

class Human{
    constructor(name, age, city, hobby){
        this.name=name;
        this.age=age;
        this.city=city;
        this.hobby=hobby;
    }

    intro(){
        console.log(`My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}`);
    }

    hobbyInfo(){
        console.log(`My hobby is ${this.hobby}`);
    }
}

let human1 = new Human("Abdullah", 20, "Karachi", "Coding");
let human2 = new Human("Khan", 19, "Lahore", "Golf");

// we can create as many objects as we want from a single class.
// we can call methods of the class using the objects created from that class.
// human1.intro(); OR human2.hobbyInfo(); etc.

console.log(human1);
console.log(human2);

// ========================================= Inheritance (Extends)==============================================================================

class Animal{
    constructor(name, sound){
        this.name=name;
        this.sound=sound;
    }

    info(){
        console.log(`The ${this.name} makes a ${this.sound} sound.`);
    }

    move(){
        console.log(`The ${this.name} is moving.`);
    }
}

class Cat extends Animal{
    constructor(name, sound, color){
        super(name, sound); // Calls the constructor of the parent class (Animal)
        this.color=color;
    }

    info(){
        super.info(); // Calls the info method of the parent class (Animal)
        console.log(`The ${this.name} is ${this.color} in color.`);
        // Method overriding is when a child class has a method with the same name as a method in the parent class. The child class method overrides the parent class method.
    }
}

let cat1 = new Cat("Blaky", "meow", "black");
cat1.info();
cat1.move();
console.log(cat1);

let cat2 = new Cat("Sheeno", "meow", "Green");
console.log(cat2);


// ========================================= Method Overriding ==============================================================================
// Method overriding is when a child class has a method with the same name as a method in the parent class. The child class method overrides the parent class method.

// Due to method overriding, Animal.info() method is different from Cat.info() method.

// ================== Super keyword ==================

// super keyword is used to call the constructor, methods and properties of the super class (parent class) from the child class.

// ===================== Getter Setter =====================

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    get getName(){
        return this.name;
    }

    get getAge(){
        return this.age;
    }

    set setName(name){
        this.name=name;
    }

    set setAge(age){
        this.age=age;
    }
}

let person1 = new Person("Ali", 24);
console.log(person1.getName); // Ali
console.log(person1.getAge); // 24

person1.setName="Ahmed";
person1.setAge=30;
console.log(person1.getName); // Ahmed
console.log(person1.getAge); // 30


// ============ Instaanceof Operator ============

// The instanceof operator is used to check if an object is an instance of a particular class or not. It returns true if the object is an instance of the class or any other class inheriting from it, otherwise it returns false.

console.log(cat1 instanceof Cat); // true
console.log(cat1 instanceof Animal); // true
console.log(cat1 instanceof Person); // false
