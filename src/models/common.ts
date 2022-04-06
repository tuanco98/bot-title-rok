import { User } from "discord.js";

export enum TitleType{
    duke =`!duke`,
    scient =`!scient`,
    archi =`!archi`,
    jub =`!jud`,
    help =`!help`,
}
export interface QueueTitle {
    author: User
    x: string[]
    y: string[]
}