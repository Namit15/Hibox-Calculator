function calculate() {
    var amount = parseFloat(document.getElementById("amount").value);
    var r1 = 2 / 100;    // 2%
    var r2 = 2.1 / 100;  // 2.1%
    var t = parseFloat(document.getElementById("days").value);
    var final_t = t / 2; // Converting days into years (assuming 365 days per year)
    var investmentType = document.getElementById("investment-type").value;
    var rate;

    // Determine the interest rate based on the investment type
    if (investmentType === "r1") {
        rate = r1;
    } else if (investmentType === "r2") {
        rate = r2;
    } else {
        rate = 0;
    }

    // Calculate the final amount, profit, and percentage increase
    var finalAmount = amount * Math.pow((1 + rate), final_t);
    var profit = finalAmount - amount;
    var percentageIncrease = (profit / amount) * 100;

    // Display the results
    document.getElementById("calculated-amount").innerText = "The calculated amount is: " + finalAmount.toFixed(2);
    document.getElementById("profit").innerText = "The profit gained is: " + profit.toFixed(2);
    document.getElementById("percentage-increase").innerText = "The percentage increase is: " + percentageIncrease.toFixed(2) + "%";
    document.getElementById("result").style.display = "block";
}
