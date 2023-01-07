import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {increaseTimesPlayed, setCurrentPlaying} from "../../../actions/actions";
import {Skeleton} from "@material-ui/lab";
import Rectangle from "@material-ui/core/Box";
import '../scss/SongTiles.scss'
import '../scss/NameTiles.scss'
import NameTiles from "./NameTiles";

function SongTiles(props) {
    const {name, img, author_name} = props.music;

    const [isHovered, setHovered] = useState(false);

    function handleResponse() {
        setHovered(!isHovered);
    }

    const dispatch = useDispatch();

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id));
    }

    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(true)
    },[]);
    return (
        <div className={"music-card-x"}>
            {
                !loaded ?
                    <div className={"Skeleton-top-x"}>
                        <Skeleton variant="rect" width={30} height={30} />
                        <Rectangle pt={0.5}>
                            <Skeleton />
                            <Skeleton width="70%" />
                        </Rectangle>
                    </div>
                    :
                    <>
                        <div onClick={handlePlay}  className={"music-card-cover-x"} onMouseOver={handleResponse}>
                            <img src={require("../../assets/img/" + img)} alt={name}/>

                        </div>
                        <div class="titles">
                            <NameTiles name={name} className={"song-name-x"} length={name.length}/>
                            <NameTiles name={author_name} className={"author-name-x"} length={author_name.length}/>
                        </div>
                    </>
            }


        </div>
    );
}

export default SongTiles;
