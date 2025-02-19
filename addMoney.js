document.getElementById('btn-add-money').addEventListener('click',function(e){
e.preventDefault();


const addMoney = getInputFieldValueById('input-add-money');
const addPin = getInputFieldValueById('input-pin-number');

if(addPin === 12345){
   const balance =  getTextFieldValueById('account-balance');
   const newBalance = balance + addMoney;
   document.getElementById('account-balance').innerText = newBalance;
}else{
    alert('faild to add money')
}
}) 