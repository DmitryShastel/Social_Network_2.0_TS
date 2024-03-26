import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    follow, setCurrentPage, unfollow
    // followAC,
    // setCurrentPageAC,
    // setTotalUserCountAC,
    // setUsersAC,
    // unfollowAC,
    // UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {getUsers} from "../../redux/users-reducer";
import {Preloader} from "../Common/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    //@ts-ignore
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapStateDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    //@ts-ignore
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

class UsersContainer extends React.Component<UsersContainerApiType> {
    componentDidMount() {
        //@ts-ignore
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changedPage = (pageNumber: any) => {
        //@ts-ignore
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        //@ts-ignore
        return <>{this.props.isFetching ? <Preloader/> : null}
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
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        //@ts-ignore
        users: state.usersPage.users,
        //@ts-ignore
        pageSize: state.usersPage.pageSize,
        //@ts-ignore
        totalUsersCount: state.usersPage.totalUsersCount,
        //@ts-ignore
        currentPage: state.usersPage.currentPage

    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
    }),
)(UsersContainer)

// const mapDispatchToProps = (dispatch: Dispatch): MapStateDispatchType => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUser: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: any) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUserCount: (totalUsersCount: any) => {
//             dispatch(setTotalUserCountAC(totalUsersCount))
//         }
//     }
// }


// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi)
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi)