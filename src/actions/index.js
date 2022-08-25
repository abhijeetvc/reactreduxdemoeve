import * as actionType from './actionTypes'

// action : 1) type, 2) payload

// add counter
export const addCounter=({
    type:actionType.ADD_COUNTER,
    payload:1  //optional
}
)

// reduce counter
export const reduceCounter=({
    type:actionType.REDUCE_COUNTER,
    payload:1  //optional
}
)

// redux
// react-redux