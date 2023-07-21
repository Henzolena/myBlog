const express = require('express');


const app = express();

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const portfolioRoute = require('./routes/portfolio');
const resumeRoute = require('./routes/resume');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(homeRoute);
app.use(aboutRoute);
app.use(contactRoute);
app.use(portfolioRoute);
app.use(resumeRoute);


app.listen(3000);