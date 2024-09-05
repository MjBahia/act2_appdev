const express = require('express');
const app = express();
const port = 7000;

// Set up the view engine
app.set('view engine', 'ejs');


//add kau ng routes

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/careers', (req, res) => {
    res.render('careers');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

// Handling POST request (for example, from a form submission)
app.post('/contact', (req, res) => {
    res.send('Form submitted!');
});





// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});