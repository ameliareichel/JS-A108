$(document).ready(function() {
    let button = $('#get-data');
    //Metoda $.get():
    button.click(function() {
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {
                let list = $('<ul></ul>');
                list.append($(`<li>User Id: ${data.userId}</li>`));
                list.append($(`<li>Id: ${data.id}</li>`));
                list.append($(`<li>Title: "${data.title}"</li>`));
                list.append($(`<li>Body content: "${data.body}"</li>`));
                $('body').append(list);
            })
            .fail(function(error) {
                console.error(error);
            })
    }); 

    //Metoda $.getJSON():
    // button.click(function() {
    //     $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    //         .done(function(data) {
    //             let list = $('<ul></ul>');
    //             list.append($(`<li>User Id: ${data.userId}</li>`));
    //             list.append($(`<li>Id: ${data.id}</li>`));
    //             list.append($(`<li>Title: "${data.title}"</li>`));
    //             list.append($(`<li>Body content: "${data.body}"</li>`));
    //             $('body').append(list);
    //         })
    //         .fail(function(error) {
    //             console.error(error);
    //         })
    // }); 
});