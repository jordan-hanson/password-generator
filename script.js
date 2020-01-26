var character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '~!@#$%^&*()<>?';

var inputVal = document.getElementById('inputVal');
var numCheck = document.getElementById('numCheck');
var symCheck = document.getElementById('symCheck');
var submitBtn = document.getElementById('submitBtn');
var password = document.getElementById('password')

function password(length, characters) {
    var pswrd = '';
    for (var i = 0; i < length; i++) {
        pswrd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pswrd;
}

submitBtn.addEventListener("click", function () {
    var characters = character;
    (numCheck.checked) ? characters += number : '';
    (symCheck.checked) ? characters += symbol : '';
    password.value = (inputVal.value, characters);
});


console.log(password)