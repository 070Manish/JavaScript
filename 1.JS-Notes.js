//1.Introduction to JavaScript

/*Javascript is just a programming language for web appliaction
1.Internal Linking - wrirte java script code inside the html file
2.External Linking - Write javascript code in seprate .js file
we will follow external linking

console.log("This is Hello from Manish");

*/
//--------------------------------------------------------------------------------
//2.Variables in js
/*
DataType varName =value; strongly typed lan -> C , C++
JS-> loosly typed language

1.Var

var age = 22;
var num1 = 10;
var num2 = 20;

console.log(age);

age = "Manish";

console.log(age);
above both console.log show why js is loosly typed language

Naming Convention
1.firstname
2.fisrt_name
3.FirstName Classes
4.firstName(prefered) Cammel Casing

---var is global Variable

if(1)
{
    var name = "Manish";
    console.log(name);
}
console.log(name);

---var is undefined

console.log(num3);//op->undefined
var num3 = 11;
console.log(num3);//op->11


2.let Variable- prefered

let and var both are same only difference is let is local variable and var is global variable

if(1)
{
    let age = 11;
    console.log(age);//op->11
}

console.log(age);//op-> age is not defined


3.Const variable

const ki value ek br define ki to apn change nh kr skte
values re-assign nh ho skti
if we are using const then we have to assign values to it

const name//->error SyntaxError: Missing initializer in const declaration
const age = 11;
console.log(age);//op->11

age = 22;//op->TypeError: Assignment to constant variable.
console.log(age);
*/

//--------------------------------------------------------------------------------

//3.Data Types and Operator

/*DataTypes
1.Number - let age = 3.14; -> automatic number consider kr lega
2.String - let name = "Manish" or 'Manish';
3.Boolean- let isLogged = true or false ;
4.null- let lastLoginDate = null;---> baad me apn assign kr skte like lastLoginDate = 10 ->thodi memory use kr rh;
5.undefined- let lastLoginDate = undefined; isme zero memory allot hoti hai;
6.Objects- const person =
           {
               firstName = "Manish" ,(comma is necessary in object between two variable)
               age = 26 ,
           }
            console.log(person);op-> Manish , 26
            console.log(person.age);op->26

Oprators
 let num1 = 10;
 let num2 = 20;
1.+ - console.log(num1+num2);op->30
2.- : console.log(num1-num2);op->-10
3.* - console.log(num1*num2);op->200
4./ - console.log(num2/num1);op-> 2 -> it gives questiont

same we can follow for string and other DataTypes


if(1)
{
    console.log(true);//op->true
}

JS 1-> true | 0->false
but in JS true->1 | false -> 0

let temp = false;
if(1)
{
    console.log(temp+10);//op->10;
    temp = true;
    console.log(temp+10);//op->11
    //it means JavaScript true and false ko internally 1 and 0 cosnider krti respectively
}

string '1' + '1' -> string op
string + number -> string
string * num -> Number

console.log('1'+'1');//op->11
console.log('1'+11);//op->111 ->concate
console.log('2'*12);//op->24 ->if we are multiplying string to number to vo string ko number conside krti thodi weird hai java script 
console.log('a' * 1);//op-> NAN(Not a Number)
console.log('a'+ 1);//op-> a1

---Typeof --ishe pata kr skte apne konse type ka variable hai

let age = 10;
console.log(typeof(age));//op->number

*/

//------------------------------------------------------------------------------

//lect.4.Conditional Statement and Switch Cases

/*
1.IF-ELSE
const age = 22;
if(age >= 18)
{
    console.log("Yes you can vote");
}
else if(age >= 80)
{
    console.log("Yes you are adult")
}
else
{
    console.log("No You cant Vote");
}

Another way to use if else using Ternory Oprator

const age = 90;
age >= 18 ? console.log("Yes") : console.log("No");

or

const age = 10;
let result = age >= 18 ? "Yes" : "NO"
console.log(result)//op->NO;


2.Switch Cases

EX1:
const option = 1;
switch(option)
{
    case 1: console.log("Hindi");
    break;
    case 2: console.log("English");
    break;
    case 3 : console.log("Marathi");
    break;
    
    default: console.log("Invalide Option");
}

op-> Hindi

EX2:
let opt = "+";
let a = 10;
let b = 20;

switch(opt)
{
    case "+": console.log(a+b);
    break;
    case "-": console.log(a-b);
    break;
    case "*": console.log(a*b);
    break;
    default: console.log("IDK");
}

op-> 30
*/

