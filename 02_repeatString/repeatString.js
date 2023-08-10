const repeatString = function(userInput, numberOfTimes) {
    let returnOutput = '';

    if(numberOfTimes < 0)
    {
        returnOutput = "ERROR";
    }
    else
    {
        for(i = 0; i < numberOfTimes; i++)
        {
            returnOutput += userInput;
        }
    }
    return returnOutput;
};

let randomNumber = Math.floor(Math.random() * 1000);

repeatString('hey', randomNumber);

// Do not edit below this line
module.exports = repeatString;
