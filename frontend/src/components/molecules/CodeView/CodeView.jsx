import React, { Component } from 'react'
import styles from './CodeView.module.scss'
import OpenTabs from '../../atoms/OpenTabs/OpenTabs'
import OpenCode from '../../atoms/OpenCode/OpenCode'

export default class CodeView extends Component {

    render() {
        return (
            <>
                <div className={styles.codeView}>
                    <OpenTabs />
                    <OpenCode />
                </div>
            </>
        )
    }
}
