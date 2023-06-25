import React, { Component } from 'react'
import styles from './ModalContainer.module.scss'
import Stats from '../Stats/Stats'
import AppContext, { AppProvider } from '../Context/AppContext'

export default class ModalContainer extends Component {
    static contextType = AppContext;
    
    render() {
        return (
            <AppProvider>
                <div className={styles.modal}>
                    <div className={styles.title}>Hello, {this.context.userName}</div>

                    {this.context.isModalOpen &&
                        <Stats />
                    }

                </div>
            </AppProvider>
        )
    }
}
