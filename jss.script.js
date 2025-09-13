// Fetch all users and show in console + page
fetch("https://jsonplaceholder.typecode.com/users") 
.then(res => res.json())
.then(users => {
    let output = "<h3>user list </h3><u1>";
    users.forEach(user => {
        output +=`,li>${user.name} (${user.email})</li>`;
  });
  output += "</ul>";
    document.body.innerHTML +=output;


