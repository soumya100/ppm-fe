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
import { Avatar, Collapse, Icon, IconButton, ListItemAvatar, ListItemIcon, Typography } from '@mui/material';
import { FlexBetween, FlexItemCenter } from '@/common';
import getSessionStorageData from '@/utils/getSessionStorageData';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {Logout} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import styles from './sideBar.module.css'

const drawerWidth = 320;

interface SideBarProps {
  logOutGetApiCall(): void
  handleSubMenu(id: number): void
  openMenuId: number
}

export const SideBar: React.FC<SideBarProps> = ({ logOutGetApiCall , handleSubMenu, openMenuId}) => {
  const orgName = getSessionStorageData('orgName') || '--'
  const financialYear = useSelector((state: any) => state.sideBarData?.financialYear)
  const sideBarData= useSelector((state: any)=> state.sideBarData?.sideBarData)
  const router= useRouter()

  return (
    <Box sx={{ display: 'flex' }} className={`hidden md:flex z-[9] ${styles.scrollbar}`}>
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
             {sideBarData && sideBarData.length > 0 && sideBarData?.map((data: any)=><Box key={data.Menue_Id}>
             <ListItemButton onClick={data.SubMenue && data.SubMenue.length > 0 ?
                ()=> handleSubMenu(data.Menue_Id) : ()=> router.push(`/dashboard`)}>
                <ListItemIcon>
                  <Icon>
                  {data?.Menue_Icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText primary={data.Menue_Name} />
              </ListItemButton>
             {data?.SubMenue && data.SubMenue.length > 0 && <Collapse in={data.Menue_Id === openMenuId ? true : false } timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {data.SubMenue.map((subMenu: any)=><ListItemButton key={subMenu.Id} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Icon>
                        {subMenu.icon_class}
                      </Icon>
                    </ListItemIcon>
                    <ListItemText primary={subMenu.Menue_Name} />
                  </ListItemButton>)}
                </List>
              </Collapse>}
             </Box>)
              }
            </List>
          </Box>
          <FlexItemCenter className='w-full px-2 sticky bottom-0 left-0 z-10 bg-white'>
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
            <IconButton onClick={logOutGetApiCall}>
              <Logout fontSize='small' />
            </IconButton>
          </FlexItemCenter>
        </FlexBetween>
      </Drawer>
    </Box>
  );
}

export default SideBar