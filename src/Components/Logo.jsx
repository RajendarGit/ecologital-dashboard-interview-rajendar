import { blue } from '@mui/material/colors'
import React from 'react'

const styledLogo = {
    color: blue[400],
    fontSize: '1.3rem',
    fontWeight: '700',
    width: '100%',
    padding: '10px',
}

export const Logo = () => {
  return (
    <div style={styledLogo}>W.</div>
  )
}
