document.getElementById("portfolioForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Get user input values
    let stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
    let shares = parseInt(document.getElementById("shares").value);
    let initialPrice = parseFloat(document.getElementById("initialPrice").value);
  
    // Simulate current stock price (You can replace this with real-time API in future)
    let currentPrice = simulateStockPrice(stockSymbol);
  
    if (isNaN(shares) || isNaN(initialPrice) || currentPrice === null) {
      alert("Please enter valid data.");
      return;
    }
  
    // Calculate the loss
    let totalInitialValue = shares * initialPrice;
    let totalCurrentValue = shares * currentPrice;
    let loss = totalInitialValue - totalCurrentValue;
  
    // Calculate the percentage loss
  let lossPercentage = (loss / totalInitialValue) * 100;

    // Show result
    let resultDiv = document.getElementById("result");
    if (loss > 0) {
      resultDiv.innerHTML = `Potential Loss: ₹${loss.toFixed(2)} (${lossPercentage.toFixed(2)}%)`;

      // Trigger alert if loss exceeds 10%
    if (lossPercentage >= 10) {
      alert(`Alert: Your portfolio has experienced a loss of ${lossPercentage.toFixed(2)}%!`);
    }

      resultDiv.style.display = "block";
    } else {
      resultDiv.innerHTML = "Your portfolio is not experiencing any loss.";
      resultDiv.style.display = "block";
    }
  });
  
  // Simulate stock price (Replace this with real-time API in a backend)
  function simulateStockPrice(symbol) {
    const simulatedPrices = {
      AAPL: 148.00,
      TSLA: 300.00,
      AMZN: 3450.00,
      MSFT: 280.00
    };
  
    return simulatedPrices[symbol] || null; // Return null for unknown symbols
  }
  