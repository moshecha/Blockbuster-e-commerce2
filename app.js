const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

app.use(express.static('public')); // Recursos estaticos

app.listen(PORT,() => console.log("Server listening on port  " + PORT));

app.get("/", (req,res) => { 
    res.sendFile(path.resolve("./views/index.html"));
});

app.get("/carrito", (req,res) => {
    res.sendFile(path.resolve("./views/carrito1.html"));
});

app.get("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"));
});

app.get("/productDetail", (req,res) => {
    res.sendFile(path.resolve("./views/productDetail.html"));
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve("./views/login.html"));
});