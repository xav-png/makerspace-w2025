const sound = new Audio('click.mp3');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const pi = document.querySelector('.pi');
const modulo = document.querySelector('.modulo');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');

let output = document.querySelector('.output');
let blank = document.querySelector('.blank');

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
        },
            {
        domElement: pi,
        value: 3.14
    },
    {
        domElement: modulo,
        value: ' % '
    },
    {
        domElement: add,
        value: ' + '
    },
    {
        domElement: subtract,
        value: ' - '
    },
    {
        domElement: multiply,
        value: ' * '
    },
    {
        domElement: divide,
        value: ' / '
    }
    ];

let notes = '';

 for (let i = 0; i < buttons.length; i++) {
        buttons[i].domElement.addEventListener('click', function() {
            blank.innerHTML = '';
            notes += buttons[i].value;
            output.textContent = notes;
            sound.play();
    });
 }

 function equals() {
    equal.addEventListener('click', function() {
        const result = eval(notes);
        output.textContent = result;
        sound.play();
    });
 }

 equals();
