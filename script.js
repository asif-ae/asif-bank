// Login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
  document.getElementById('login-area').style.display = 'none';
  document.getElementById('transaction-area').style.display = 'block';
});

// Deposit button event handler
const depositBtn = document.getElementById('add-deposit');
let depositAmount = document.getElementById('deposit-amount').value;
depositBtn.addEventListener('click', function() {
  let depositAmountStr = parseFloat(depositAmount);

  document.getElementById('deposit-amount').value = "";

  updateSpanText('current-deposit', depositAmountStr);

  // Update current balance
  updateSpanText('current-balance', tot);
});

function updateSpanText(id, plus) {
  const str = document.getElementById(id).innerText;
  const depo = parseFloat(str);
  var tot = depo + plus;
  const totF = tot.toFixed(2);
  document.getElementById(id).innerText = totF;
}