import './App.scss';
import Register from "./Register/Register";
import {Route, Switch, useHistory, useParams} from "react-router-dom";
import Login from "./Login/Login";
import {createContext, useEffect, useState} from "react";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import {me} from './services/user.service'
import PostCreate from "./PostCreate/PostCreate";
import Profile from "./Profile/Profile";
import PostProfile from "./PostProfile/PostProfile";
import Search from "./Search/Search";

export const UserContext = createContext();

function App() {
    // const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
    const history = useHistory()
    const [user, setUser] = useState({});
    // console.log(user)

    useEffect(()=> {
        me()
            .then(loggedUser => {
                // console.log(loggedUser)
                if(!isLoggedIn(loggedUser)) {
                    history.push('/sign-in');
                    return;
                }
                setUser(loggedUser);
            })
            .catch(err => console.log(err))
    },[history]);
    function isLoggedIn(user) {
        return user.hasOwnProperty('_id');
    }


    return (
      <UserContext.Provider value={{user, setUser}}>
        <div className="App">
            {isLoggedIn(user) && <Header />}
            <Switch>
                <Route  path={`/profile/:username`}>
                    <Profile/>
                </Route>
                <Route  path={"/register"}>
                    <Register />
                </Route>
                <Route path={"/sign-in"}>
                    <Login />
                </Route>
                <Route path={"/post/create"}>
                    <PostCreate/>
                </Route>
                <Route  path={`/post/profile/:id`}>
                    <PostProfile/>
                </Route>
                <Route path={"/Search"}>
                    <div className={"searchPage"}>
                        <Search/>
                    </div>

                </Route>
                <Route exact path={"/"}>
                    <Feed />
                </Route>
            </Switch>
        </div>
      </UserContext.Provider>
  );
}

export default App;
