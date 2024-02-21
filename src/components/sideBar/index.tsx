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
import { sideBarDataTypes, subMenu } from '@/types/data-types';
import { Collapse, Icon, ListItemIcon } from '@mui/material';

const drawerWidth = 240;

export default function SideBar() {
  const [open, setOpen]= React.useState(false)
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
                <ListItem disablePadding>
                  <ListItemButton className='space-x-5' onClick={()=>{()=>data.subMenu && data.subMenu.length!==0 && setOpen((prev)=>!prev)}}>
                    <Icon>
                      {data.icon}
                    </Icon>
                    <ListItemText primary={data.description} />
                   {data.subMenu && data.subMenu.length > 0 && data.subMenu.map((subData: subMenu, idx: number)=> <Collapse in={open} timeout="auto" unmountOnExit key={idx}>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                           {subData.icon}
                          </ListItemIcon>
                          <ListItemText primary={subData.description} />
                        </ListItemButton>
                      </List>
                    </Collapse>)}
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