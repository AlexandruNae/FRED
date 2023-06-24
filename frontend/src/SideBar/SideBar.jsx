import React, { Component } from 'react'
import styles from './SideBar.module.scss'

export default class SideBar extends Component {
    render() {
        return (
            <div className={styles.sideBar}>
                <div className={styles.title}>
                    File Explorer
                </div>
            </div>
        )
    }
}
