const express = require("express");

const app = express();

app.use(express.json());


app.get("/hello", (request,response) => {
    response.send("Hello world!");
});

const users = [];

app.post('/user', (request, response) => {
    users.push(request.body);
    response.send("Usuario agregado exitosamente");
});

app.get("/users", (request, response) =>{
    response.send(users);
});

app.delete("/user/:id", (request, response) => {
    const id =  request.params.id;
    const user = users.find((user) => user.id == id);
    users.splice(users.indexOf(user), 1);
    response.send("Usario eliminado");
});

app.put("/user/:id", (request, response) =>{
    const id = request.params.id;
    const user = users.find((user) => user.id == id);
    const newPassword = request.body.newPassword;
    

    user.pwd = newPassword;
    
    response.send("Usuario actualizado");
});

app.listen(3000, ()=> {
    console.log("Example of the port " + 3000);
});