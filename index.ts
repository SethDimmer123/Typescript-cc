// Basic Types
let age:number = 25;
let hobby : string = "Soccer";
let isAdult :boolean=true;
let fruit: any = "apple";

// Arrays
let fruits:string[] = ["Apple", "Orange"]
let arr:any[] = [22,"a",true]
let numArr:number[][] = [[1],[2]]

// Tuples

let employee:[number, string] = [1, "Jack"]
let employees: [number, string][]= [
    [2, "Sarah"],
    [3, "Jack"]
]

// Objects
let car: {
    brand: string,
    year:number
} = {
    brand: "Lexus",
    year:2020
}

// Custom types

type Car = {
    brand:string,
    year:number
}

let car1: Car = {
    brand: "Lexus",
    year:2020
}

// Interface

interface Car1 {
    brand: "Lexus",
    year:2020
}

let newCar: Car1 = {
    brand: "Lexus",
    year:2020
}

// Union
let x:string | number = 22

type occupation = "employed" | "student"
let jackOccupation:occupation = "student"



