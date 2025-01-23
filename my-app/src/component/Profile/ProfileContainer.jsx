import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getPostThunkCreator} from "../../state/profile-reducer.js";
import { useLocation, useNavigate, useParams,} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRederect.js";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getPostThunkCreator(userId)
}
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {getPostThunkCreator}),
  withRouter, withAuthRedirect)(ProfileContainer)

