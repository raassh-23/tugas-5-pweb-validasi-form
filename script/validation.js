function validateForm(e) {
    e.preventDefault();

    if(!validateName()
    || !validateNrp()
    || !validateEmail()
    || !validateDomisili()
    || !validateDepartemen()
    || !validateStatus()) {
        return false;
    }

    const success = document.getElementById("success");
    success.innerHTML = "Data telah berhasil disubmit";
}

function alertAndFocus(warning, element) {
    alert(warning);
    element.focus();
}

function validateName() {
    const name = document.getElementById("name");

    if(name.value == "") {
        alertAndFocus("Nama harus diisi", name);
        return false
    } else {
        return true;
    }
}

function validateNrp() {
    const nrp = document.getElementById("nrp");

    if(nrp.value == "") {
        alertAndFocus("NRP harus diisi", nrp);
        return false;
    } else if(isNaN(nrp.value)) {
        alertAndFocus("NRP harus berupa angka", nrp);
        return false;
    } else if(nrp.value.length != 14) {
        alertAndFocus("NRP harus terdiri dari 14 digit", nrp);
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email");

    if(email.value == "") {
        alertAndFocus("Email harus diisi", email);
        return false;
    } else if(!email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        // regex from https://stackoverflow.com/questions/42965541/email-validation-javascript
        alertAndFocus("Email tidak valid", email);
        return false;
    } else {
        return true;
    }
}

function validateDomisili() {
    const domisili = document.getElementById("domisili");

    if(domisili.value == "") {
        alertAndFocus("Domisili harus diisi", domisili);
        return false
    } else {
        return true;
    }
}

function validateDepartemen() {
    const departemen = document.getElementById("departemen");

    if(departemen.value == 0) {
        alertAndFocus("Departemen harus dipilih", departemen);
        return false
    } else {
        return true;
    }
}

function validateStatus() {
    const status = [...document.getElementsByName("status")];

    if (status.some((val => val.checked))) {
        return true;
    } else {
        alertAndFocus("Status vaksin harus dipilih", status[0]);
        return false;
    }
}