import React, { Component } from 'react'
import styles from './OpenTabs.module.scss'

export default class OpenTabs extends Component {

    render() {
        return (
            <>
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
            </>
        )
    }
}
