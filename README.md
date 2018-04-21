# Understanding the Redux Basics with ReactJS

## Installing Redux

```
npm install redux --save

```

## Importing Redux in ReactJS

```
import React, { Component } from 'react';
import { createStore } from 'redux';
```

## Redux has mainly 4 simple steps

1. Store
2. Reducer
3. Subscribe
4. Dispatch

##1. STORE: To create 'Store' we need two pieces of information
  - reducer
  - state

```
  // Step 1 Store: reducer n this.state.
  const store = createStore(reducer, "Cricket");
```

##2. REDUCER - need to pass the current state and what action need to be performed
  - state
  - action

```
// step2: create reducer
const reducer = ((action, state) => {
  if(action.type === 'BATTING'){
    return action.player;
  }
  if(action.type === 'BOWLING'){
    return action.player;
  }
  return state;
});
```


Note: while writing in code Step 2 is before step1 just for programming convinience

## 3. SUBSCRIBE - get the current state

```
// Step 3 Subscribe  
store.subscribe(() => {
  console.log("Store is now", store.getState());
});
```


## 4. DISPATCH - What Type of action we need to take can be decided here

```
// Step 4 Dispatch :  action with type and player to be returned
store.dispatch({type:"BATTING", player: "Virat Kohli" });
store.dispatch({type:"BOWLING", player: "Bhuvaneshwar Kumar" });

```

## Import the Reducer Component into App.js

```
import ReduxBasics from './ReduxBasics';

...

<ReduxBasics />

```

## Starting the server - as usual start the server to see the output

```
npm start
```
