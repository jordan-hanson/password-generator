//DOM RESULT
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numberEl = document.getElementById('number');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
    var textarea = document.createElement('textarea');
    var password = resultEl.innerText;

    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});



// Generate event : Listener
generate.addEventListener('click', () => {
    console.log('hey')

    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numberEl.checked;
    var hasSymbol = symbolsEl.checked;

    console.log(hasLower, hasNumber, hasSymbol, hasUpper);

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    var typesCount = lower + upper + number + symbol;

    var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );
    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    var finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]=;',./?"
    return symbols[Math.floor(Math.random() * symbols.length)];

}
// console.log(symbols());