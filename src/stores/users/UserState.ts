import { User } from './User'

export interface UserState {
    me: {
        token: string;
    }
    all: User[]
}
