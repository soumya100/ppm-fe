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
import { Avatar, Collapse, Icon, IconButton, ListItemAvatar, ListItemIcon, ListSubheader, Typography } from '@mui/material';
import { FlexBetween, FlexItemCenter } from '@/common';
import getSessionStorageData from '@/utils/getSessionStorageData';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Drafts, ExpandLess, ExpandMore, Inbox, Logout, Send, StarBorder } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { pathName } from '@/utils/route';

const drawerWidth = 320;

export default function SideBar() {
  const orgName = getSessionStorageData('orgName') || '--'
  const financialYear = useSelector((state: any) => state.sideBarData?.sideBarData)
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const router = useRouter()
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
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <Send />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
              <ListItemButton  onClick={handleClick}>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
          <FlexItemCenter className='w-full px-2'>
            <ListItem>
              <ListItemAvatar>
                <Avatar className='bg-sky-500 capitalize'>
                  {orgName.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component={`p`} className={`font-semibold text-sm capitalize`}>
                    {orgName}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      className='text-xs font-semibold'>
                      Financial Year: {dayjs(financialYear[0]?.Fin_start).format('YYYY')} - {dayjs(financialYear[0]?.Fin_To).format('YYYY')}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <IconButton onClick={() => {
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