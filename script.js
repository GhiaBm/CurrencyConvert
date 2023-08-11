//variables 
const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const buttonconversion = document.getElementById('convertbutton')
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
function calculate() {
    //value variables 
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  
 fetch(`https://v6.exchangerate-api.com/v6/f924bbbf8aaaeed04aaf6408/latest/${currency_one}`)
    .then(res => res.json())
    .then((data) => {
        //console.log(data); to explain more about it
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      if (currency_two == "") {
        rateEl.innerText = `1 ${currency_one} = 00`;
      }
      amountEl_two.value = (amountEl_one.value * rate).toFixed(6); //0.00
    
    if (currency_one == "LBP" || currency_two == "LBP" ) {
        alert("Note: this exchange rate is the official one, and not the black market exchage rate");
    } 
});
}



function swaping (){
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();

}

function click(){
    if (currencyEl_one.value == "" ) {
        alert("Please input the currency you would like to change from");
        rateEl.innerText = `00.00 = 00.00`;
    }
    if (currencyEl_two.value == "") {
        alert("Please input the currency you would like to change to");
    }
    if (amountEl_one.value == 0){
        alert("Please input the amount you would like to calulate");
    }
}

amountEl_one.addEventListener('input', calculate);
swap.addEventListener('click', swaping);
buttonconversion.addEventListener('click', calculate);
buttonconversion.addEventListener('click', click);
