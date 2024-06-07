function calculate() {
    var amount = parseFloat(document.getElementById("amount").value);
    var r = 88.2 / 100;
    var t = parseFloat(document.getElementById("days").value);
    t2 = t/84

    var a = amount * Math.pow((1 + r), t);
    var profit = a - amount;
    var percentageIncrease = (profit / amount) * 100;

    document.getElementById("calculated-amount").innerText = "The calculated amount is: " + a.toFixed(2);
    document.getElementById("profit").innerText = "The profit gained is: " + profit.toFixed(2);
    document.getElementById("percentage-increase").innerText = "The percentage increase is: " + percentageIncrease.toFixed(2) + "%";
    document.getElementById("result").style.display = "block";
}
