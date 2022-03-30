let num1 = document.querySelector("#number1");

let num2 = document.querySelector("#number2");

let plusButton = document.querySelector("input[value = ' + ']");

let minusButton = document.querySelector("input[value = ' - ']");

let multiplyButton = document.querySelector("input[value = ' * ']");

let dividedButton = document.querySelector("input[value = ' / ']");



plusButton.addEventListener('click', () => {
    let total = parseInt(num1.value) + parseInt(num2.value) ;
    document.querySelector("#result").value = total;
    console.log(total)
})

minusButton.addEventListener('click', () => {
    let total = parseInt(num1.value) - parseInt(num2.value) ;
    document.querySelector("#result").value = total;
    console.log(total)
})

multiplyButton.addEventListener('click', () => {
    let total = parseInt(num1.value) * parseInt(num2.value) ;
    document.querySelector("#result").value = total;
    console.log(total)
})

dividedButton.addEventListener('click', () => {
    let total = parseInt(num1.value) / parseInt(num2.value) ;
    document.querySelector("#result").value = total;
    console.log(total)
})