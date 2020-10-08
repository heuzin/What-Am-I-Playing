import React from 'react';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';

class WhatShouldIPlay extends React.Component {
    state = {
        options: []
    };
    handleDeletOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing
        };
    };
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        };
    };
    componentWillUnmount = () => {
        console.log('componentWillUnmount')
    };
    render() {
        const subTitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeletOptions={this.handleDeletOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    };
};

export default WhatShouldIPlay;