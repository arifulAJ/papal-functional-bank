// deposit
function getAmount(input){
    const depositInput=document.getElementById(input);
    const inputText=depositInput.value;
    const inputAmount=parseFloat(inputText);
    depositInput.value='';
    return inputAmount;
}
function amountShow(inputSub,amount){
    const depositBalance=document.getElementById(inputSub);
    const depositText=depositBalance.innerText;
    const depositAmount=parseFloat(depositText);
    const newAmount=depositAmount+amount;
     depositBalance.innerText=newAmount;
    console.log(depositBalance);
    return newAmount;
}
function getTotalBalance(){
    const totalBalanceOf=document.getElementById('balance-add');
    const totalOfText=totalBalanceOf.innerText;
    const totalOFAmount=parseFloat(totalOfText);
    console.log(totalOFAmount);
    
    return totalOFAmount;
}
function totalFinalBalance(amount, isAdd){
    const finalValue=document.getElementById('balance-add');
    const totalBalanceAmountis=getTotalBalance();

    if(isAdd==true){
newTotalBalance=totalBalanceAmountis+amount;
    }
    else{
        newTotalBalance=totalBalanceAmountis-amount;
    }
    finalValue.innerText=newTotalBalance;

}



document.getElementById('deposit-btn').addEventListener('click',function(){
  const depositAs=getAmount('deposit-input');
  console.log(depositAs);
if(depositAs>0){
    amountShow('deposit-balance',depositAs);
    totalFinalBalance(depositAs,true);
}
else{window.alert('sorry enter valid and positive  number')}
})
// withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
 const withdrawInput=   getAmount('withdraw-input');
 const withdrawCurrentBalance=getTotalBalance();

if(withdrawInput>0 && withdrawInput<withdrawCurrentBalance){
    amountShow('withdraw-balance',withdrawInput);
    totalFinalBalance(withdrawInput,false);
}
else if(withdrawInput>withdrawCurrentBalance){
    window.alert("you don't have sufficient balance please try agin later");

}

})
