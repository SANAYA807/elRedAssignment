import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';
function Nav({ navigateTo }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '35px' }}>
            <ArrowBackIosNewIcon fontSize='small' onClick={handleClick} />
            <h3 style={{ fontSize: '15px', marginLeft: '15px' }}>{navigateTo}</h3>
        </div>
    )
}

export default Nav