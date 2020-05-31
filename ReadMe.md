# InvictaPress - GP Child Theme
A GeneratePress starter child theme using WP Gulp 2.0

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

What things you need to install the software and how to install them
* [Gulp JS](https://gulpjs.com/) - Auto compile SASS and JS
* [BrowserSync](https://browsersync.io/) - Auto reload browsers to test across multiple devices and browsers

### Deployment

* Run npx wpgulp within project directory
* Change variables on wpgulp.config.js to match project
```
projectURL: 'invictapress.test', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:8888.
// Translation options.
textDomain: 'invicta', // Your textdomain here.
translationFile: 'invicta.pot', // Name of the translation file.
translationDestination: './languages', // Where to save the translation files.
packageName: 'InvictaPress', // Package name.
bugReport: 'https://invicta.agency', // Where can users report bugs.
lastTranslator: 'Adam Butterworth <adam@invicta.agency>', // Last translator Email ID.
team: 'Dev Team <adam@invicta.agency>', // Team's Email ID.
```

### Adding CSS & JS

Using the starter theme

* Use by running ```npm start``` in your terminal
* CSS is added via /assets/css/
* Custom JS is added via /assets/js/custom/project.js'
* Adding vendor JS is done by just adding the js file to /assets/vendor you do not need to do anything else as gulp will automatically bundle any files added here

## Built With

* [Modaal](http://www.humaan.com/modaal/) - Easily create popup of any sort, including galleries
* [Parallax](https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27) - Parallax control different objects
* [Sticky Kit](http://leafo.net/sticky-kit/) - Used to make things stick in parent item on scroll
* [Sal](https://github.com/mciastek/sal) - Performance focused, lightweight scroll animation library

### Acknowledgments

* [GeneratePress](https://generatepress.com/) - The best lightweight theme on the market
* [WP Gulp](https://github.com/ahmadawais/WPGulp) - A great starter package for WordPress development with Gulp, Sass and BrowserSync
