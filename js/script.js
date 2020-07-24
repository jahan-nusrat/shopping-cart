const plusBtn = document.getElementById('plusBtn-1')
const minusBtn = document.querySelector('.minusBtn')
const input1 = document.getElementById('input-1')
const input2 = document.querySelector('.input-2')
const phonePrice = document.querySelector('#amount-1')
const casePrice = document.querySelector('#amount-2')
const subtotal = document.querySelector('#subtotal');
const tax = document.querySelector('#tax')
const total = document.querySelector('#total')
const caseMinus = document.querySelector('.case-minusBtn');
const casePlus = document.querySelector('.case-plusBtn')
const price1 = parseFloat(phonePrice.innerHTML);
const price2 = parseFloat(casePrice.innerHTML);

plusBtn.addEventListener('click', function () {
    plusButton(input1)
    allFunction()
})

minusBtn.addEventListener('click', function () {
    minusButton(input1)
    allFunction()
})

casePlus.addEventListener('click', function () {
    plusButton(input2)
    allFunction()
})

caseMinus.addEventListener('click', function () {
    minusButton(input2)
    allFunction()
})

input1.addEventListener('change', function (event) {
    event.preventDefault()
    allFunction()
})

input2.addEventListener('change', function (event) {
    event.preventDefault()
    allFunction()
})

/* remove mobile */
const deletePhone = document.querySelector('.del-phone')
const removePhone = document.querySelector('#remove-phone')
removePhone.addEventListener('click', () => {
    deletePhone.remove()
    input1.value = 0;
    allFunction()
})

/* remove case */

const deleteCase = document.querySelector('.del-case')
const removeCase = document.querySelector('#remove-case')
removeCase.addEventListener('click', () => {
    deleteCase.remove()
    input2.value = 0;
    allFunction()
})