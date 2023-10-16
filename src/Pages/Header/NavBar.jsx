import React, { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar, Tooltip } from "@nextui-org/react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import NameAndLogo from "../../Components/WebsiteName/NameAndLogo";
import Swal from "sweetalert2";


const NavBar = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to log out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                    })
                    .catch(error => {
                        Swal.fire(`Please Check your email and password', ${error.message}`)
                    })
                Swal.fire(
                    'Log out!',
                    'You are successfully loged out.',
                    'success'
                )
            }
        })

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

            {user ? (
                <Button onClick={handleLogOut} color="danger" variant="ghost">Log out</Button>
            ) : (
                <>
                    <NavLink to="signUp&logIn">Sign Up</NavLink>
                    <NavLink to="signUp&logIn">Log in</NavLink>
                </>)}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex items-center gap-5">

            {user ?
                <Tooltip content={user?.displayName}>
                    <Avatar isBordered color="success" src={user?.photoURL
                    } />
                </Tooltip>
                :
                <Tooltip content="No User">
                    <Avatar showFallback src='https://images.unsplash.com' />
                </Tooltip>
            }
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
