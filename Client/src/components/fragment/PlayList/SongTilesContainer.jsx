import React from 'react';
import {useSelector} from "react-redux";
import "../scss/SongTileContainer.scss"
import SongTiles from "./SongTiles";
import Container from "../Container/Container";

function SongTilesContainer(props) {
    const {playlists} = useSelector(state => state.musicReducer);

    return (
        <Container>
            <div className={"music-card-container-x"}>
                {
                    playlists.map(item => (<SongTiles key={item.id} music={item}/>))
                }
            </div>
        </Container>
    );
}

export default SongTilesContainer;
