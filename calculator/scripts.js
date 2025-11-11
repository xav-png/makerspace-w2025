const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const output = document.querySelector('.output');

    const buttons = [
        {
            domElement: one,
            value: 1
        },
        {
            domElement: two,
            value: 2
        },
        {
            domElement: three,
            value: 3
        },
        {
            domElement: four,
            value: 4
        },
        {
            domElement: five,
            value: 5
        },
        {
            domElement: six,
            value: 6
        },
        {
            domElement: seven,
            value: 7
        },
        {
            domElement: eight,
            value: 8
        },
        {
            domElement: nine,
            value: 9
        }
    ];

 for (let i = 0; i < buttons.length; i++) {
    buttons[i].domElement.addEventListener('click', function() {
    output.innerHTML = buttons[i].value;
});
}


const pi = document.querySelector('.pi');
const squareRoot = document.querySelector('.square-root');
const modulo = document.querySelector('.modulo');
