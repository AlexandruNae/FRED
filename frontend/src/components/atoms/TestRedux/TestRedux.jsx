import React, { Component } from 'react'
import styles from './TestRedux.module.scss'
import { connect } from 'react-redux'
import { changeUsername } from '../../../store/actions/actionCreator'

class TestRedux extends Component {
    changeName = () => {
        this.props.dispatch(changeUsername("New Username"))
    }

    render() {
        return (
            <div className={styles.title} onClick={this.changeName}>{this.props.username}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
    };
};

export default connect(mapStateToProps)(TestRedux);
