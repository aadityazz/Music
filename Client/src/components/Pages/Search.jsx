import React, {useEffect, useState} from 'react';
import './css/Search.scss';
import Container from "../fragment/Container/Container";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/Home/MusicCard";
import SearchMusicDisc from "../assets/img/searchMusicDisc.svg"
import SearchBar from "../fragment/Search/SearchBar";

const Search = () => {
    const {playlists, search} = useSelector(state => state.musicReducer);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setSearchResult(playlists.filter((i) => (
            (i.name.toLowerCase().startsWith(search))
            ||
            (i.author_name.toLowerCase().startsWith(search))
            ||
            (i.musicName.toLowerCase().startsWith(search))
            ||
            (i.lang && i.lang.toLowerCase().startsWith(search))
        )));
    }, [search, playlists]);
    return (
        <Container>
            {

                (search === "" || search === null)
                    ?
                    <div className={"Search"}>
                        <SearchBar/>
                        <div className="Search-img">
                            <img className={"Rotate-img"} src={SearchMusicDisc} alt="search-music-icon"/>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={"Search"}>
                            <SearchBar/>
                        </div>
                        <div className={"Search-result"}>

                            {
                                searchResult.length === 0
                                    ?
                                    <div class="Search-fallback">
                                        No result found.
                                    </div>
                                    :
                                    searchResult.map((item) => (
                                        <MusicCard key={item.id} music={item}/>
                                    ))
                            }
                        </div>
                    </div>

            }
        </Container>
    );
}

export default Search;
