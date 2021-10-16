import './App.scss';
import Register from "./Register/Register";
import {Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import {createContext, useState} from "react";

export const UserContext = createContext();

function App() {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('loggedIn'));
  return (
      <UserContext.Provider value={{loggedIn, setLoggedIn}}>
    <div className="App">
        <Switch>
            <Route path={"/register"}>
                <Register />
            </Route>
            <Route path={"/sign-in"}>
                <Login />
            </Route>
        </Switch>
    </div>
      </UserContext.Provider>
  );
}

export default App;