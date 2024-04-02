import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type ProfileStatusState = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType, ProfileStatusState> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || '----'}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                        <input
                            onChange={this.onChangeStatus}
                            autoFocus={true}
                            onBlur={this.deactiveEditMode}
                            value={this.state.status}/>}
                </div>
            </>
        );
    }
};