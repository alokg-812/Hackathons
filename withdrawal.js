const bank_amt = 10000;
const withdl_amt = 2000;
function upi() {
    let upi_limit = 5000;
    if(withdl_amt <= upi_limit) {
        console.log("Congratulations! Your Transaction is being Successful via UPI.");
        console.log("Amount left in your account: ",(bank_amt-withdl_amt));
        console.log("Amout left in your daily UPI Limit: ",(upi_limit-withdl_amt));
    }
    else {
        console.log("As per government rules, your Withdrawal amount exceeded daily UPI limit by "+(withdl_amt-upi_limit));
    }
}
function atm() {
    let atm_limit = 7500;
    if(withdl_amt <= atm_limit) {
        console.log("Congratulations! Your Transaction is being Successful via ATM.");
        console.log("Amount left in your account: ",(bank_amt - withdl_amt));
        console.log("Amout left in your daily ATM Limit: ",(atm_limit - withdl_amt));
    }
    else {
        console.log("As per government rules, your Withdrawal amount exceeds daily ATM limit by "+(withdl_amt - atm_limit));
    }
}
function tap_and_pay() {
    let tap_and_pay_limit = 2000;
    if (withdl_amt <= tap_and_pay_limit){
        console.log("Congratulations! Your Transaction is being Successful via tap and pay.");
        console.log("Amount left in your account: ",(bank_amt-withdl_amt));
        console.log("Amout left in your daily Tap & Pay Limit: ",(tap_and_pay_limit-withdl_amt));
}
else {
    console.log("As per government rules, your Withdrawal amount exceeded daily UPI limit by "+(withdl_amt-tap_and_pay_limitt));
}
}


let transaction_via = 'ATM'
console.log("Your current bank balance: "+bank_amt);
console.log("Your withdrawal amount: "+ withdl_amt);
if (withdl_amt <= bank_amt) {
    if(transaction_via == 'UPI') {
        upi();
}
    else if(transaction_via == 'ATM') {
        atm();
}
    else if(transaction_via == 'Tap & Pay') {
        tap_and_pay();
}
    else console.log("Please enter a valid way of transaction.")
}
else {
    console.log("Insufficient funds in account by ",+(withdl_amt-bank_amt))
}