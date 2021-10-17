function generatePin() {
    const randomNumber = Math.random() * 10000;
    const randomNumberString = randomNumber + '';
    //const randomNumberInt = parseInt(randomNumber);
    if (randomNumberString.length < 4) {
        console.log('clicked its less than 4', randomNumberInt);
    }
    else {
        console.log('clicked', typeof (randomNumberInt));
    }

};
