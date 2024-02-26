"use client"
import Navbar from "@/components/navbar"
import { NavbarHooks } from "./Hooks"

const NavBarContainer = () => {

  const { anchorEl, handleAvatarClose, handleAvatarOpen,
    openAvatar, openHamDrawer,
    handleToggleHamDrawer } = NavbarHooks();

  return <Navbar anchorEl={anchorEl}
    handleAvatarClose={handleAvatarClose}
    handleAvatarOpen={handleAvatarOpen}
    handleToggleHamMenu={handleToggleHamDrawer}
    openAvatar={openAvatar}
    openHamMenu={openHamDrawer}
  />
}

export default NavBarContainer