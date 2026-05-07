//Problem 1
const filterEvenNumbers=(array: number[]): number[] => {
    return array.filter(arr => arr % 2 === 0);
}
//output
//console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


//Problem 2

const reverseString=(str: string): string => {
    return str.split('').reverse().join('');
}
//output
//console.log(reverseString("typescript"))


//prolem 3

type StringOrNumber = string | number;

const checkType=(value: StringOrNumber): string => {
    if (typeof value === 'string') {
        return "String";
    } else {
        return "Number";
    }
}

//console.log(checkType("Hello")); // Output: String
//console.log(checkType(42)); // Output: Number

//problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
const userInfo = getProperty(user, "name");

//console.log(userInfo); // Output: John Doe

//problem 5

interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus=(book: Book):Book & {isRead: boolean} => {
    return { ...book, isRead:true };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const updatedBook = toggleReadStatus(myBook);
console.log(updatedBook); // Output: { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }


//problem 6

class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;
    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
//console.log(student.getDetails());

//problem 7

const getIntersection=(array1: number[], array2: number[]): number[] => {
    return array1.filter(value => array2.includes(value));
}
//console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 


