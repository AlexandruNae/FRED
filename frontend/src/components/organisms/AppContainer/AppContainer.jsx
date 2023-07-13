import React, { Component } from 'react'
import styles from './AppContainer.module.scss'
import SideBar from '../../molecules/SideBar/SideBar';
import CodeView from '../../molecules/CodeView/CodeView';
import ChatConsole from '../../molecules/ChatConsole/ChatConsole';

export default class AppContainer extends Component {

    render() {
        console.clear();
        
        return (
            <>
                <div className={styles.appContainer}>
                    <SideBar />
                    <div className={styles.codeAndChat}>
                        <CodeView />
                        <ChatConsole />
                    </div>
                </div>
            </>
        )
    }
}

