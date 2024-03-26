import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        //@ts-ignore
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
        //@ts-ignore
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        //@ts-ignore
        if (prevProps.status !== this.props.status) {
            this.setState({
                //@ts-ignore
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        //@ts-ignore
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