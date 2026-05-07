//Problem 1
const filterEvenNumbers=(array: number[]): number[] => {
    return array.filter(arr => arr % 2 === 0);
}





//Problem 2

const reverseString=(str: string): string => {
    return str.split('').reverse().join('');
}



//prolem 3

type StringOrNumber = string | number;

const checkType=(value: StringOrNumber): string => {
    if (typeof value === 'string') {
        return "String";
    } else {
        return "Number";
    }
}



//problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}




//problem 5

interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus=(book: Book):Book & {isRead: boolean} => {
    return { ...book, isRead:true };
}




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




//problem 7

const getIntersection=(array1: number[], array2: number[]): number[] => {
    return array1.filter(value => array2.includes(value));
}






