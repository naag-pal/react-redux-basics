import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxBasics extends Component {

  render(){

    // step2: create reducer
    // Note: Stpe 2 is before step1 just for programming convinience
    const reducer = ((action, state) => {
      if(action.type === 'BATTING'){
        return action.player;
      }

      if(action.type === 'BOWLING'){
        return action.player;
      }
      return state;
    });

    // Step 1 Store: reducer n this.state.
    const store = createStore(reducer, "Cricket");

    // Step 3 Subscribe: pass on the current state

    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    // Step 4 Dispatch :  action with type and player to be returned
    store.dispatch({type:"BATTING", player: "Virat Kohli" });
    store.dispatch({type:"BOWLING", player: "Bhuvaneshwar Kumar" });

    return(
      <div>
        <h2>Redux has mainly 4 simple steps</h2>
        <p>
          1. Store <br />
          2. Reducer<br />
          3. Subscribe<br />
          4. Dispatch<br />
        </p>
      </div>
    );
  }
}

export default ReduxBasics;
