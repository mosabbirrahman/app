
function getInputFieldValueById(id){
  
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  // console.log(id,inputValue, inputNumber)
  return inputNumber;
}

function getTextFieldValueById(id){
  const textValue  = document.getElementById(id).value;
  const textNumber = parseFloat(textValue);
  return textNumber;
}