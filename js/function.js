function plusButton(input) {
    let value = parseInt(input.value)
    value += 1;
    input.value = value;
}

function minusButton(input) {
    let value = parseInt(input.value)
    value -= 1;
    input.value = value;
    if (input.value < 0) {
        input.value = 0
    }
}

function setPhonePrice() {
    let price = price1 * parseInt(input1.value)
    if (price) {
        phonePrice.innerHTML = price;
        return price
    } else {
        phonePrice.innerHTML = 0;
        input1.value = 0;
        return 0
    }
}

function setCasePrice() {
    let price = price2 * parseInt(input2.value)
    if (price) {
        casePrice.innerHTML = price;
        return price
    } else {
        casePrice.innerHTML = 0;
        input2.value = 0;
        return 0
    }
}

function subtotalPrice() {
    subtotal.innerHTML = setPhonePrice() + setCasePrice()
}

function getTax() {
    if (parseInt(subtotal.innerHTML) > 2000) {
        tax.innerHTML = parseInt(subtotal.innerHTML) * 2 / 100;
    } else {
        tax.innerHTML = 0;
    }
}

function getTotal() {
    total.innerHTML = parseInt(subtotal.innerHTML) + parseFloat(tax.innerHTML);
}

function allFunction() {
    const phonePrice = setPhonePrice();
    const casePrice = setCasePrice();
    const subtotal = subtotalPrice();
    const tax = getTax()
    const total = getTotal()
}