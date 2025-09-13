console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));
 fetch("https://jsonplaceholder.typicode.com/posts/2")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))   
    .catch(error => console.error("error:",error));
