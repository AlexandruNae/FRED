import React, { Component } from 'react'
import styles from './ChatHistory.module.scss'
import { connect } from 'react-redux';
import ScrollToBottom from '../ScrollToBottom/ScrollToBottom';
import MessageList from '../MessageList/MessageList';

class ChatHistory extends Component {
    render() {
        return (
            <>
                {this.props.chatHistory &&
                    <div className={styles.chatHistory}>
                        <MessageList />
                        <ScrollToBottom />
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        chatHistory: state.chatHistory,
    };
};

export default connect(mapStateToProps)(ChatHistory);
