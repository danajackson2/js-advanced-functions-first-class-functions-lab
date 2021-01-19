const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
    return function(fare){return fare * multiplier}
}

function fareDoubler(fare){       
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare){       
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, func){
    return func(arr)
}