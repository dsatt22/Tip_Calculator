// Calculate Tip
function calculateTip(){
    var price = document.getElementById("price").value;
    var options = document.getElementById("options").value;
    var numPeople = document.getElementById("numPeople").value;

    //validate input
    if (price === "" || options == 0){
        alert("Please enter values");
        return;
    }

// Check to see if this input is empty or <= 1
if (numPeople === "" || numPeople <= 1){
    numPeople = 1;
    document.getElementById("each").style.display = "none"
}
else {
    document.getElementById("each").style.display = "block";
}

// Calculate the tip
var tipTotal = (price * options) / numPeople;

// Round to 2 decimal places
tipTotal = Math.round(tipTotal * 100) / 100;

// Next line allows us to always have 2 digits after decimal point
tipTotal = tipTotal.toFixed(2);

// Display the tip
document.getElementById("tipTotal").style.display = "block";
document.getElementById("tip").innerHTML = tipTotal;

}

// Hide the tip amount on load
document.getElementById("tipTotal").style.display = "none";
document.getElementById("each").style.display = "none";

// Click to call the function
document.getElementById("calculate").onclick = function(){
    calculateTip();
};