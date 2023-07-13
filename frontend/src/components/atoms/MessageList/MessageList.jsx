import React, { Component } from 'react'
import styles from './MessageList.module.scss'
import { connect } from 'react-redux'

class MessageList extends Component {

    /**
     * Returns the correct color according to the index of the message
     * @param {*} index the order number of the message
     * @returns 
     */
    getUsernameStyle = (index) => {
        return index % 2 === 1 ?
            styles.userMessage :
            styles.systemMessage
    }

    /**
     * Returns a string with either the user name or the message
     * @param {*} element needed to access the object
     * @param {*} index given needed index, either for username or message
     * @returns 
     */
    getArrayString = (element, index) => {
        return this.props.chatHistory[element][index];
    }

    render() {
        return this.props.chatHistory.map((element, index) =>
            <div className={styles.message} key={"chatHistoryMessage" + index}>
                <div className={this.getUsernameStyle(index)}>{this.getArrayString(index, 0)}</div>
                <div>{this.getArrayString(index, 1)}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        chatHistory: state.chatHistory,
    };
};

export default connect(mapStateToProps)(MessageList);
