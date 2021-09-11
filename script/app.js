// get element
function getElement(elementId) {
    return document.getElementById(elementId);
}
// update tota
function updateTotal() {
    const bestPrice = Number(bestPriceField.innerText);
    const extraMemoryCost = Number(extraMemoryCostField.innerText);
    const extraStorageCost = Number(extraStorageCostField.innerText);
    const shippingCost = Number(shippingChargeField.innerText);
    const totalPriceFiled = totalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + shippingCost;
    total.innerText = totalPriceFiled;
}
// percentCalculation calculation
function percentCalculation() {
    const addPomoCodeText = addPomoCode.value;
    if (addPomoCodeText == 'stevekaku') {
        const totalAmount = Number(totalPrice.innerText);
        const amount = (20 / 100) * totalAmount;
        totalProductPrice = totalAmount - amount;
        total.innerText = totalProductPrice;
    }
    else {
        getElement('error-message').style.display = 'block';
    }
    addPomoCode.value = '';
}
// selected element
function isContain(element) {
    return element.classList.contains('selected');
}
// memory button
const firstMemoryBtn = getElement('first-memory-btn');
const secondMemoryBtn = getElement('second-memory-btn');
// storage button
const firstStorageBtn = getElement('first-storage-btn');
const secondStorageBtn = getElement('second-storage-btn');
const thirdStorageBtn = getElement('third-storage-btn');
//shipping button
const freeShippingBtn = getElement('free-shipping-btn');
const expressShippingBtn = getElement('express-shipping-btn');
// text field
const bestPriceField = getElement('best-price');
const extraMemoryCostField = getElement('extra-memory-cost');
const extraStorageCostField = getElement('extra-storage-cost');
const shippingChargeField = getElement('shipping-cost');
const totalPrice = getElement('total-price');
const total = getElement('total-field');
const addPomoCode = getElement('add-pomo-code');
const sumbitBtn = getElement('submit');

// Memory Cost
firstMemoryBtn.addEventListener('click', function () {
    if (!isContain(firstMemoryBtn)) {
        firstMemoryBtn.classList.add('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.remove('selected');
    }
    extraMemoryCostField.innerText = '0';
    updateTotal()
})
secondMemoryBtn.addEventListener('click', function () {
    if (!isContain(secondMemoryBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.add('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.remove('selected');
    }
    extraMemoryCostField.innerText = '180';
    updateTotal()
})
// storage Cost
firstStorageBtn.addEventListener('click', function () {
    if (!isContain(firstStorageBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.add('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.remove('selected');
    }
    extraStorageCostField.innerText = '0';
    updateTotal()
})
secondStorageBtn.addEventListener('click', function () {
    if (!isContain(secondStorageBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.add('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.remove('selected');
    }
    extraStorageCostField.innerText = '100';
    updateTotal()
})
thirdStorageBtn.addEventListener('click', function () {
    if (!isContain(thirdStorageBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.add('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.remove('selected');
    }
    extraStorageCostField.innerText = '180';
    updateTotal()
})
// shipping cost
freeShippingBtn.addEventListener('click', function () {
    if (!isContain(freeShippingBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.add('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.remove('selected');
    }
    shippingChargeField.innerText = '0';
    updateTotal()
})
expressShippingBtn.addEventListener('click', function () {
    if (!isContain(expressShippingBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.add('selected');
        sumbitBtn.classList.remove('selected');
    }
    shippingChargeField.innerText = '20';
    updateTotal()
})
// submit pomo code
sumbitBtn.addEventListener('click', function () {
    if (!isContain(secondMemoryBtn)) {
        firstMemoryBtn.classList.remove('selected');
        secondMemoryBtn.classList.remove('selected');
        firstStorageBtn.classList.remove('selected');
        secondStorageBtn.classList.remove('selected');
        thirdStorageBtn.classList.remove('selected');
        freeShippingBtn.classList.remove('selected');
        expressShippingBtn.classList.remove('selected');
        sumbitBtn.classList.add('selected');
    }
    percentCalculation()
})