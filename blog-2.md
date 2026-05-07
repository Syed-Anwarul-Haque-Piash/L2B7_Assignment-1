Title: OOP

Inheritance is a concept of Object Oriented Programming. Inheritance allows  
the properties and methods from on class to another with `extends` keyword.

 Code Example

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
Title: Inheritance

Abstraction means hiding the complex implementation details of a system and exposing only the essential features.

Title: Encaptulation

Encapsulation is one of the fundamental pillars of Object-Oriented Programming.
Encapsulation allows you to hide the internal state of an object from the outside world usinf Access Modifier.

Example:

Public
Private
Protected