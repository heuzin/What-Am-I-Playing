'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var ontoggle = function ontoggle() {
    visibility = !visibility;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: ontoggle },
            !visibility ? 'Show details' : 'Hide details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now see!'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
