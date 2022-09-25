import React from 'react'
import { Typography, IconButton, styled, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { grey } from '@mui/material/colors';

const StyledAppBar = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
    borderBottom: '1px solid',
    borderColor: grey[300],
}))

const StyledAppBarWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
}))

export const Topbar = () => {
  return (
    <StyledAppBar>
        <StyledAppBarWrapper>
            <Box>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, display: { xs: 'block' , md: 'none' } }}
                    >
                    <MenuIcon />
                </IconButton>
                <Breadcrumbs aria-label="breadcrumb" sx={{display: {xs: 'none', md: 'block'}}}>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Inventory
                    </Link>
                    <Typography color="text.primary">Offers</Typography>
                </Breadcrumbs>
            </Box>
            <Box>
                <IconButton color="inherit"><NotificationsNoneIcon/></IconButton>
            </Box>
        </StyledAppBarWrapper>
    </StyledAppBar>
  )
}
