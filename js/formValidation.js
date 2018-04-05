function validateFormOnSubmit(contact) {
    reason = "";
    reason += validateName(contact.name);
    reason += validateEmail(contact.email);
    reason += validateMessage(contact.message);
    console.log(reason);
    if (reason.length > 0) {
        return false;
    } else {
        return false;
    }
}

// validate required fields
function validateName(name) {
    var error = "";

    if (name.value.length == 0) {
        name.style.background = '#e3d9d9';
        document.getElementById('name-error').innerHTML = "The required field has not been filled in";
        var error = "1";
    } else {
        name.style.background = 'White';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}

// validate email as required field and format
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
    var error = "";
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.background = '#e3d9d9';
        document.getElementById('email-error').innerHTML = "Please enter an email address.";
        var error = "2";
    } else if (!emailFilter.test(temail)) { //test email for illegal characters
        email.style.background = '#e3d9d9';
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        var error = "3";
    } else if (email.value.match(illegalChars)) {
        email.style.background = '#e3d9d9';
        var error = "4";
        document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
    } else {
        email.style.background = 'White';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

// validate message for required and format
function validateMessage(message) {
    var error = "";

    if (message.value.length == 0) {
        message.style.background = '#e3d9d9';
        document.getElementById('name-error').innerHTML = "The required field has not been filled in";
        var error = "1";
    } else {
        message.style.background = 'White';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}
