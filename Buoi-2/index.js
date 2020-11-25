class Person{
    name;
    age;
    address;
    gender;
    constructor( name, age, address, gender) {
        this.name = name
        this.age = age
        this.address = address
        this.gender = gender
    }
    speak() {
        console.log(`
        Hello, I am ${this.name}
        I'm ${this.age} year old
        I'm from ${this.address}
        `)
    }
}
const duyet = new Person('Duyet', 20, 'Ha Noi', 'male' )
const abc = new Person('abc', 20, 'Ha Noi', 'female' )
// console.log(duyet)

// duyet.speak()

// Class Animal
// species, color, numberOfLeg, gender, name
// eat => con + name + dang an
// speak => con + name + dang keu
// isDangerous ==> so chan  > 4 hoac so chan = 0, in ra co nguy hiem hay k

class Animal{
    species;
    name;
    color;
    numberOfLeg;
    gender;
    constructor(species, name, color, numberOfLeg, gender){
        this.species = species
        this.name = name
        this.color = color
        this.numberOfLeg = numberOfLeg
        this.gender = gender
    }
    eat() {
        console.log(`
        con ${this.name} dang an
        `)
    }
    speak() {
        console.log(`
        con ${this.name} dang keu
        `)
    }
    isDangerous(){
        // if(this.numberOfLeg > 4 || this.numberOfLeg === 0){
        //     console.log('Nguy hiem day!!!!')
        // }
        // else{
        //     console.log('Hoi nguy hiem!!!!')
        // }
        console.log(this.numberOfLeg > 4 || this.numberOfLeg === 0 ? 'Nguy hiem day!!!' : 'Khong nguy hiem')
    }
}
const cat = new Animal('carnivore', 'Duyet', 'black-white', 4, 'male')
// console.log(cat)

class Mymath{
    static sum(a, b){
        return a + b
    }
    static div (a, b){
        return a/b
    }
}
console.log(Mymath.sum(1,2))
console.log(Math.ceil(1.2))

//ke thua
 
class Employee extends Person{
    salary;
    constructor( name, age, address, gender,salary) {
        super(name, age, address, gender)
        this.salary = salary
    }
    meme(){
        console.log('hihihiihi')
    }
    showOf(){
        console.log(`my salary is ${this.salary}`)
    }
}
const myEmployee = new Employee('Trump', 76, 'New Yorks', 'male', '1000$')
myEmployee.showOf()

//ke thua
// tao class dog ke thua animal, khi speak() in ra gau gau
 class Dog extends Animal{
    constructor(species, name, color, numberOfLeg, gender){
        super(species,name,color,numberOfLeg, gender)
    }
    speak(){
         console.log('go go !!')
     }
 }
const myDog = new Dog('carnivore', 'Duyet', 'black-white', 4, 'male')

myDog.speak()