import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, styled, Typography } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { grey } from '@mui/material/colors';
import { OfferSummery } from './OfferSummery';
import { Topbar } from '../Components/Topbar';
import { Bottombar } from '../Components/Bottombar';

export const Offers = () => {

    const [openSideBar, setopenSideBar] = useState(false);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 200 },
        { field: 'lastName', headerName: 'Last name', width: 200 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
                }`,
            },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            renderCell: (params) => {
                const showSideModal = (e) => {
                e.stopPropagation();
                    setopenSideBar(true);
                };
                return <Button onClick={showSideModal}><RemoveRedEyeOutlinedIcon/></Button>;
            },
        },
    ];
    
    const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const style = {
        position: 'absolute',
        top: '0%',
        right: '0%',
        height: '100%',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    const MainWrapper = styled(Box)(({theme}) => ({
        width: '100%',
      }))

  return (
    <MainWrapper>
        <Topbar/>
        <Bottombar/>
        <Box sx={{ height: 400, width: '100%', padding: '1rem' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                actions={[
                {
                    icon: RemoveRedEyeOutlinedIcon,
                    tooltip: 'Refresh Data',
                    isFreeAction: true,
                },
                ]}
            />
            <Modal
                open={openSideBar}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: grey[300], padding: '.5rem 1rem'}}>
                        <Typography variant="body1">Offer Overview</Typography>
                        <Box>
                            <Button onClick={e => setopenSideBar(false)} sx={{marginRight: '1rem'}}>Close</Button>
                            <Button variant='contained'>Edit</Button>
                        </Box>
                    </Box>
                    <OfferSummery/>
                </Box>
            </Modal>
        </Box>
    </MainWrapper>
  )
}
