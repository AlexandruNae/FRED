import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { actions } from "./actions/actionTypes";
import StoreHelpers from "./helpers/StoreHelpers";
var thunkMiddleware = require("redux-thunk");

const appReducer = (
    state = {
        username: "Alex",
        currentPrompt: '',
        isPromptSubmitted: false,

        chatHistory: [ ["Fred", "Hi! How can I help?"] ],
    },
    action
) => {
    switch (action.type) {
        case (actions.changeUsername):
            return { 
                ...state, 
                username: action.payload 
            }

        case (actions.changeIsPromptSubmitted):
            return { 
                ...state, 
                isPromptSubmitted: action.payload 
            }

        case (actions.changeCurrentPrompt):
            return { 
                ...state, 
                currentPrompt: action.payload 
            }

        case (actions.addMessageToHistory):
            const username = StoreHelpers.getUsernameByType(action.userType, state.username);
            const message = action.message;
            
            console.log(username, message);

            return { 
                ...state, 
                chatHistory: [...state.chatHistory, [username, message]]
            }

        default:
            return state;
    }
};

const store = configureStore(
    { reducer: appReducer },
    applyMiddleware(thunkMiddleware)
);

export default store;
