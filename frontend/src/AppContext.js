import React, { Component } from 'react'

const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Alex',

            currentPrompt: '',
            isPromptSubmitted: false,

            mockHistory: {
                messages: {
                    message0: ["Fred", "Hi! How can I help?"]
                }
            }

        }
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                ...this
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContext;