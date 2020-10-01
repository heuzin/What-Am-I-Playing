class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.onToggle = this.onToggle.bind(this)
        this.state = {
            visibility: false
        }
    }
    onToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggle}>{!this.state.visibility ? 'Show details' : 'Hide details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')

// let visibility = false

// const ontoggle= () => {
//     visibility = !visibility
//     renderApp()
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={ontoggle}>{!visibility ? 'Show details' : 'Hide details'}</button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }


// renderApp()