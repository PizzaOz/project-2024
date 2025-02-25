import { sendNewMessageBodyActionCreator } from "../../state/dialogs-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRederect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessageBody: (newMessageBody) => {
            dispatch(sendNewMessageBodyActionCreator(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)
