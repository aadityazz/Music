import React from 'react';
import '../scss/Name.scss';

function NameTiles({className,length,name}) {
    return (
        <p className={className}>
            {
                length > 25?
                name.substring(0,25)+"..." : name

            }
        </p>
    );
}

export default NameTiles;
