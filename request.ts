import {MessagesResp, MessagePost } from './types';
import { actions } from './actions';

declare const axios: any;
 const API = `https://opt-chat-intern.herokuapp.com`;

 class Api {
    getAllMessages(): Promise<MessagesResp> {
        return axios
        .get(`${API}/messages`)
        .then((resp: any) => resp.data)
         
    }

    postMessage(data: any):Promise<MessagePost> {
        return axios
        .post(`${API}/message`, {
            user: data.user,
            message: data.message
        })
        .then( (resp:any) =>(resp.data))
    }

   getMessagesSinceId(id:number): Promise<MessagesResp> {
    return axios
    .get(`${API}/messages/since/${id}`)
    .then((resp: any) => resp.data)
   }
}

export const api = new Api();