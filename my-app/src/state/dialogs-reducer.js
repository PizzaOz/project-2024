const SEND_NEW_MESSAGE_BODY = 'SEND-NEW-MESSAGE-BODY';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const initialState = {
    dialog: [
        { id: '1', name: 'Misha' },
        { id: '2', name: 'Vlada' },
        { id: '3', name: 'Dima' },
        { id: '4', name: 'Sergey' },
        { id: '5', name: 'Vladimer' },
    ],
    message: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How is it ? ' },
        { id: '3', message: 'Yo' },
        { id: '4', message: 'Boo' },
        { id: '5', message: 'Privet' },
    ],
    newMessageBody: ''
}


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE_BODY:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({ id: '6', message: body });
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.messageBody;
            return state
        default:
            return state;
    }
}

export const sendNewMessageBodyActionCreator = () => ({type: SEND_NEW_MESSAGE_BODY});
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, messageBody: text });

export default dialogReducer