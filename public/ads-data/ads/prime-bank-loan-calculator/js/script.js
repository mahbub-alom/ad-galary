document.querySelector('.ppm_calculate').addEventListener('click', () => {
  let loanAmount = document.querySelector('.ppm_loan_amount_input').value;
  let interestRate = document.querySelector('.ppm_interestRate_input').value;
  let loanPeriod = document.querySelector('.ppm_loan_period_input').value;
  if(loanAmount == '' || interestRate == '' || loanPeriod == ''){
    return
  }
  const monthlyRate = (parseFloat(interestRate) / 100) / 12;
  // Convert loan period to months
  const totalMonths = parseFloat(loanPeriod) * 12;
  // Calculate monthly payment
  let monthlyPayment = parseFloat(loanAmount) *
    (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  // Round monthly payment to 2 decimal places
  monthlyPayment = monthlyPayment.toFixed(2);

  gsap.to('.ppm_slide_1', { display: 'none', opacity: 0, duration: .3 })
  gsap.to('.ppm_slide_2', { display: 'block', opacity: 1 })
  document.querySelector('.ppm_monthly_instalment_value').innerHTML = monthlyPayment;
})


document.querySelector('.ppm_get_loan').addEventListener('click', () => {
  window.open('https://www.primebank.com.bd/apply-online-now', '_blank');
});

document.querySelector('.ppm_reset').addEventListener('click', () => {
  document.querySelector('.ppm_loan_amount_input').value = '';
  document.querySelector('.ppm_interestRate_input').value = '';
  document.querySelector('.ppm_loan_period_input').value = '';
});