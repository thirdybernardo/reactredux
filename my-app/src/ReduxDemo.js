import React, { Component } from 'react';

import { createStore } from 'redux';

class ReduxDemo extends Component {
render(){
//step 2 : Reducer : state n action
const reducer = function(state , action){
    if(action.type === "ATTACK"){
        return action.payload
    }
    if(action.type === "GreenATTACK"){
        return action.payload
    }
    return state;
}

//step 1 store: reducer n state
const store = createStore(reducer, "Peace");

//step 3: Subscribe
store.subscribe(() => {
    console.log("Store is now ", store.getState());
})
//step 4: Dispatch Action
store.dispatch({type: "ATTACK", payload: "Iron Man"})
store.dispatch({type: "GreenATTACK", payload: "Hulk"})
   
        return(
            <div>
              test
            </div>
        );
    }
}

export default ReduxDemo;
