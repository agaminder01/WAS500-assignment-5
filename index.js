const mongoose = require("mongoose");
    express = require("express");
    app = express();
    model = require("./Models/model");
    controller = require("./Controllers/controller");
    layout = require("express-ejs-layouts")

app.set("view engine", "ejs")
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname))
app.use(
    express.urlencoded({
      extended: false,
    })
);
app.use(layout)
app.set("layout", "layout")
app.use(express.json())
require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useUnifiedTopology: true})

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.get('/books', controller.getAllBooks, (req, res, next) => {
    res.render("books", { books: req.data })
})
app.get('/book1', controller.Book1, (req, res, next) => {
    res.render("book1", { books: req.data })
})
app.get('/book2', controller.Book2, (req, res, next) => {
    res.render("book2", { books: req.data })
})
app.get('/book3', controller.Book3, (req, res, next) => {
    res.render("book3", { books: req.data })
})

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/home', (req, res) => {
    res.render("index")
})
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(app.get("port"), () => {
    console.log(`Server running @ http://localhost:${app.get("port")}`);
});

