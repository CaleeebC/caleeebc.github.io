let initialReturn = document.getElementById("initialReturn");
let finalReturn = document.getElementById("finalReturn");
let button = document.getElementById("button");
let g;
let n;
let secretNum;


function exp(num, power, mod) {
    return ((num**power)%mod);
}

function initialMod() {
    g = document.getElementById("g").value;
    n = document.getElementById("n").value;
    secretNum = document.getElementById("secretNum").value;
    let returnNum = exp(g, secretNum, n);
    if (isNaN(returnNum)) {
        initialReturn.innerHTML = "<p style='color: red;' >One of the Inputs is Not a Number<p></p>";
    } else {
        initialReturn.innerHTML = "<p> Initial Return: " + returnNum + "</p> <br>" + " <form> <label>Number Received:</label> <input type='text' id='finalInput'> </form>";
        button.innerHTML = "<button onclick='finalMod()'>Calculate Key</button>"
    }
}

function finalMod() {
    let finalNum = document.getElementById("finalInput").value;
    let returnNum = exp(finalNum, secretNum, n);
    if (isNaN(returnNum)) {
        finalReturn.innerHTML = "<p style='color: red;' >One of the Inputs is Not a Number<p></p>";
    } else {
        finalReturn.innerHTML = "<p> Key: " + returnNum + "</p>"
    }
}