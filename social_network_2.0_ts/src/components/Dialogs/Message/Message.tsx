import React from "react";

export type MessageType = {
    message: string
    id: number
}

export const Message = (props:MessageType) => {
    return (
        <div>{props.message}</div>
    )
}
