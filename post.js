// make two input fileds and one btn in html page  first input filed  define id title then secound  input filed define id secound input bodyContent and define id to submit btn submit 

document.getElementById("submit").addEventListener("click", function () {
        const title = document.getElementById("title").value;
        const bodyContent = document.getElementById("bodyContent").value;
        const post = { title: title, body: bodyContent };
        nowPostToserver(post);
    })

function nowPostToserver() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            "Content-type": "application/JSON; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
}



