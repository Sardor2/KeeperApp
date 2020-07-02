import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
    return (
        <header>
            <h1 className="header-title"><HighlightIcon  fontSize="large"/> Keeper</h1>
        </header>
    );
    
}

export default Header;