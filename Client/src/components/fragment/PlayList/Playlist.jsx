import React from 'react';
import '../scss/Playlist.scss';
import {useSelector} from "react-redux";
import Container from "../Container/Container";
import Thumbnail from "./Thumbnail";
import SongList from "./SongList";
import SongTiles from "./SongTiles";

const Playlist = () => {
    const string = window.location.pathname.substring(15);
    const typeOfPlaylist = string.charAt(0).toUpperCase() + string.slice(1);
    const {playlists} = useSelector(state=>state.musicReducer);
    return (
        <Container>
            <div  className={"Playlist"}>
                <Thumbnail title = {typeOfPlaylist}/>
                <SongList/>
                <div className="Playlist-container">
                    {
                        playlists.map((item)=>(
                            item.type === string &&
                            <SongTiles key={item.id} music={item}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default Playlist;
