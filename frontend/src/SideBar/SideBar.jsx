import React, { Component } from 'react'
import styles from './SideBar.module.scss'
import FileExplorer from './FileExplorer/FileExplorer'

export default class SideBar extends Component {
    render() {
        return (
            <div className={styles.sideBar}>
                <div className={styles.title}>
                    File Explorer
                </div>

                <FileExplorer/>
            </div>
        )
    }
}
