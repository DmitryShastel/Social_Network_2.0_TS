import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateProfilePropsType = {
    profile: null | string
    status: string
}

interface WithRouterPropsType {
    location: ReturnType<typeof useLocation>
    navigate: ReturnType<typeof useNavigate>
    params: {
        [key: string]: number;
    };
}

type ProfileContainerProps = WithRouterPropsType & {
    router: WithRouterPropsType
    profile: {
        photos: {
            small: string;
            large: string;
        };
    } | null;
    status: string;
    getUserProfile: (userId: number) => void;
    getStatus: (userId: number) => void;
    updateStatus: (status: string) => void;
}


export function withRouter<T extends ProfileContainerProps>(Component: React.ComponentType<T>) {
    function ComponentWithRouterProp(props: T) {
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


class ProfileContainer extends React.Component<ProfileContainerProps> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            // userId = 12555
            userId = 10
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return (
            <div>
                <div>
                    <Profile
                        {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateProfilePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<React.ComponentClass<ProfileContainerProps>>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);