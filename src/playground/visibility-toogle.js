const appRoot = document.getElementById('app')

let visibility = false

const ontoggle= () => {
    visibility = !visibility
    renderApp()
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ontoggle}>{!visibility ? 'Show details' : 'Hide details'}</button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot)
}


renderApp()