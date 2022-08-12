let form = document.getElementById('form');

const submit = (event) => {
    event.preventDefault();
    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');
    console.log(`Imię: ${fname.value}`);
    console.log(`Nazwisko: ${lname.value}`);
    console.log("Submit method applied - submission not sent due to submission prevention.");
}

form.addEventListener('submit', submit);