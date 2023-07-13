import React, { Component } from 'react'
import styles from './CurrentMessage.module.scss'
import ConsoleLoader from '../ConsoleLoader/ConsoleLoader';
import { connect } from 'react-redux';
import { addMessageToHistory, changeCurrentPrompt, changeIsPromptSubmitted } from '../../../store/actions/actionCreator';
import { messageUserType } from '../../../constants/chatHistoryConstants'

class CurrentMessage extends Component {

    /**
     * @returns the number of messages in the chat history
     */
    getNumberOfMessages = () => {
        return this.props.chatHistory.length;
    }

    /**
     * Adds a new user message to the list of already existing messages
     */
    addUserMessageToHistory = () => {
        const numberOfMessages = this.getNumberOfMessages();
        this.props.dispatch(addMessageToHistory(messageUserType.user, this.props.currentPrompt, numberOfMessages))
    }

    /**
     * Adds a new FRED message to the list of already existing messages
     */
    addFredMessageToHistory = () => {
        const numberOfMessages = this.getNumberOfMessages();
        this.props.dispatch(addMessageToHistory(messageUserType.fred, "This is a mock message! We will get real ones soon!", numberOfMessages))
    }

    /**
     * Updates the prompt string after each keystroke
     * @param event contains the updated string inside the form 
     */
    handleChange = (event) => {
        this.props.dispatch(changeCurrentPrompt(event.target.value))
    }

    /**
     * Updates submitted state so that we can display the loader
     * @param event we need to prevent the default behaviour so that the page does not refresh after submit 
     */
    handleSubmit = (event) => {
        this.addUserMessageToHistory();
        event.preventDefault();

        this.props.dispatch(changeIsPromptSubmitted(true));

        setTimeout(() => {
            this.props.dispatch(changeIsPromptSubmitted(false));

            this.addFredMessageToHistory();
        }, 900);       //TODO: Wait until we get the answer from ChatGPT

    }

    render() {
        return (
            <>
                {!this.props.isPromptSubmitted ?

                    <form onSubmit={this.handleSubmit}>
                        <label className={styles.userInput}>
                            <div className={styles.username}>{this.props.username}: </div>
                            <input className={styles.textArea} onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" hidden />
                    </form>

                    :

                    <ConsoleLoader />
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        isPromptSubmitted: state.isPromptSubmitted,
        currentPrompt: state.currentPrompt,
        chatHistory: state.chatHistory,
    };
};

export default connect(mapStateToProps)(CurrentMessage);
