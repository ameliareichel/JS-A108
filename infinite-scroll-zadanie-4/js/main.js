let preloader = document.getElementById('preloader');

function showPreloader() {
    preloader.style.display = 'block';
}

function hidePreloader() {
    preloader.style.display = 'none';
}

function getData() {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(response => response.json())
        .then((data) => {
            for (let dataElement of data) {
                let body = document.body;
                let userId = document.createElement('p');
                userId.innerHTML = `User ID: ${dataElement.id}`;
                let userName = document.createElement('p');
                userName.innerHTML = `User Name: ${dataElement.name}`;
                let userURL = document.createElement('p');
                userURL.innerHTML = `User URL: ${dataElement.website}</br>--------`;
                body.appendChild(userId);
                body.appendChild(userName);
                body.appendChild(userURL);
            }
            hidePreloader();
        })
        .catch((error) => {
            console.log(error);
        })
};

function scrollEndOfPage() {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        showPreloader();
        getData();
    }
}
window.addEventListener('scroll', scrollEndOfPage);