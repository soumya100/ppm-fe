"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { SideBarData } from './sideBarData';
import { sideBarDataTypes } from '@/types/data-types';
import { Icon } from '@mui/material';

const drawerWidth = 240;

export default function SideBar() {
  return (
    <Box sx={{ display: 'flex' }} className={`hidden md:flex z-[9]`}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {SideBarData.map((data: sideBarDataTypes, index) => (
              <Box key={index}>
                <ListItem  disablePadding>
                  <ListItemButton className='space-x-5'>
                    <Icon>
                      {data.icon}
                    </Icon>
                    <ListItemText primary={data.description} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}