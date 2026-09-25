let password = prompt("Enter your password: ");

const validatePassword = (psw) => {
    if(psw.length < 8){
        console.log("Password must be at least 8 characters long.");
        return false;
    }
    if(!/[A-Z]/.test(psw)){
        console.log("Password must contain at least one uppercase letter.");
        return false;
    }
    if(!/[a-z]/.test(psw)){
        console.log("Password must contain at least one lowercase letter.");
        return false;
    }
    if(!/[0-9]/.test(psw)){
        console.log("Password must contain at least one number.");
        return false;
    }
    if(psw.includes(" ")){
        console.log("Password must not contain spaces.");
        return false;
    }
    else{
        console.log("Password is valid.");
        return true;
    }

}

validatePassword(password);