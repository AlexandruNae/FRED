import React, { Component } from 'react'
import styles from './ConsoleLoader.module.scss';

export default class ConsoleLoader extends Component {
  render() {
    return (
        <div className={styles.loadingAnimation}><div></div><div></div><div></div></div>
    )
  }
}
