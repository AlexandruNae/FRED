import React, { Component, Fragment } from 'react'
import styles from './ChatConsole.module.scss'
import MessageArea from './MessageArea/MessageArea'
import { AppProvider } from '../AppContext'

export default class ChatConsole extends Component {
    render() {
        return (
            <AppProvider>
                <div className={styles.console}>
                    <div className={styles.title}>
                        Chat Console
                    </div>
                    <MessageArea />
                </div>
            </AppProvider>
        )
    }
}
