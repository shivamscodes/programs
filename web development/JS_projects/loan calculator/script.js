function calculateLoan(){
    LoanAmount = document.getElementById("amount").value;

    LoanInterest = document.getElementById("interest").value;

    LoanTime = document.getElementById("time").value;

    interest = (LoanAmount * LoanInterest * 0.01)/LoanTime;
    
    monthlyPayment = (LoanAmount / LoanTime + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment : ${monthlyPayment}`


}