//------------------------------------------------------------------------------

//lect.5.Logical Oprator

/*
Logical Operator
1.AND(&&)->All condition must be true
2.OR(||)->Atleast one condition should be true
3.NOT(Negation)(!)-> if(age != 18)-- mtlb 18 ko chod ke sb true honge

let age = 20;
let gender = "Male";

if(age >= 18 && gender == "male")
{
    console.log("You are adult male");
}

op-> You are adult male

--Logical oprators are same as C++

*/

//------------------------------------------------------------------------------

//lect.6.Loops

/*
1.For Loops  ->if you know how many time iterate

for(let i=0; i<10; i++)
{
    console.log("Manish"+ i);
}


2.While  -> When You know condition but you dont know how many iteration

let ip = 0;
let house = 100;

while(ip != house)
{
    ip = ip + 1;
    console.log("Step Taken" + ip);
}

3.Do While  -> pahle code run krega then condition ko check krega but While loop phle condition check krga and then code run krega

Ex1:
let ip = 50;
let house = 50;

do
{
    ip = ip + 1;
    console.log("Step Taken" + ip);
} while( ip <= house);


Ex2:Guess Number

let number = 40;
let guess = 0 ;

do
{
    guess = parseInt(prompt("guess a nummber"));
    
    if(guess == number)
    {
        alert("Winner");
        break;
    }
} while(guess != 0);

*/

//------------------------------------------------------------------------------

//lect.7.Functions 

/*

Functions - A block of code that perform a particular task.

Ex1.

function sayHello() // to define function you have to use "function keyword"
{
    console.log("hey manish");
}

sayHello();// calling a function
sayHello();
sayHello();

op-> Manish Manish manish

Ex2:

function add(a,b)//parameters
{
    console.log(a+b);
}

add(5, 10);//arguments
add(10, 10);

op-> 15 20

Ex3:Returning Result

function mul(a,b)
{
    let ans = a*b;
    return ans;
}

let a = mul(5, 10);
console.log("Hey user result is", a);

Ex4: How to take unlimited arguments accept kru

// arguments -> ek type ka array banayega jisme incomming values ko store kr dega index start from 0

function addNumbers()
{
    let ans = 0;
    for(let i=0; i<arguments.length;i++)
    {
        ans = ans + arguments[i];
    }
    return ans;
}

let result = addNumbers(10, 22, 31, 41, 55, 100);
console.log(result);//op-> 259


Ex5. Array of number using spread oprator (...)

function addNumbersV2(...arr)
{
    let ans = 0;
    for(let i=0; i<arr.length;i++)
    {
        ans = ans + arr[i];
    }
    return ans;
}

let result = addNumbersV2(10, 22, 31, 41, 55, 100);
console.log(result);//op-> 259

*/

//--------------------------------------------------------------------------------

//lect.8.Arrow Functions 

/*
 Arrow Functions
 
 1.Syntax
 
 const sayHello = () =>
 {
     //Arrow Functions
     console.log("Heyy");
 };
 
 ex1:
 const add = (a,b) =>
 {
     return a+b;
 }
 
 console.log(add(2, 3));op->5
 
 ex2:One Liner functions
 
 const add = (a, b) => a + b;// it will automatically return result
 
 console.log(add(2, 3));//op->5
 
 
 2."arguments" keyword-> we can not use arguments approach here so we are going to use spread oprator(...)
 
 function addNumbers = (...) =>
 {
     console.log(nums);
 }
 
 addNumber(1,2,3,4,5);//op->1 2 3 4 5 
 
 
 3.Hoisting --> iska mtlb baad me define krnge but phle we have are calling thats called Hoisting ye normal function me available hai but arrow function me available nh hai
 
 sayHey();
 
 function sayHey()
 {
     console.log("Heyy there");
 }
 
 op-> Heyy there
 
 
 4.This keyword
 
 Ex: Normal function -> yaha pr this jo hai vo caller mtlb caller pr point krrta
 const obj = 
 {
     value = 20,
     myFunction: function()
     {
         console.log("value is" + this.value);
     },
 };
 
 obj.myFunction();//op->Value is 20


Ex: Arrow function -> yaha pr this jo hai vo window pr point kr rh
 const obj = 
 {
     value = 20,
     myFunction: function()
     {
         console.log("value is" + this.value);
     },
 };
 
 obj.myFunction();//op->Value is undefined 

*/

//--------------------------------------------------------------------------------

//lect.9.High Order and Callback

/* 
High Order Function -> A function that takes a function as an argument.

Ex0:

function add(a,b)
{
    let sum = a + b;
    return sum;
}

function show(result)
{
    console.log(result);
}

let result = add(2,4);
show(result);

op-> 6

Ex1: So instead of creating two duff fucntion we can use High Order and call back function

function add(a, b, cb)//result is Callback
{
    let sum = a + b;
    cb(sum);
}

add(2, 4, function(val)
{
    console.log(val);
})

op->6

Ex3: High order and Callback function

function add(a, b, cd)// here cd is call back and whole add function is high order function
{
    let result = a + b;
    cb(result);
}

function show(result)
{
    console.log(result);
}

add(2, 4, show);

op-> 6

Note- Ek function ek Function ko return bhi kr skta

function add(a, b, cb)
{
    let result = a + b;
    cb(result);
    
    return function()
    {
        console.log(result);
    }
}

let resultF = add(2, 4, function(){}) // op-> nothing
resultF();//op-> 6
*/

//--------------------------------------------------------------------------------

//10.lect.Arrays

/*
In java Script Array is Hetro

const student = ["Manish", "John", "Jane", "Bill"];

console.log(student);
console.log(student,length);//op->4
console.log(student[0]);//op->Manish
console.log(student[4]);//op->undefined 

student[0] = "Manish Nagpure";//We can update in array . we are using const but we are updating values how?
                             //its array constant not arrays value constant we can not do this -> student = ["a", "b"]; it will give error 

-- Functions for arrays
student.push("Sanam");//we can push using push function
console.log(student.indexOf("Manish Nagpure"));//op-> 0
student.pop();
student.reverse();


ex2:
const myaArray = [1, true, "Manish"];//we can store diff datatye variables in array in java script unlike other prpgramming languages
myaArray.push({name : "Manish"})// we can push object in array in java script

*/

//--------------------------------------------------------------------------------

//lect.11.Arrays High Order Functions

/*
const student = ["Adam", "Eve", "Shify", "Morkal"];

function print(n)
{
    console.log(n);
}

1.forEach High order fuynction for Array

student.forEach(print);// forEach jo hai vo iterator hai ek ek value le rh student se and pass kr rh print ko
op->Adam Eve Shify Morkal

2. .map
student.map(print);// map bhi forEach jasie hi work krta bs difference ye hai ki pura new array bana rh jo return kr rh
op-> Adam Eve Shify Morkal --> new array hai ye 


//3.find

const number = [1, 2, 3, 41, 5, 6, 7, 4];

let ans = number.find(num => num === 4);

console.log(ans);// 4 

//4.include

console.log(number.includes(3));//op->true->number present hai ki nh vo batata true or false me return krta

//5.Filter

const newArr = number.filter((num) => num % 2 == 0);
console.log(newArr);//->new array banaye jisme even numbers filter krke daal diye

//Normal Functions

//1.slice

const numbers = [1, 2, 3, 4, 5, 6, 7];

let newArr = numbers.slice(1, 5);
console.log(newArr);//op->2 3 4 5 //slice krke new array deta ussi array me changes nh krta

//2.splice -> array me se kch elements ko remove krta hai main array me changes krta hai. Jo elements ko remove krta hai na vo return krta new array me.

const numbers = [1, 2, 3, 4, 5, 6, 7];

let newArr = numbers.splice(1, 4(this is lenght kitne delete krna hai));
console.log(newArr);//op-> 2 3 4 5 ->new Array
console.log(numbers);//op-> 1 6 7 -> old Array
*/

//--------------------------------------------------------------------------------








