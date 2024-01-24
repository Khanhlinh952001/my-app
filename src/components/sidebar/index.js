"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link'
const drawerWidth = 220;

const navigation = [
    {
        text: 'Home',
        icon: 'mdi:home-outline',
        path: '/pages/Home',
    },
    {
        text: 'AddProduct',
        icon: 'gridicons:product-downloadable',
        path: '/pages/AddProduct',
    },
    {
        text: 'Orders',
        icon: 'lets-icons:order',
        path: '/pages/Orders',
    },
];

function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen((prevMobileOpen) => !prevMobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#3b3e5e", color: 'white', height: '100vh' }}>
            <Toolbar sx={{ backgroundColor: "#3b3e5e", color: 'white', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h5' fontWeight='bold' mb={1}>KrShopping</Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Toolbar>
            <Divider />
            <List>
                {navigation.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ paddingLeft: 2, paddingRight: 2 }}>
                        <Link href={item.path}> 
                        <ListItemButton onClick={handleDrawerToggle} sx={{ display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
                            <Icon icon={item.icon} height="none"
                                style={{ width: '24px', height: '24px' }} />
                            <Typography ml={1} variant='body1'>
                                {item.text}
                            </Typography>
                        </ListItemButton>
                        </Link>
                       
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#3b3e5e", color: 'white' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#3b3e5e", color: 'white' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

// Sidebar.propTypes = {
//     window: PropTypes.func,
// };

export default Sidebar;
