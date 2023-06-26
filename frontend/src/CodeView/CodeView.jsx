import React, { Component } from 'react'
import styles from './CodeView.module.scss'
import OpenTabs from './OpenTabs/OpenTabs'
import OpenCode from './OpenCode/OpenCode'
import AppContext, { AppProvider } from '../AppContext';

export default class CodeView extends Component {
    static contextType = AppContext;

    render() {
        return (
            <AppProvider>
                <div className={styles.codeView}>
                    <OpenTabs />
                    <OpenCode />
                </div>
            </AppProvider>
        )
    }
}
