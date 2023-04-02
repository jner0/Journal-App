import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/*Navbar*/}
        <NavBar drawerWidth={ drawerWidth }/>


        {/*SideBar*/}
        <SideBar drawerWidth={ drawerWidth } />

        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            
        {/*ToolBar*/}
          <Toolbar></Toolbar>

            {children}
        </Box>
    </Box>
  )
}
