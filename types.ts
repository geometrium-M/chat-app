
export interface iMessage {
    data: number,
    id: string,
    message: string,
    user: string
}


export interface MessageResp {
    message: iMessage
}

export interface MessagesResp {
    messages: Array<iMessage>
}

export interface MessagePost {
    messageId: Number
}



