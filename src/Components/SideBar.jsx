import { Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { Logo } from './Logo'
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const Aside = styled(Box)(({theme}) => ({
    width: '360px',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
        display: 'block',
    }
}))
const AsideWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    backgroundColor: theme.palette.mode === 'dark' ? grey[900] : grey[200],
    height: '100vh',
}))

const MenuBox = styled(Card)(({theme}) => ({
    width: '70px',
    borderRadius: '0',
    textAlign: 'center',
}))

export const SideBar = () => {
  return (
    <Aside>
        <AsideWrapper>
            <MenuBox>
                <Logo/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <OtherHousesOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GridViewOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalShippingOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PieChartOutlineOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FolderOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </MenuBox>
            <Box sx={{width: '100%', marginTop: '50px'}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <LocalOfferOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Others" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <CategoryOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Category" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <WorkspacePremiumOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Brands" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </AsideWrapper>
    </Aside>
  )
}
