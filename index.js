function getCounterValue () {
    const counter = document.getElementById('counter');
    return parseInt(counter.innerText);
}

function setCounterValue (value) {
    document.getElementById("counter").innerText = String(value);
}

function tickUp() {
    const counter = getCounterValue ();
    setCounterValue (counter + 1);
}

function tickDown() {
    const counter = getCounterValue ();
    setCounterValue (counter - 1);
}

function runForLoop () {
    const counter = getCounterValue ();
    const numbers = [];

    for (let i = 0; i <= counter; i++) {
        numbers.push (i);
    }
    document.getElementById('forLoopResult').innerText = numbers.join(' ');
}

function showOddNumbers () {
    const counter = getCounterValue ();
    const oddNumbers = [];

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) oddNumbers.push(i);
    }

    document.getElementById('oddNumberResult').innerText = oddNumbers.join(' ');

}

function addMultiplesToArray () {
    const counter = getCounterValue ();
    const numbers = [];
    for (let i = counter; i >= 1; i--) {
        if (i % 5 === 0) numbers.push(i);
    }
    document.getElementById('FiveNumberResult').innerText = numbers.join(' ');
}

function Car(type, mpg, color) {
    this.carType = type;
    this.carMPG = mpg;
    this.carColor = color;
}

function changeColor(clicked) {

    const p = document.getElementById("styleParagraph");

    if (clicked === 1) p.style.color = "Red";
    else if (clicked === 2) p.style.color = "Green";
    else if (clicked === 3) p.style.color = "Blue";
}