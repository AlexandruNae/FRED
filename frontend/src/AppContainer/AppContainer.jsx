import React, { Component, Fragment } from 'react'
import styles from './AppContainer.module.scss'
import SideBar from '../SideBar/SideBar';
import CodeView from '../CodeView/CodeView';
import ChatConsole from '../ChatConsole/ChatConsole';
import AppContext, { AppProvider } from '../AppContext';

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    }

    static contextType = AppContext;

    render() {
        return (
            <AppProvider>
                <div className={styles.appContainer}>
                    <SideBar />
                    <div className={styles.codeAndChat}>
                        <CodeView />
                        <ChatConsole />
                    </div>
                </div>
            </AppProvider>
        )
    }
}

AppContainer.contextType = AppContext;
