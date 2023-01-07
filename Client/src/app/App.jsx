import React, {useEffect, useState} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from "../components/Pages/Login/Login";
import {ThemeContext, themes} from "../api/Theme";

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        {/*{!user? <Route path="/" component={Login}>:*/}
                        {/*    <Route path="/home" component={Home}/>*/}
                        {/*    }*/}
                        <Route path="/" exact component={() => (!user ? <Login /> : <Redirect to="/home" />)} />
                        <Route path="/home" component={() => (<Home/>)}/>
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;
