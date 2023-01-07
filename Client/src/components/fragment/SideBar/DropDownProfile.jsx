import React, {useContext, useEffect, useState} from "react";
import '../scss/DropDownProfile.scss';
import {ThemeContext} from "../../../api/Theme";
import {AccountBox, ExitToApp} from "@material-ui/icons";
import {useHistory, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import decode from 'jwt-decode';

import * as actionType from '../../../constants/actionTypes';

const DropDownProfile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/');

        setUser(null);

    };

    const profile = () => {
        history.push('/home/profile');
    }

    useEffect(() => {
        const token = user?.token;

        // if (token) {
        //     const decodedToken = decode(token);

        //    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        //}

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const useStyle = useContext(ThemeContext);
    return (
        <div className="dropdown-profile" style={useStyle.component}>
            <button className="b-button" title="Profile" onClick={profile}><AccountBox/></button>
            <button className="b-button" title="Logout" onClick={logout}><ExitToApp/></button>
        </div>
    );
}
export default DropDownProfile;
