import { Action } from "./action";

export interface Campaign {
    _id?: string,
    updatedAt?: string,
    createdAt?: string,
    imgUrl?: string,
    title: string,
    description: string,
    dateEnd: string,
    dateBegin: string,
    actions: Action[],
    status?: string
}