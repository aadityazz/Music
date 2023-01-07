import React, {useEffect, useRef, useState} from "react";
import '../scss/SearchBar.scss';
import {useDispatch} from "react-redux";
import {setSearch} from "../../../actions/actions";
import {Link} from "react-router-dom";

const SearchBar = () => {
    const [isSearchBarOpen, setSearchBarOpen] = useState(false);
    const handleSearchBarOpen = () => {
        setSearchBarOpen(!isSearchBarOpen);
    };
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };
    const searchRef = useRef();
    useEffect(() => {
        if (isSearchBarOpen === true) {
            searchRef.current.focus();
        }
    });

    const dispatch = useDispatch();
    const searchLink = useRef();
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchQuery.toLowerCase()));
        if (searchQuery !== "")
            searchLink.current.click();
    };

    return (
        <div className={`${isSearchBarOpen ? "SearchBar  open" : "SearchBar"}`}>
            <form onSubmit={handleSearch} className={"search-container"}>
                {
                    isSearchBarOpen &&
                    <>
                        <Link to={"/home/search"} ref={searchLink}/>
                        <input id={"search-input"}
                               name={"searchQuery"}
                               value={searchQuery}
                               onChange={handleSearchQuery}
                               placeholder={"Search a track..."}
                               type="text"
                               ref={searchRef}
                        />
                    </>
                }
            </form>
            {
                !isSearchBarOpen &&
                <div className={"SearchBar-customPlaceholderOpen"}
                     onClick={handleSearchBarOpen}>
                    <p className={"hide"}>&nbsp;Search</p>
                </div>
            }
            {
                isSearchBarOpen &&
                <div className={"SearchBar-customPlaceholderClose"}
                     onClick={handleSearchBarOpen}>
                    {/*
                    <p>Close&nbsp;</p>*/}
                </div>
            }


        </div>
    );
};

export default SearchBar;
