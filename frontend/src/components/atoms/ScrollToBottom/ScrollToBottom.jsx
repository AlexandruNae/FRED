import React, { Component } from 'react'
import { connect } from 'react-redux';

class ScrollToBottom extends Component {
    /**
     * Keeps the scroll pinned to the bottom when new elements appear in the chat
     */
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    /**
     * Recalls the scroll method when messages are added
     */
    componentDidUpdate() {
        this.scrollToBottom();
    }

    /* Dummy element that keeps the scroll on the bottom */
    render() {
        return (
            <div style={{ float: "left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chatHistory: state.chatHistory,
    };
};

export default connect(mapStateToProps)(ScrollToBottom);
