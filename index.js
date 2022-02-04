// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => ['Antonia', 'Nuru'];
const returnLastTwoDrivers = () => ['Amari', 'Mo'];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);


 

