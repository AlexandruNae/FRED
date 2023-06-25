import React, { Component } from 'react'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import ModalContainer from '../ModalContainer/ModalContainer'
import AppContext, { AppProvider } from '../Context/AppContext'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    static contextType = AppContext;

    render() {
        return (
            <AppProvider>
                <ButtonContainer/>
                <ModalContainer />
            </AppProvider>
        )
    }
}

AppContainer.contextType = AppContext;
