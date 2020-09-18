'use strict';

console.log('running');

// JSX = JavaScript XML
var app = {
    title: 'What Should I Play?',
    subtitle: 'Put your game in the hands of a computer',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? 'Here are your options' : 'No options'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
