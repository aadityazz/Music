import React, {useContext, useEffect, useState} from "react";
import './css/Home.scss';
import MobileTopNavigation from "../fragment/Navgation/MobileTopNavigation";
import SideBar from "../fragment/SideBar/SideBar";
import FooterMusicPlayer from "../fragment/Player/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/Navgation/BottomNavigationMobile";
import MusicCardContainer from "../fragment/Home/MusicCardContainer";
import {useSelector} from "react-redux";
import {ThemeContext} from "../../api/Theme";
import Profile from "./Profile";
import AddMusic from "../fragment/AddMusic";
import FooterSelectMusic from "../fragment/Player/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/Home/CurrentPlayingLarge";
import Search from "./Search";
import Liked from "./Liked";
import Playlist from "../fragment/PlayList/Playlist";
import {Skeleton} from "@material-ui/lab";

function getCurrPage(pathName) {
    switch (pathName) {
        case "/home":
            return <MusicCardContainer/>
        case "/home/search":
            return <Search/>
        case "/home/profile":
            return <Profile/>
        case "/home/add":
            return <AddMusic/>
        case "/home/liked":
            return <Liked/>
        default:
            if (pathName.startsWith("/home/playlist/")) {
                return <Playlist/>
            }
            return null
    }
}

function Home() {

    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<MusicCardContainer/>);

    let pathname = window.location.pathname;
    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const useStyle = useContext(ThemeContext);
    const {playing, bannerOpen} = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);



    return (
        <div style={useStyle.component} className={"home-container flex flex-col"}>

            {
                !loaded ?
                    <div className="Home-skeleton flex flex-col">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"}/>
                    </div> : <>
                        {screenSize <= 970 ? <MobileTopNavigation/> : <></>}
                        <section className={"home-music-container flex flex-row"}>
                            <div className="sidebar-home">
                                <SideBar/>
                            </div>
                            <div className="main-home">{Page}</div>
                        </section>
                        {
                            bannerOpen
                            &&
                            <section className="current-large-banner">
                                <CurrentPlayingLarge/>
                            </section>
                        }

                        <React.Fragment>
                            {
                                currMusic
                                    ?
                                    <FooterMusicPlayer music={currMusic}/>
                                    :
                                    <FooterSelectMusic/>
                            }
                            {
                                screenSize <= 970 && <BottomNavigationMobile/>
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default Home;
