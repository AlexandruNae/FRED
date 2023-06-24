import React, { Component, Fragment } from 'react'
import styles from './CurrentMessage.module.scss'

export default class CurrentMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: '',
            isSubmitted: false
        };
    }

    handleChange = (event) => {
        this.setState({ prompt: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A message was submitted: ' + this.state.prompt);
        event.preventDefault();

        this.setState({ 
            prompt: '',
            isSubmitted: true 
        });

        setTimeout(() => {
            this.setState({ 
                isSubmitted: false 
            }); 
        }, 2000);

        //TODO : add load animation instead of the form
    }

    render() {
        return (
            <Fragment>
                {!this.state.isSubmitted ?
                    <form onSubmit={this.handleSubmit}>
                        <label className={styles.userInput}>
                            <div className={styles.username}>User: </div>
                            <input className={styles.textArea} onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" hidden />
                    </form>
                    
                    :

                    <div>Loading</div>
                }
            </Fragment>
        )
    }
}
