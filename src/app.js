console.log('running')

// JSX = JavaScript XML
const app = {
    title: 'What Should I Play?',
    subtitle: 'Put your game in the hands of a computer',
    options: ['one', 'two']
}

const template =  (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : 'No options'}
    </div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)