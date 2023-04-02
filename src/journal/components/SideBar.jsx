import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
    >

        <Drawer
            variant='permanent' //temporary 
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div' >
                    Nemecio Rodriguez
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    [ 'Enero', 'Febrero', 'Marzo', 'Abril' ].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'lalalalalalalalalalal batman digo liderr' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem> 
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}