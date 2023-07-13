import { actions } from "./actionTypes";

export const changeUsername = (value) => ({
    type: actions.changeUsername,
    payload: value
})

export const changeIsPromptSubmitted = (value) => ({
    type: actions.changeIsPromptSubmitted,
    payload: value
})

export const changeCurrentPrompt = (value) => ({
    type: actions.changeCurrentPrompt,
    payload: value
})

export const addMessageToHistory = (userType, message, messageNumber) => ({
    type: actions.addMessageToHistory,
    userType: userType,
    message: message,
    messageNumber: messageNumber
})
