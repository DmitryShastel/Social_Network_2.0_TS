import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToPropsForRedirect = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const WithAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component {
        render() {
            //@ts-ignore
            if (!this.props.isAuth) {
                return <Navigate to='/login'/>
            }
            return <Component {...this.props}/>
        }

    }

    let AuthRedirectionComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return AuthRedirectionComponent
};



