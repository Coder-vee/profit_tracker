
function calculateCapitalAndProfit() {
  var capital = parseFloat(document.getElementById("capital").value);
  var days = parseInt(document.getElementById("days").value);
  var totalCapital = capital;
  var totalProfit = 0;

  for (var i = 0; i < days; i++) {
    var dailyProfit = totalCapital * 0.20;
    totalCapital += dailyProfit;
    totalProfit += dailyProfit;
  }

  document.getElementById("result").innerHTML = "Total capital after " + days + " days: $" + totalCapital.toFixed(2) + "<br>Total profit after " + days + " days: $" + totalProfit.toFixed(2);
}