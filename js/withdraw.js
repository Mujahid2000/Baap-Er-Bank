
document.getElementById('deposit-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInputTotal = withdrawInput.value;
    const newConvertWithdrawAmount = parseFloat(newWithdrawInputTotal);
   
    if(isNaN(newWithdrawInputTotal)){
        alert('provide a valid number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawTotal = withdrawTotal.innerText;
    const newConvertWithdrawTotal = parseFloat(newWithdrawTotal);  

    const balanceTotal = document.getElementById('balance-total');
    const newBalance = balanceTotal.innerText;
    const convertBalance = parseFloat(newBalance);

    if(newConvertWithdrawAmount > convertBalance){
        alert('tui sala fokinni');
        return;
        
    }

    const totalWithdraw = newConvertWithdrawAmount + newConvertWithdrawTotal;
    withdrawTotal.innerText = totalWithdraw;

    const newTotalBalance = convertBalance - newConvertWithdrawAmount;
    balanceTotal.innerText = newTotalBalance;
    withdrawInput.value = '';
})