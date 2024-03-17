import { NavbarItem } from '@nextui-org/navbar';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Menu = () => {
    const { user } = useContext(AuthContext)
    return (
        <>

            <NavbarItem className="cursor-pointer">
                <NavLink to="/" color="foreground" >
                    Home
                </NavLink>
            </NavbarItem>
            <NavbarItem className="cursor-pointer">
                <NavLink to="/all-toys" color="foreground" >
                    All Toys
                </NavLink>
            </NavbarItem>
            {user && <>
                <NavbarItem className="cursor-pointer">
                    <NavLink to="/my-toys" color="foreground" >
                        My Toys
                    </NavLink>
                </NavbarItem>
                <NavbarItem className="cursor-pointer">
                    <NavLink to="/add-a-toys" color="foreground" >
                        Add a Toys
                    </NavLink>
                </NavbarItem>
            </>}
            <NavbarItem className="cursor-pointer">
                <NavLink to="/blogs" color="foreground" >
                    Blogs
                </NavLink>
            </NavbarItem>
        </>
    );
};

export default Menu;