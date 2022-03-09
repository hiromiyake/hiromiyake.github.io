// References
// JS book by Jon Duckett, pg 275
// https://javascriptbook.com/code/c06/
// https://javascriptbook.com/code/c06/focus-blur.html
// https://javascriptbook.com/code/c06/css/c06.css
// https://javascriptbook.com/code/c06/js/focus-blur.js

var today = new Date();

function how_old_am_i() {
  var useryear = parseInt(el.value)
  var year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });
  elMsg1.textContent = 'If you were born before ' + month + ' ' + today.getDate().toString() + ', you are ' + (year - useryear).toString() + ' years old. '
                     + 'If you were born after ' + month + ' ' + today.getDate().toString() + ', you are ' + (year - useryear - 1).toString() + ' years old.';
}

function todays_datetime() {
    var day = today.toDateString();
    var time = today.toTimeString();
    // elMsg2.textContent = 'Today is ' + today.toString()
    elMsg2.textContent = 'Today is ' + day + ', ' + time + '.'
}

function calculate_investment() {
    var amount = parseFloat(investment.value);
    var ir = parseFloat(interest_rate.value);
    var yr = invest_year.value;
    elMsg3.textContent = 'Your investment will grow to $' + (amount*(1 + ir/100/12)**(yr*12)).toFixed(2).toString() + '.';
}

var el = document.getElementById('birthyear');
el.addEventListener('blur', how_old_am_i, false); // 'blur' or 'input'
el.addEventListener('blur', todays_datetime, false); // 'blur' or 'input'

var elMsg1 = document.getElementById('feedback1');
var elMsg2 = document.getElementById('feedback2');

var investment = document.getElementById('investment');
investment.addEventListener('blur', calculate_investment, false);

var interest_rate = document.getElementById('interest_rate');
interest_rate.addEventListener('blur', calculate_investment, false);

var invest_year = document.getElementById('invest_year');
invest_year.addEventListener('blur', calculate_investment, false);

var elMsg3 = document.getElementById('feedback3');
