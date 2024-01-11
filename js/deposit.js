document.getElementById('deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositInput = depositInput.value;
    const depositConvert = parseFloat(newDepositInput);

    

    const depositTitle = document.getElementById('deposit-total');
    const newdepositTitle =  depositTitle.innerText;
    const depositTitleConvert = parseFloat(newdepositTitle);

    const totalDepositAmount = depositConvert + depositTitleConvert;
    depositTitle.innerText = totalDepositAmount;

    
    const balanceTotal = document.getElementById('balance-total');
    const newBalance = balanceTotal.innerText;
    const convertBalance = parseFloat(newBalance);

    const newTotalBalance = convertBalance + depositConvert;
    balanceTotal.innerText = newTotalBalance;
    depositInput.value = '';
})