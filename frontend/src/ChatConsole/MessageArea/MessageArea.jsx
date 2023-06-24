import React, { Component } from 'react'
import styles from './MessageArea.module.scss'
import CurrentMessage from './CurrentMessage/CurrentMessage';
import { AppProvider } from '../../AppContext';
import ChatHistory from './ChatHistory/ChatHistory';

export default class MessageArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateHistory: false
        };
    }

    toggleUpdateHistory = () => {
        this.setState({updateHistory: !this.state.updateHistory});
    }

    render() {
        return (
            <AppProvider>
                <ChatHistory 
                    updateHistory={this.state.updateHistory}
                    toggleUpdateHistory={this.toggleUpdateHistory}/>
                <div className={styles.messageArea}>
                    <CurrentMessage 
                        updateHistory={this.state.updateHistory}
                        toggleUpdateHistory={this.toggleUpdateHistory}/>
                </div>
            </AppProvider>
        )
    }
}
