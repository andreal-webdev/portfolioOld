const express = require ('express'); // in this line and the following, I am importing the path an express
const { url } = require('inspector');
const path = require ('path');
const app = express();
const port = process.env.Port || 5000; // This is seting up the port 8000 and any other port envieronment


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public'))); //this is the path to the public folder

app.get('/weather', async (req, res) => { // This is saying that when the landing page loads print the portfolio value to the html through ejs
    let ejs = require('ejs');
    let name = "The Cute Weather";
    let image = "assets/weather 2.JPG";
    let info = "The cute weather app is a delightful weather app that not only keeps you informed about the weather conditions \
    but also adds a touch of cuteness and personality to your daily forecast. The data was sourced from the OpenWeather API.\
    This app offers a unique and charming experience for users who want to stay up-to-date with the weather. \
    I created this project to learn how to use APIs in my Creative Coding class. ";
    let html = await ejs.renderFile(path.join(__dirname, 'views/portfolio.ejs'), {portfolioInfo: info, portfolioName: name, portfolioImage: image});
    res.send(html);    
});

app.get('/pacman', async (req, res) => { // This is saying that when the landing page loads print the portfolio value to the html through ejs
    let ejs = require('ejs');
    let name = "Pacman Game";
    let info = "I recreated this \"Pacman Game with No Ghosts\" for one of my Creative Coding assignments. This game was created using HTML canvas and JavaScript.\
    It is different from the original game since there are no ghosts to chase you. Instead, it focuses on the main goal of collecting dots within the maze. ";
    let image = "assets/pacman.JPG";
    let html = await ejs.renderFile(path.join(__dirname, 'views/portfolio.ejs'), {portfolioInfo: info, portfolioName: name, portfolioImage: image});
    res.send(html);    
});

app.get('/studio', async (req, res) => { // This is saying that when the landing page loads print the portfolio value to the html through ejs
    let ejs = require('ejs');
    let name = "Ballet Studio Website";
    let info = "This Ballet Studio Website is an elegantly designed, web-based platform created using HTML, CSS, and JavaScript. \
    This project serves as the online presence for a ballet studio, providing visitors with information about the studio's classes, instructors, schedules, and the art of ballet.\
    The website is designed to be visually appealing, easy to navigate, and responsive, ensuring an optimal viewing experience on various devices. ";
    let image = "assets/ballet.JPG";
    let html = await ejs.renderFile(path.join(__dirname, 'views/portfolio.ejs'), {portfolioInfo: info, portfolioName: name, portfolioImage: image});
    res.send(html);    
});

app.listen(port, () => { //this will start the specified server
    console.log(`App listening on port ${port}`);
});
