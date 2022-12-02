import React from "react";
import {MessageType} from "../../../redux/state";



export const Message = (props:MessageType) => {
    return (
        <div>{props.message}</div>
    )
}
