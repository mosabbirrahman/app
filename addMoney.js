document.getElementById('btn-add-money').addEventListener('click',function(e){
e.preventDefault();
console.log('add money button clicked')
const addMoney = getInputFieldValueById('input-add-money');
const addPin = getInputFieldValueById('input-pin-number');
console.log('added money with peramitar', addMoney, addPin)
})