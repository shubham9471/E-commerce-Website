/* Swicth is used for better switching b/w pages without reloading
Home page will be our default page. In case we want to go to page that is not in our routing then it will by default
take you the home page
*/
import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function App() {
  const [{user}, dispatch] = useStateValue();

  //UseEffect (it would be very useful when writing class based components into function based components)
  // piece of code which runs on a given conditon

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //user logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        });

      }

    });

    return () =>{
      //any cleanup operations go in here
      unsubscribe();
    }

  }, []);

  console.log("USER-->",user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path= "/login">
            <Login/>
          </Route>

          <Route path = "/">
            <Header/>
            <Home/> {/* so here instead of rendering ample no of things on App.js we simply created a Home.js and do all the stuffs there for our Home*/}
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
