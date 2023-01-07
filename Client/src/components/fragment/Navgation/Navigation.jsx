import React, {useContext, useState} from "react";
import '../scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchBar from "../Search/SearchBar";
import Brand from "../Logo/Brand";
import DropDownProfile from "../SideBar/DropDownProfile";
import {Avatar, Button} from "@material-ui/core";
import {ThemeContext} from "../../../api/Theme";

function Navigation() {

    const [isOpenProfile, setOpenProfile] = useState(false);


    function handleOpenProfile() {
        setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <div className={"navigation"}>
               {/* <NavigationButton href={"/home"} name={"Home"}/>*/}
               {/* <NavigationButton href={"/home/about"} name={"Liked"}/>*/}
                {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
            </div>
            <SearchBar/>

            <div className="profile" onClick={handleOpenProfile}>
                <Button className={"Dropdown-btn"}
                        startIcon={<Avatar style={{width:'30px',height:'30px',padding:'18px'}} >VS</Avatar>}
                        endIcon={isOpenProfile ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>

                </Button>
                {
                    isOpenProfile &&
                    <DropDownProfile/>
                }
            </div>
        </nav>
    );
}

export default Navigation;
