import React, {createContext, useContext, useReducer} from "react";

{/* so here we are setting up day lia - this means like suppose we need to render a
prop at App.js , suppose the basket then we need to pass the home and then pass the products as props again at home and then we we will
reach to the destination this is nightmare nd called as props drilling. To avoid this and to use any component independently we will redux
and this is what is called as day lia.
setup data layer

Also we want to use the user login info to use in the home page*/}
//this is the data layer
export const StateContext = createContext();


//Build a provider to warp the entire app inside it and give this access to the day layer that we craeted above
//inital State means how dayalia looks initially
export const StateProvider = ({reducer, initialState, children}) => (
    //here it is saying use the dayalia as store to store the info
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>


);
// this is how we are gonna use this inside a compenent
export const useStateValue = () => useContext(StateContext);