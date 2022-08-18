let button = document.getElementById('data');

function getData() {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then(function (data) {
            let list = document.getElementById('data-list');
            let br = document.createElement('br');
            let userIdItem = document.createElement('li');
            let idItem = document.createElement('li');
            let titleItem = document.createElement('li');
            let bodyItem = document.createElement('li');

            userIdItem.innerText = `User Id: ${data.userId}`;
            idItem.innerText = `Post Id: ${data.id}`;
            titleItem.innerText = `Title: "${data.title}"`;
            bodyItem.innerText = `Body: "${data.body}"`;

            list.appendChild(userIdItem);
            list.appendChild(idItem);
            list.appendChild(titleItem);
            list.appendChild(bodyItem);
            list.appendChild(br);
        })
}

button.addEventListener('click', getData);