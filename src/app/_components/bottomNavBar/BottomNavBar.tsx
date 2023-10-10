"use client"

import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/HomeRounded';
import Chat from '@mui/icons-material/ChatRounded'
import Notice from '@mui/icons-material/NotificationsRounded';


export const BottomNavBar = () => {
    const [value, setValue] =useState(0);
 
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    //const [value, setValue] = React.useState(pathname);
    
    useEffect(() => {
        if (pathname === '/') {
          setValue(0);
        } else if (pathname === '/type') {
          setValue(1);
        } else if (pathname === '/login') {
          setValue(2);
        }
      }, [pathname]);
    return (
         <Paper style={{ position: 'fixed', bottom: 0, width: '100%'} }>
    
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
            
        }}>
        <BottomNavigationAction href='/' label="Home" icon={<Home />}></BottomNavigationAction> 
        <BottomNavigationAction href='/type' label="Chat" icon={<Chat />}></BottomNavigationAction> 
        <BottomNavigationAction href='/login' label="Notice" icon={<Notice />}></BottomNavigationAction>
        </BottomNavigation>
          
        </Paper>
       
    )
    
    }