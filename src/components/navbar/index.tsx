// components/Navbar.tsx
import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar, Box, Drawer, CssBaseline, Menu, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import { Call, Close, Menu as MenuIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import {
  FlexBetween,
  FlexItemCenter,
  //  SearchFieldInput 
} from '@/common';
import text from '@/languages/en_US.json'
import { useRouter } from 'next/navigation';
import { NavbarData } from './NavbarData';
import Image from 'next/image';
import { logo } from '@/Images';
import { SideBarData } from '../sideBar/sideBarData';
import { sideBarDataTypes } from '@/types/data-types';
import getSessionStorageData from '@/utils/getSessionStorageData';


interface NavbarProps {
  handleToggleHamMenu(): void
  openHamMenu: boolean,
  openAvatar: boolean
  handleAvatarClose(): void,
  handleAvatarOpen(event: React.MouseEvent<HTMLElement>): void,
  anchorEl: HTMLElement | null
}

const Navbar: FC<NavbarProps> = ({ handleToggleHamMenu, openHamMenu, anchorEl, handleAvatarClose, handleAvatarOpen, openAvatar }) => {
  const router = useRouter()

  const HamData: sideBarDataTypes[] = [
    {
      icon: 'notifications',
      description: text.NavbarData.notifications,
      pathName: ''
    },
    {
      icon: 'call',
      description: text.NavbarData.callSupport,
      pathName: ''
    },
    ...SideBarData
  ];

  // Use spread operator to create a new array with the modified NavbarData
  const modifiedHamData: sideBarDataTypes[] = [...NavbarData];
  modifiedHamData.splice(1, 0, ...HamData);

  const drawerWidth = '90%'

  const organizationName= getSessionStorageData('orgName') || text.companyDetails.companyName
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" className={`bg-gradient-to-tr from-blue-500 via-indigo-500 to-sky-400 h-[4rem] w-full z-10`}>
        <Toolbar className="justify-between">
          <Typography className={`lg:!text-xl shrink-0 !capitalize`}>{organizationName}</Typography>

          <Box className="flex items-center space-x-2">
            {/* <SearchFieldInput onChange={() => { }} placeholder={text.placeholders.search} searchCls={`w-full`} /> */}

            <Box className="hidden md:flex items-center space-x-5">
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/* Support Section */}
              <FlexItemCenter gap={1} className={`cursor-pointer`}>
                <Call />
                <Typography component={`p`} className={`text-sm`}>
                  {text.support}
                </Typography>
              </FlexItemCenter>
              {/* Profile Section */}
              <Avatar alt="User Avatar" src="" className={`cursor-pointer`} onClick={(e: React.MouseEvent<HTMLElement>) => handleAvatarOpen(e)} />
            </Box>

            {/* For smaller screens, show a menu button to toggle additional options */}
            <Box className="md:hidden cursor-pointer" onClick={handleToggleHamMenu}>
              <MenuIcon />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openHamMenu} onClose={handleToggleHamMenu} anchor='right' sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}>
        <FlexItemCenter className={`h-[5rem] p-5 sticky z-10 top-0 left-0 shadow bg-white`}>
          <FlexBetween className={`!w-full`}>
            <FlexItemCenter gap={2}>
              <Image src={logo} alt={`company logo`} height={50} />
              <Typography component={`p`} className={` !capitalize !font-semibold !text-sm md:!text-2xl`}>
                {text.companyDetails.companyName}
              </Typography>
            </FlexItemCenter>
            <Close onClick={handleToggleHamMenu} className={`cursor-pointer`}/>
          </FlexBetween>
        </FlexItemCenter>
        <nav>
          {modifiedHamData.map((hamData: sideBarDataTypes, idx: number) => <List key={idx}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                router.push(hamData.pathName)
                handleToggleHamMenu
                if(hamData.description === text.NavbarData.logout){
                  sessionStorage.clear()
                }
              }}>
                <ListItemIcon>
                  <Icon>
                    {hamData.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText primary={hamData.description} />
              </ListItemButton>
            </ListItem>
          </List>)}
        </nav>
      </Drawer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openAvatar}
        onClose={handleAvatarClose}
      >
        {NavbarData.map((data: sideBarDataTypes, idx: number) => <MenuItem key={idx} onClick={() => {
          router.push(data.pathName)
          handleAvatarClose()
          if(data.description === text.NavbarData.logout){
            sessionStorage.clear()
          }
        }}>
          <ListItemIcon>
            <Icon>
              {data.icon}
            </Icon>
          </ListItemIcon>
          <ListItemText>
            {data.description}
          </ListItemText>
        </MenuItem>)}
      </Menu>
    </>
  );
};

export default Navbar;
