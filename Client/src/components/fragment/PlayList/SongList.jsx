import React from 'react';
import "../scss/SongList.scss"

function SongList() {
    return (
        <div className="list">
            <div className="heading">
                <div>#</div>
                <div className="title">TITLE</div>
                <div className="artist">ARTIST</div>
            </div>
            <div className="line"></div>
        </div>
    );
}

export default SongList;
