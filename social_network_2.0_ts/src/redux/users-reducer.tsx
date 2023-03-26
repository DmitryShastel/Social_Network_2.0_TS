const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

export type FollowACType = (userId: any) => FollowActionType
export type UnfollowACType = (userId: any) => UnfollowActionType

export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}

export type ActionType = FollowActionType | UnfollowActionType

export type UserType = {
    id: number
    photoUrl: string
    fullName: string
    followed: boolean
    status: string
    location: LocationType
}

export type LocationType = {
    country: string
    city: string
}

let initialState = {
    users: [
        {
            id: new Date().getTime(),
            photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-agent-smith-hugo-weaving.jpg?fit=1600%2C1067',
            fullName: 'Dima',
            followed: true,
            status: 'i am a boss',
            location: {country: 'Belarus', city: 'Minsk'},
        }
    ] as Array<UserType>
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        default:
            return state
    }
}

export const followAC: FollowACType = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC: UnfollowACType = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    }
}