import React from 'react';
import Container from "../fragment/Container/Container";
import Thumbnail from "../fragment/PlayList/Thumbnail";
import SongList from "../fragment/PlayList/SongList"
import {useState} from "react";

const Liked = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    return (
        <Container>
            {  user?
                <div>
                    <Thumbnail title = "Liked Songs"/>
                    <SongList/>
                </div>:
                <div  className="else-login"> You need to Login First</div>
            }
        </Container>
    );
}

export default Liked;
