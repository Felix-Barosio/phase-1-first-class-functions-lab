// Code your solution in this file!
const drivers = ['John', 'Kamau', 'Isaac', 'Tommy']

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (multiply) => {
    return num => multiply * num 
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnTwoDrivers) => returnTwoDrivers(drivers)
