import React, { Component } from 'react'
import styles from './ChatConsole.module.scss'
import MessageArea from '../../atoms/MessageArea/MessageArea'

export default class ChatConsole extends Component {
    render() {
        return (
            <>
                <div className={styles.console}>
                    <div className={styles.title}>
                        Chat Console
                    </div>
                    <MessageArea />
                </div>
            </>
        )
    }
}
