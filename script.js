function getElement(id){
    return document.getElementById(id);
}
// get elements
const plusPhoneButton = getElement("phonePlus");
const minusPhoneButton = getElement("phoneMinus");
const plusCaseButton = getElement("casePlus");
const minusCaseButton = getElement("caseMinus");
var iphoneValue = getElement("iphoneValue");
var caseCount = getElement("caseInput");
var caseValue = getElement("caseValue");

function increaseTotal(){
    var total_first = getElement("total_first");
    var total_second = getElement("total_second");
    // calculate new total

    // set new total
}
// phone
// add event listener
plusPhoneButton.addEventListener('click',function(){
    const iphoneCount = getElement("iphoneInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    iphoneCountNum += 1;
    iphoneCount.value = iphoneCountNum;
    let iphoneValue = getElement("iphoneValue");
    let iphoneTotal = iphoneCountNum * 1219;
    iphoneValue.innerText = iphoneTotal;
})

minusPhoneButton.addEventListener('click',function () {
    const iphoneCount = getElement("iphoneInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    if(iphoneCountNum >0){
        iphoneCountNum -= 1;
        iphoneCount.value = iphoneCountNum;
        let iphoneValue = getElement("iphoneValue");
        let iphoneTotal = iphoneCountNum * 1219;
        iphoneValue.innerText = iphoneTotal;

    }
  
})

plusCaseButton.addEventListener('click',function(){
    const iphoneCount = getElement("caseInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    iphoneCountNum += 1;
    iphoneCount.value = iphoneCountNum;

    let iphoneValue = getElement("caseValue");
    let iphoneTotal = iphoneCountNum * 59;
    iphoneValue.innerText = iphoneTotal;
})

minusCaseButton.addEventListener('click',function () {
    const iphoneCount = getElement("caseInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    if(iphoneCountNum >0){
        iphoneCountNum -= 1;
        iphoneCount.value = iphoneCountNum;

        let iphoneValue = getElement("caseValue");
        let iphoneTotal = iphoneCountNum * 59;
        iphoneValue.innerText = iphoneTotal;
    }
  
})