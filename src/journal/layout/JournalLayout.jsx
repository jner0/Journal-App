import { Box } from "@mui/material";
import { NavBar } from "../components/NavBar";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/*Navbar*/}
        <NavBar drawerWidth={ drawerWidth }/>


        {/*SideBar*/}

        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            {/*ToolBar*/}
            {children}
        </Box>
    </Box>
  )
}
