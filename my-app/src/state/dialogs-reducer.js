const SEND_NEW_MESSAGE_BODY = 'SEND-NEW-MESSAGE-BODY';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


const dialogReducer = (state, action) => {
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