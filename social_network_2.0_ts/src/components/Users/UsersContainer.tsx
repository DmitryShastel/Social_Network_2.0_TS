import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapStateDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: any) => void
    setTotalUserCount: (totalUsersCount: any) => void
}

// type UsersContainerType = {
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     setUsers: (users: Array<UserType>) => void
//     setCurrentPage: (currentPage: any) => void
//     setTotalUserCount: (totalUsersCount: any) => void
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUser: (users: Array<UserType>) => void
// }


type UsersContainerApiType = MapStatePropsType & MapStateDispatchType

class UsersContainerApi extends React.Component<UsersContainerApiType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUser(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount)
            })
    }

    changedPage = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUser(res.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            changedPage={this.changedPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUser={this.props.setUser}
        />
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}


const mapDispatchToProps = (dispatch: Dispatch): MapStateDispatchType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: any) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUsersCount: any) => {
            dispatch(setTotalUserCountAC(totalUsersCount))
        }
    }
}


// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi)
 export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi)