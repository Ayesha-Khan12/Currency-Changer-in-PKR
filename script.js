function convertCurrency() {
    var dollars = parseFloat(prompt("Enter the amount in US Dollars:"));
    var riyals = parseFloat(prompt("Enter the amount in Saudi Riyals:"));

    if (isNaN(dollars) || isNaN(riyals) || dollars < 0 || riyals < 0) {
      alert("Please enter valid positive numbers for both currencies!");
      return;
    }

    var dollarToPKR = 104.80;
    var riyalToPKR = 28;

    var totalPKR = (dollars * dollarToPKR) + (riyals * riyalToPKR);

    var result = `
      <p>US Dollars: <strong>${dollars}</strong></p>
      <p>Saudi Riyals: <strong>${riyals}</strong></p>
      <p>Total Currency in PKR: <strong>${totalPKR.toFixed(2)}</strong></p>
    `;
    document.getElementById("result").innerHTML = result;
  }

  function reset() {
    document.getElementById("result").innerHTML = "";
  }