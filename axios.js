let http = require('http');
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    console.log("Status code: ", res.status)
    const users = res.data
    users[1].name = "Triansyah17"
    users[1].username = "Triansyah.a17"
    users[1].email = "Triansyah.a17@gmail.com"
    console.log(users)

    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        for(user of users){
            res.write('<li>Get user with id: ' +user.id+ ', name: ' + user.name+ '</li>')
        }
        res.end();
    }).listen(8080)
})
.catch(err =>{
    console.log('Error: ', err.message)
})

console.log("Server running on port: http://localhost:8080")
