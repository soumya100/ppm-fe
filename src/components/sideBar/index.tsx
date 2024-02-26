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
import { Avatar, Collapse, Icon, IconButton, ListItemAvatar, ListItemIcon, Typography } from '@mui/material';
import { FlexBetween, FlexItemCenter } from '@/common';
import getSessionStorageData from '@/utils/getSessionStorageData';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Logout } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { pathName } from '@/utils/route';

const drawerWidth = 320;

export default function SideBar() {
  const [open, setOpen] = React.useState(false)
  const orgName = getSessionStorageData('orgName') || '--'
  const financialYear = useSelector((state: any) => state.navbarData?.navData)
  const router=useRouter()
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
        <FlexBetween className='!flex-col !w-full !h-full'>
          <Box sx={{ overflow: 'auto' }} className={`!w-full`}>
            <List>
              {SideBarData.map((data: sideBarDataTypes, index) => (
                <Box key={index}>
                  <ListItem disablePadding>
                    <ListItemButton className='space-x-5' onClick={() => { () => data.subMenu && data.subMenu.length !== 0 && setOpen((prev) => !prev) }}>
                      <Icon>
                        {data.icon}
                      </Icon>
                      <ListItemText primary={data.description} />
                      {data.subMenu && data.subMenu.length > 0 && data.subMenu.map((subData: subMenu, idx: number) => <Collapse in={open} timeout="auto" unmountOnExit key={idx}>
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
          <FlexItemCenter>
            <ListItem>
              <ListItemAvatar>
                <Avatar className='bg-sky-500 capitalize'>
                  {orgName.charAt(0)}
                  </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={`p`} className={`font semibold text-sm capitalize`}>
                    {orgName}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      className='text-xs'>
                      {dayjs(financialYear[0]?.Fin_start).format('DD MMMM YY')} - {dayjs(financialYear[0]?.to).format('DD MMMM YY')}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <IconButton onClick={()=>{
                sessionStorage.clear()
                router.push(pathName.login)
                }}>
              <Logout fontSize='small' />
            </IconButton>
          </FlexItemCenter>
        </FlexBetween>
      </Drawer>
    </Box>
  );
}