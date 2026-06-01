/*********f*********
Author: Jordan Lerat
Date: 2025-11-25
Version: 1.0
*******************/

function validate(e) {
    hideAllErrors();

    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }
    return true;
}

function resetForm(e) {
    if (confirm('Clear form?')) {
        hideAllErrors();
        document.getElementById("name").focus();
        return true;
    }
    e.preventDefault();
    return false;
}

function formHasErrors() {
    let errorFlag = false;

    let name = document.getElementById("name");
    if (!formFieldHasInput(name)) {
        document.getElementById("name_error").style.display = "block";
        if (!errorFlag) {
            name.focus();
            name.select();
        }
        errorFlag = true;
    }

    let phone = document.getElementById("phone");
    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("phone_error").style.display = "block";
        if (!errorFlag) {
            phone.focus();
            phone.select();
        }
        errorFlag = true;
    }

    let email = document.getElementById("email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById("email_error").style.display = "block";
        if (!errorFlag) {
            email.focus();
            email.select();
        }
        errorFlag = true;
    }

    let comments = document.getElementById("comments");
    if (!formFieldHasInput(comments)) {
        document.getElementById("comments_error").style.display = "block";
        if (!errorFlag) {
            comments.focus();
            comments.select();
        }
        errorFlag = true;
    }

    return errorFlag;
}

function hideAllErrors() {
    let errorFields = document.getElementsByClassName("error");
    for (let i = 0; i < errorFields.length; i++) {
        errorFields[i].style.display = "none";
    }
}

function formFieldHasInput(field) {
    return field.value != null && field.value.trim() !== "";
}

function load() {
    let form = document.getElementById("contact_form");
    form.addEventListener("submit", validate);
    form.addEventListener("reset", resetForm);
}

document.addEventListener("DOMContentLoaded", load);