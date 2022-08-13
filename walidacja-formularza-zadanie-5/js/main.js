let form = document.getElementById('newsletter');
let nameLastname = document.getElementById('nameLastname');
let email = document.getElementById('email');
let allAgreements = document.getElementById('all-agreements');
let agreement1 = document.getElementById('agreement-1');
let agreement2 = document.getElementById('agreement-2');
let list = form.firstElementChild;

const validate = (event) => {
    list.innerText = '';
    event.preventDefault();
    if (nameLastname.value.trim() === "") {
        let newIssue = document.createElement('li');
        newIssue.innerText = 'Przed wysłaniem wpisz imię i nazwisko!';
        list.appendChild(newIssue);
    }
    
    if (email.value.trim() === "") {
        let newIssue = document.createElement('li');
        newIssue.innerText = 'Przed wysłaniem wpisz adres email!';
        list.appendChild(newIssue);
    }

    if (email.value.trim() !== "") {
        if (!email.value.includes('@')) {
            let newIssue = document.createElement('li');
            newIssue.innerText = 'Adres email nie posiada @ - wpisz poprawny format email!';
            list.appendChild(newIssue);
        }
    }
    
    if (!agreement1.checked) {
        let newIssue = document.createElement('li');
        newIssue.innerText = 'Zaznacz zgody!';
        list.appendChild(newIssue);
    }
}

const allAgreementsCheck = (event) => {
    if (allAgreements.checked) {
        agreement1.checked = true;
        agreement2.checked = true;
        agreement1.disabled = true;
        agreement2.disabled = true;
    }
    else if (!allAgreements.checked) {
        agreement1.checked = false;
        agreement2.checked = false;
        agreement1.disabled = false;
        agreement2.disabled = false;
    }
}

form.addEventListener('submit', validate);
allAgreements.addEventListener('change', allAgreementsCheck);