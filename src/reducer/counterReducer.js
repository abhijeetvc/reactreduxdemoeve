import * as actionType from '../actions/actionTypes'

const counterReducer=(state=100,action)=>{
  
    let newState
    switch(action.actionType){

        case actionType.ADD_COUNTER:
            newState=state+action.payload
            return newState 

        case actionType.REDUCE_COUNTER:
            newState=state-action.payload
            return newState
            
        default:
            return state    
    }
}

export default counterReducer