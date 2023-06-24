import React, { Component, Fragment } from 'react'
import styles from './CurrentMessage.module.scss'
import AppContext, { AppProvider } from '../../../AppContext';
import ConsoleLoader from './ConsoleLoader/ConsoleLoader';

export default class CurrentMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptSubmitted: false
        };
    }

    static contextType = AppContext;

    /**
     * Adds a new user message to the list of already existing messages
     */
    addUserMessageToHistory = () => {
        const numberOfMessages = Object.keys(this.context.mockHistory.messages).length;
        this.context.mockHistory.messages["message" + numberOfMessages] = [];
        this.context.mockHistory.messages["message" + numberOfMessages][0] = this.context.username;
        this.context.mockHistory.messages["message" + numberOfMessages][1] = this.context.currentPrompt;
    }

    /**
     * Adds a new FRED message to the list of already existing messages
     */
    mockFredMessage = () => {
        const numberOfMessages = Object.keys(this.context.mockHistory.messages).length;
        this.context.mockHistory.messages["message" + numberOfMessages] = [];
        this.context.mockHistory.messages["message" + numberOfMessages][0] = "Fred";
        this.context.mockHistory.messages["message" + numberOfMessages][1] = "This is a mock message! We will get real ones soon!";
    }

    /**
     * Updates the prompt string after each keystroke
     * @param {*} event contains the updated string inside the form 
     */
    handleChange = (event) => {
        this.context.currentPrompt = event.target.value;
    }

    /**
     * Updates submitted state so that we can display the loader
     * @param {*} event we need to prevent the default behaviour so that the page does not refresh after submit 
     */
    handleSubmit = (event) => {
        this.addUserMessageToHistory();
        this.props.toggleUpdateHistory();
        event.preventDefault();

        this.context.isPromptSubmitted = true;
        this.setState({ promptSubmitted: true });
        
        setTimeout(() => {
            this.context.isPromptSubmitted = false;
            this.setState({ promptSubmitted: false });
            this.mockFredMessage();
            this.props.toggleUpdateHistory();
        }, 2000);       //TODO: Wait until we get the answer from ChatGPT

    }

    render() {
        return (
            <AppProvider>
                {!this.state.promptSubmitted ?
                    <form onSubmit={this.handleSubmit}>
                        <label className={styles.userInput}>
                            <div className={styles.username}>{this.context.username}: </div>
                            <input className={styles.textArea} onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" hidden />
                    </form>
                    
                    :

                    <ConsoleLoader/>
                }
            </AppProvider>
        )
    }
}
