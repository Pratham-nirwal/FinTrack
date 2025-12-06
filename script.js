
var button = document.querySelector('.btn');
button.onmouseover = function() {
    this.style.backgroundColor = '#2e7d32';
}
button.onmouseout = function() {
    this.style.backgroundColor = '#4caf50';
}

function showWelcome() {
    alert('Welcome to Fintrack! Let us help you grow your wealth.');
}

function updatePrices() {
    var nifty = document.getElementById('nifty');
    var sensex = document.getElementById('sensex');
    var banknifty = document.getElementById('banknifty');
    var gold = document.getElementById('gold');
    
    var newNifty = (19745 + Math.random() * 200).toFixed(2);
    nifty.innerHTML = newNifty;
    
    
    var newSensex = (65982 + Math.random() * 500).toFixed(2);
    sensex.innerHTML = newSensex;
    
    
    var newBankNifty = (44235 + Math.random() * 300).toFixed(2);
    banknifty.innerHTML = newBankNifty;
    
    
    var newGold = (62450 + Math.random() * 150).toFixed(2);
    gold.innerHTML = newGold;
}

setInterval(updatePrices, 3000);
