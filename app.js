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

document.getElementById('calc-number').addEventListener('click', function (event) {
    const clickednumber = event.target.innerText;
    const displayNumber = document.getElementById('display-calc-num');
    if (isNaN(clickednumber)) {
        if (clickednumber == 'C') {
            displayNumber.value = '';
        }
    }
    else {
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + clickednumber;
        displayNumber.value = newNumber;
    }
});

function verifyPin() {
    const displayPin = document.getElementById('pin-display').value;
    const inputPin = document.getElementById('display-calc-num').value;
    if (displayPin == inputPin) {
        const successMsg = document.getElementById('success');
        successMsg.style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    }
    else {
        const successMsg = document.getElementById('success');
        successMsg.style.display = 'none';
        document.getElementById('fail').style.display = 'block';
    }
}

