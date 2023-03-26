import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";


type MapStatePropsType = {

}

type MapStateDispatchType = {

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapStateDispatchType => {
    return {

    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)