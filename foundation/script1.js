// objects
'use strict';

//this objects got 5 PROPERTIES
const jonas = {
    firstname: 'jonas',
    lastname: 'schmend',
    birthyear: 2002,
    job: 'teacher',
    friends: ['michael', 'ornela'],
    hasdriverslicense: false,

    // a function expression == a method
    // calcAge: function(birthyear)
    // {
    //     return 2022-birthyear;
    // }

    calcAge: function()
    {
        return 2022-this.birthyear;
    },

    // driverlicense: function()
    // {
    //     if(this.hasdriverslicense)
    //     {
    //         return "has driver license"
    //     }
    //     else
    //     {
    //         return "does not have a driver license"
    //     }
    // }

    getSummary: function()
    {
        return `${this.firstname} is a ${this.calcAge()} ${this.job} and he has ${this.hasdriverslicense ? 'a' : 'no'} driver's license`
    }
}
 
console.log(jonas.lastname)
console.log(jonas['firstname'])

const namekey = 'name';
console.log(jonas['first' + namekey])
console.log(jonas['last' + namekey])

// const info = prompt("what are u interested in knowing firstname lastname age or friends?")
// console.log(jonas[info])

console.log('Jonas has got ' + jonas.friends.length + ' friends and his best friend is ' + jonas.friends[0])
console.log(jonas.calcAge())
// console.log(jonas['calcAge'](1991))

// console.log(`${jonas.firstname} is a ${jonas.calcAge()} ${jonas.job} and he ${jonas.driverlicense()}`)
console.log(jonas.getSummary())


// code challenge 
const john = 
{
    firstname: 'john',
    lastname: 'smith',
    mass: 78, 
    height: 1.69,

    calcBMI: function()
    {
        this.bmi = this.mass / this.height **2; 
        return this.bmi;
    }
}

const mark = 
{
    firstname: 'mark',
    lastname: 'miller',
    mass: 92, 
    height: 1.95,

    calcBMI: function()
    {
        this.bmi = this.mass / this.height **2; 
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI())
{
    console.log(`${john.firstname}'s bmi (${john.bmi} is higher than ${mark.firstname} bmi (${mark.bmi}))`)
}
else
{
    console.log(`${mark.firstname}'s bmi (${mark.bmi} is higher than ${john.firstname} bmi (${john.bmi}))`)
}

const arr = []

function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum+ arr[i];
    }
    return sum;
}
console.log(calcAverage([1,2,3,4,5]))