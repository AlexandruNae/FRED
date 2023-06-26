import React, { Component } from 'react'
import styles from './OpenTabs.module.scss'
import AppContext, { AppProvider } from '../../AppContext';

export default class OpenTabs extends Component {
    static contextType = AppContext;

    render() {
        return (
            <AppProvider>
                <div className={styles.tabsList}>
                    <div className={`${styles.tab} ${styles.activeTab}`}>
                        <div>PlaceholderTab.jsx</div>
                        <div className={`${styles.closeTab} ${styles.showIfActive}`}/>
                    </div>

                    <div className={`${styles.tab}`}>
                        <div>InactiveTab.jsx</div>
                        <div className={`${styles.closeTab}`}/>
                    </div>

                    <div className={`${styles.tab}`}>
                        <div>MockTab.jsx</div>
                        <div className={`${styles.closeTab}`}/>
                    </div>
                </div>
            </AppProvider>
        )
    }
}
