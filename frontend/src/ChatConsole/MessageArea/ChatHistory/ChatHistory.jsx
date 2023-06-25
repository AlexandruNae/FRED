import React, { Component } from 'react'
import AppContext, { AppProvider } from '../../../AppContext'
import styles from './ChatHistory.module.scss'

export default class ChatHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptSubmitted: false
        };
    }

    static contextType = AppContext;

    /**
     * Returns the correct color according to the index of the message
     * @param {*} index the order number of the message
     * @returns 
     */
    getUsernameStyle = (index) => {
        return index % 2 === 1 ?
            styles.userMessage
            : styles.systemMessage
    }

    /**
     * Returns a string with either the user name or the message
     * @param {*} element needed to access the object
     * @param {*} index given needed index, either for username or message
     * @returns 
     */
    getObjectString = (element, index) => {
        return this.context.mockHistory.messages[element][index];
    }

    /**
     * Keeps the scroll pinned to the bottom when new elements appear in the chat
     */
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    /**
     * Recalls the scroll method when messages are added
     */
    componentDidUpdate() {
        this.scrollToBottom();
    }

    /**
     * Gets the message history and renders the messages
     * @returns Messages retrieved from the message history
     */
    getChatHistory = () => {
        return Object.keys(this.context.mockHistory.messages).map((element, index) =>
            <div className={styles.message} key={index}>
                <div className={this.getUsernameStyle(index)}>{this.getObjectString(element, 0)}</div>
                <div>{this.getObjectString(element, 1)}</div>
            </div>
        ); 
    }

    render() {
        return (
            <AppProvider>
                {this.context.mockHistory.messages &&
                    <div className={styles.chatHistory}>
                        {this.getChatHistory()}
                        
                        {/* Dummy element that keeps the scroll on the bottom */}
                        <div style={{ float: "left", clear: "both" }}   
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                }
            </AppProvider>
        )
    }
} 
