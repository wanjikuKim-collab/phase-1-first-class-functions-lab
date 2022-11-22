// Code your solution in this file!
//anonymous functions
//we use a function expression 
//we assign an anonymous function to it
//accepts an array of drivers as its argument
//we use the slice method to return the first two drivers

const returnFirstTwoDrivers = function(drivers){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


// we use the slice method to return the last two drivers
const returnLastTwoDrivers = function(drivers){
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

//selecting drivers
//it's an array with two elements:
//1.returnFirstTwoDrivers()
//2.returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

//creating a higher order function that takes in one argument, an integer
//returns a function that will multiply a fare for a ride accordingly.

// function createFareMultiplier(fare){
//     return (function fareMultiplier (fare){
//         fare**2
//     })

// }
// createFareMultiplier(5);

// //doubles number

// function fareDoubler(num){
//     num *=2;
//     return num;
// };

// fareDoubler(10);

// //triples number

// function fareTripler(num){
//     num *=3;
//     return num;
// }

// fareTripler(12);

function createFareMultiplier(num) {
    return function(fareMultiplier) {
        return fareMultiplier * num;
    }
}

const fareDoubler = function(fareMultiplier) {
    return createFareMultiplier(2)(fareMultiplier);
}

const fareTripler = function(fareMultiplier) {
    return createFareMultiplier(3)(fareMultiplier);
}


//driver selection
function selectDifferentDrivers(arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers)  
}

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);