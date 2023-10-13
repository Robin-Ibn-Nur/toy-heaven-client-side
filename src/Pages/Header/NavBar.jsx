import React, { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure } from "@nextui-org/react";
import LogIn from "../../SharedPages/LogInPage/LogIn";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import NameAndLogo from "../../Components/WebsiteName/NameAndLogo";


const NavBar = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        "Profile",
        "Home",
        "All Toys",
        "My Toys",
        "Add a Toys",
        "Blogs",
        "Log Out",
    ];



    const nabMenu = <>

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
    const loginAndSignUp = <>
        <NavbarItem className="hidden lg:flex items-center gap-5">
            <Button onClick={handleLogOut} color="danger" variant="ghost">Log out</Button>
            <NavLink to="signUp&logIn">Sign Up</NavLink>
            <NavLink to="signUp&logIn">Log in</NavLink>
        </NavbarItem>
    </>


    return (
        <Navbar
            shouldHideOnScroll
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden sm:pr-3 " justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    {/* <p style={colorfulTextStyles}>Toy Heaven</p> */}
                    <NameAndLogo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    {/* <p style={colorfulTextStyles}>Toy Heaven</p> */}
                    <NameAndLogo />
                </NavbarBrand>
                {nabMenu}
            </NavbarContent>

            <NavbarContent justify="end">
                {loginAndSignUp}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
