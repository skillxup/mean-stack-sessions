function printError(elemId, errMsg) {
    document.getElementById(elemId).innerHTML = errMsg;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;

    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    
    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if(name == "") {
        printError("nameErr", "please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "invalid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if((nameErr || emailErr ) === true) {
        return false;
    } else {
        var dataPreview = `
            You've entered the following details: \n 
            Name: ${name}
        `;
        alert(dataPreview);
    }
}