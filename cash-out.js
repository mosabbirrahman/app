document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin')
    // console.log('inside the clcik handler', cashOut,PinNumber)
    if(pinNumber === 123 ){

        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
       document.getElementById('account-balance').innerText = newBalance;

    }else{
        alert('no money for you....')
    }
})