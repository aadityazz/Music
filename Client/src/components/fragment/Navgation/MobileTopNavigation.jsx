import React from "react";
import SearchBar from "../Search/SearchBar";
import '../scss/MobTopNav.scss';
import Brand from "../Logo/Brand";

class MobileTopNavigation extends React.Component{
    render() {
        return(
            <nav className="mob-top-navigation">
                <Brand/>
                <SearchBar/>
            </nav>
        );
    }
}

export default MobileTopNavigation;
