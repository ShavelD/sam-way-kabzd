import React from 'react'

export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
// if (action.type === TOGGLE_CONSTANT) {
//     return !state
// }
//     return state
// }
    switch (action.type) {
        case TOGGLE_CONSTANT:
            const stateCope = {
                ...state,
                collapsed: !state.collapsed
            }
            return stateCope
        default:
            throw new Error("bad action")
    }
    return state
}