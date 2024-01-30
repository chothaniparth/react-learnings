import React from "react";

const Header = () => {
    return(
        <header>
            <div>
                <button className="bg-leght-purple">BMP</button>
                <button className="bg-leght-purple">JPG</button>
                <button className="bg-leght-purple">PNG</button>
            </div>
            <div className="align-center">
                <button className="no-bg-btn"><i class="fa-regular fa-eye"></i></button>
                <button className="no-bg-btn"><i class="fa-solid fa-expand"></i></button>
                <button className="bg-leght-purple">EDIT</button>
            </div>
        </header>
    );
}

export default Header;