import React from 'react';

const NavbarBtn=({children,type})=>{
    return(
        <a href="#!" onClick={type}>{children}</a>
    )

}

export default NavbarBtn;