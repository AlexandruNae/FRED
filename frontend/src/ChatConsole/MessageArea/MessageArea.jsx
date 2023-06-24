import React, { Component } from 'react'
import styles from './MessageArea.module.scss'
import CurrentMessage from '../CurrentMessage/CurrentMessage';

export default class MessageArea extends Component {
    render() {
        return (
            <div className={styles.messageArea}>
                <CurrentMessage />
            </div>
        )
    }
}
