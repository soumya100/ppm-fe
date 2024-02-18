import { FlexBox } from "@/common"
import SideBar from "@/components/sideBar"
import FooterContainer from "@/container/Footer"
import NavBarContainer from "@/container/Navbar"
import { Box } from "@mui/material"
import { FC, ReactNode } from "react"

interface LayoutInterface {
  children: ReactNode
}

const Layout: FC<LayoutInterface> = ({ children }) => {
  return <Box className={`w-full min-h-screen`}>
    <NavBarContainer />
    <FlexBox>
      <SideBar />
      <Box className="min-h-screen" sx={{ flexGrow: 1}}>
        <main>
          {children}
        </main>
        <FooterContainer />
      </Box>
    </FlexBox>
  </Box>
}

export default Layout