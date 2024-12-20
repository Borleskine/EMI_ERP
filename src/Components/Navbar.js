import React, { useState } from 'react';
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Inicio",
            icon: <HomeIcon />
        },
        {
            text: "Sobre nosotros",
            icon: <InfoIcon />
        },
        {
            text: "Testimonios",
            icon: <CommentRoundedIcon />
        },
        {
            text: "Analítica",
            icon: <AnalyticsIcon />
        },
        {
            text: "Contáctanos",
            icon: <PhoneRoundedIcon />
        }
    ];

    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='navbar-links-container'>
                <a href=''>Inicio</a>
                <a href=''>Sobre nosotros</a>
                <a href=''>Testimonios</a>
                <a href=''>Analítica</a>
                <a href=''>Contáctanos</a>
                <button className='primary-button'>INGRESAR</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
