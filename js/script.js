let num1, num2, operator, result;

let total = []


const $intergerEl = $('#integers');
const $operatorEl = $('#operators')
const $buttonEl = $('#reset-btn');
const $resultEl = $('#result');


$intergerEl.on('click', handleNumber);
$operatorEl.on('click', handleOperator)
$buttonEl.on('click', handleInit);

function handleInit() {
    // clear the value inside h2 element
    result = '';
}

function handleNumber(num) {
    if(num1 === '') {
        num1 = $resultEl.text($(this).html());
    } else {
        num2 = $resultEl.text($(this).html());
    }
    // takes the value of each square and displays it inside the h2 element
    operator = $resultEl.text($(this).html());

    num1 + num2
    
    
}

function handleOperator() {
    //
}