import React, { Component } from 'react'
import styles from './MessageArea.module.scss'
import CurrentMessage from '../CurrentMessage/CurrentMessage';
import ChatHistory from '../ChatHistory/ChatHistory';

export default class MessageArea extends Component {
    render() {
        return (
            <>
                <ChatHistory />
                <div className={styles.messageArea}>
                    <CurrentMessage />
                </div>
            </>
        )
    }
}
