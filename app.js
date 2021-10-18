function getPin() {
    const randomNumber = parseInt(Math.random() * 10000);
    const randomNumberString = randomNumber + '';
    //const randomNumberInt = parseInt(randomNumber);
    if (randomNumberString.length < 4) {
        return getPin();
    }
    else {
        return randomNumberString;
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
};

