// make one div in html and user div id users-container 
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch (error => console.log(error)) 

function displayuser () {
    const useNames = user.map(user => user.useNames);
    const ul = document.getElementById("users-container");
    
    for(let i = 0; i < useNames.length; i++){
        const userName = userName[i];
        const li = document.createElement("li");
        li.innerText = userName;
        ul.appendChild(li);
    }
}