"use client"
import React from 'react';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/HomeRounded';
import Chat from '@mui/icons-material/ChatRounded'
import Notice from '@mui/icons-material/NotificationsRounded';
export const BottomNavBar = () => {
    const [value, setValue] = React.useState(0);
    const [isOpened, setIsOpened] = useState(false) // outline or not 
    return (
        <div style={{ position: 'fixed', bottom: 0, width: '100%'} }>
            <BottomNavigation
            showLabels
            value={"home"}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction label="Recents" icon={<Home />} />
            <BottomNavigationAction label="Favorites" icon={<Chat />} />
            <BottomNavigationAction label="Nearby" icon={<Notice />} />
            </BottomNavigation>
        </div>
       
    )
}
