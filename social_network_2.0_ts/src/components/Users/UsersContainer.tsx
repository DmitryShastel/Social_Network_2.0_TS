import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {follow, getUsers, setCurrentPageAC, unfollow, UserType} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../Common/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

type UsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<UserType>) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followingInProgress: Array<number>
}


type UsersContainerApiType = MapStatePropsType & UsersContainerType

class UsersContainer extends React.Component<UsersContainerApiType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changedPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>{this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                changedPage={this.changedPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUser={this.props.setUser}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
        setCurrentPage: setCurrentPageAC,
    }),
)(UsersContainer)