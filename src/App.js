import React, { useReducer } from 'react';
import Header from './Components/Header/Header';
import Navigation from './Navigation/Navigation';

export const context = React.createContext();

const initialState = {
  timelineData : []
}


const reducer = (state, action) => {
  switch(action.type){
    case "add":
      const temporary = state.timelineData;
      temporary.push(action.payload);
      return {
        timelineData : temporary 
      }
    default:
      return state
  }
}

const App = () => {

  const [timelineData, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={{ timelineData : timelineData, timelineDispatch : dispatch }}>
      <div>
        <Header/>
        <Navigation/>
      </div>
    </context.Provider>
  );
}

export default App;
