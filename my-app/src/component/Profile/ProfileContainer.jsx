import React from "react";

import Profile from "./Profile.jsx";

import { connect } from "react-redux";
import { getPostThunkCreator} from "../../state/profile-reducer.js";

import { Navigate, useLocation, useNavigate, useParams,} from "react-router-dom";




class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getPostThunkCreator(userId)
    // if(!userId) {
    //   userId = 2
    // }
    // userAPI.getProfile(userId)
    // .then(data => {
    //     this.props.setUserProfile(data);
    // });
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //     .then(response => {
    //         this.props.setUserProfile(response.data);
    //     });
}

  render() {
    if (!this.props.isAuth) {
      return <Navigate to='/login' />
    }
    return <Profile {...this.props} profile={this.props.profile}/>
  }

}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, {getPostThunkCreator})(withRouter(ProfileContainer));