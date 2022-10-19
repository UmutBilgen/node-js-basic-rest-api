const express = require("express");
const app = express();
 
app.use((request, response, next) => {
     if (request.url == "/hello")
     {
        var message = "Yeni bir istek geldi.";
        if(request.method == "POST")
        {
            message = "Post iseği için istek gönderildi";
        }
        console.log(message)
        next();
     }
});
 
app.get("/hello", (request, response) => {
    response.send("Merhaba GET isteği attiniz");
    }).post("/hello", (request, response) => {
    response.send("Merhaba, POST istegi attiniz");
    }).put("/hello", (request, response) => {
    response.send("Merhaba, PUT istegi attiniz");
    }).delete("/hello", (request, response) => {
    response.send("Merhaba, DELETE istegi attiniz");
    }).listen(5000, () => console.log("LOCALHOST:5000 Dinleniyor"));


