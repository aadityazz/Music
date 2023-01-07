import React from "react";
import "../scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {HomeOutlined, PlaylistPlay, SearchOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import Brand from "../Logo/Brand";
import DropDownProfile from "./DropDownProfile";
import {Avatar, Button} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import {useState} from "react";

function SideBar() {
    const [isOpenProfile, setOpenProfile] = useState(false);

    function handleOpenProfile() {
        setOpenProfile(!isOpenProfile);
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <aside className={"aside-bar"}>
            <Brand/>
            <div className="profile" onClick={handleOpenProfile}>
                <Button className={"Dropdown-btn"}
                        startIcon={<Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>}
                        endIcon={isOpenProfile ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>

                </Button>
                {
                    isOpenProfile &&
                    <DropDownProfile/>
                }
            </div>
            <div className="aside-bar-container">
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ThumbUpAltOutlined} href={"/home/liked"}  title={"Liked"}/>
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>Your Playlist</span>
                    {/*<button className="playlist-plus">+</button>*/}
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"}  title={"Instrumental"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}  title={"Electronic"}/>
            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;
