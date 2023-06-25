import React, { Component } from 'react'
import styles from './Stats.module.scss'
import AppContext from '../Context/AppContext';

export default class Stats extends Component {
    constructor(props) {
        super(props)
    }

    getStatsStyle = () => {
        return styles.statsContainer;
    }

    static contextType = AppContext;

    render() {
        return (
            <div className={this.getStatsStyle()}>
                <div className={styles.stats}>Age: {this.context.age}</div>
                <div className={styles.stats}>Superpower: {this.context.superpower}</div>
                <div className={styles.stats}>Color: {this.context.color}</div>
                <div className={styles.stats}>Speed: {this.context.speed}</div>
            </div>
        )
    }
}
