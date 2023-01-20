const express = require('express');
const app = express();
const path = require('path');
const cookies = require('cookie-parser');
app.use(cookies());

const PORT = process.env.PORT || 5000;
const router = express.Router()

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

const session = require('express-session')
app.use(session({secret:'Mensaje Secreto', resave:false ,saveUninitialized:false}))

app.use(express.static('public')); // Recursos estaticos
app.set("view engine", "ejs")

app.use(userLoggedMiddleware);

// esto es para put y delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
//para que el formulario llegue en formato json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT,() => console.log("Server listening on port  " + PORT));

const rutasMain = require('./routes/mainRoutes');
app.use('/', rutasMain)

const rutasProducts = require('./routes/productsRouter');
app.use('/products', rutasProducts)

const rutasUsers = require('./routes/usersRouter');
app.use('/users',rutasUsers)

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})





  

  
  




