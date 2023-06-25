import React, { Component } from 'react'

const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "Alex",
            age: 25,
            superpower: "Flight",
            color: "Blue",
            speed: "150kph",

            isModalOpen: false,
        }
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
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