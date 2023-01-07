import React, {useEffect, useState} from 'react';
import './css/Profile.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/Home/MusicCard";
import Container from "../fragment/Container/Container";
import Grade from 'grade-js';
import SideBarOptions from "../fragment/SideBar/SideBarOptions";
import {PlaylistPlay} from "@material-ui/icons";

function Profile() {

    const {playlists} = useSelector(state => state.musicReducer);
    const [mostPlayed, setMostPlayed] = useState([]);

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;

            return 0;
        }
    }

    useEffect(() => {
        setMostPlayed(playlists.sort(sortByProperty("timesPlayed")));
    }, [playlists]);

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <Container>
            {user?
                <div className={"Profile"}>
                    <div className="top-profile">
                        <Avatar variant={"rounded"}
                                style={{width: "150px", height: "150px"}}
                                alt={user?.result.name}
                                src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <div className="profile-detail">
                            <h3>{user?.result.name}</h3>
                            <span className={"profile-playlist"}>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay}
                                            href={"/home/playlist/instrumental"} title={"Instrumental"}/>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}
                                            title={"Electronic"}/>
                        </span>
                        </div>
                    </div>
                    <div className="bottom-profile">
                        <div>
                            <h3>Most Played</h3>
                            <div className="most-played">
                                {
                                    mostPlayed.map((item, index) => (
                                        index <= 4 && <MusicCard key={item.id} music={item}/>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>:
                <div className="else-login">You Need to Login first</div>
            }

        </Container>
    );
}

export default Profile;
