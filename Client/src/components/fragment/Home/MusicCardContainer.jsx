import React from "react"
import '../scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";
import Container from "../Container/Container";

function MusicCardContainer() {
    const {playlists} = useSelector(state => state.musicReducer);
    // const { songs, isLoading } = useSelector((state) => state.songs);
    // const classes = useStyles();
    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    playlists.map(item => (<MusicCard key={item.id} music={item}/>))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;
