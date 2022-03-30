let password = document.querySelector("#password");

let retypePassword = document.querySelector("#retype_password");

let submitBtn = document.querySelector("input[value = 'Verify']");

let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

submitBtn.addEventListener('click', () => {
    if (8 <= length(password) <= 20){
        alert("The length is lower than 8 or longer than 20")
    } 
    for (let i = 0; i < password.length; i++){
        if (!password.contains(password[i].toUpperCase())){
            alert("Need one uppercase letter");
        }
        if (!password.contains(password[i].toLowerCase())){
            alert("Need one lowercase letter");
        }
        if (!password.contains(Number.isInteger(password[i]))){
            alert("Need one number digit");
        }
        if (spChars.test(password)){
            alert("Need one number digit");
        }
        if (password[i] == ' '){
            alert("No space in password");
        }
    }

    if (password == retypePassword){
        alert("Different password");
    }
})