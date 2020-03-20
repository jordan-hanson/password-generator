//Function to generate the password
function passwordGen(length = 15) {
    //Variables
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var symbols = '!@#$%^&*()<>?,./';
    var numbers = '0123456789';
    var all = lowerCase + upperCase + symbols + numbers;

    var password = '';
    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    return password;
};

//My onload function to generate the button when clicked.
window.onload = function () {
    var generateButton = document.querySelector('#submitBtn');
    generateButton.addEventListener('click', function () {
        var newLength = document.querySelector("#inputVal").value;
        document.querySelector('#password').value = passwordGen(parseInt(newLength));
    });
}

passwordGen();

//This is my clear out function to clear the input field
function clearBtn() {
    document.getElementById("password").value = "";
}

clearBtn();