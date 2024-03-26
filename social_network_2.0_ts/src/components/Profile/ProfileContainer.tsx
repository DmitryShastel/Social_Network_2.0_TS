import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        //@ts-ignore
        let userId = this.props.router.params.profileId;
        if (!userId) {
            // userId = 12555
            userId = 10
        }
        //@ts-ignore
        this.props.getUserProfile(userId)
        //@ts-ignore
        this.props.getStatus(userId)
    }


    render() {

        return (
            <div>
                <div>
                    <Profile
                        {...this.props}
                        //@ts-ignore
                        profile={this.props.profile}
                        //@ts-ignore
                        status={this.props.status}
                        //@ts-ignore
                        updateStatus={this.props.updateStatus}
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)