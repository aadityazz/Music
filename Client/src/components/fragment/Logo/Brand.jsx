import React from "react";
import {Link} from "react-router-dom";
import "../scss/Brand.scss";

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        MUSIC
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;
