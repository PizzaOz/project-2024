import React from "react";
import { connect } from "react-redux";
import {followThunkCreator, getUsersThunkCreator, unfollowThunkCreator, } from "../../state/users-reducer";
import Users from "./User";
import Preloader from "../common/Preloader/Preloader";





class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setUsersTotalCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     });
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(pageNumber, this.props.pageSize)
        // .then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.toggleIsFetching(false)
        // });
    }

    render() {
        return(
        <>
            <Preloader isFetching={this.props.isFetching}/>
        <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            // unfollow={this.props.unfollow}
            // follow={this.props.follow}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            followThunkCreator={this.props.followThunkCreator} />
             </>
            )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



const UserContainer = connect(mapStateToProps, {
    // follow,
    // unfollow,
    // setUsers,
    // setCurrentPage,
    // setUsersTotalCount,
    // toggleIsFetching,
    // toggleFollowingProgress,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator,
})(UsersContainer);

export default UserContainer

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }