class WhatShouldIPlay extends React.Component {
    render() {
        const title = 'What Should I Play?'
        const subTitle = 'Put your life in the hands of a computer'
        const options = ['one', 'two', 'three', 'four']

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlepick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Play?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Add Option</p>
            </div>
        )
    }
}

ReactDOM.render(<WhatShouldIPlay />, document.getElementById('app'))