import React from 'react'
import Modal from '@mui/material/Modal';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import EthicalCode from './EthicalCode';
import { useSelector } from 'react-redux';
import VurtuallyMet from './VurtuallyMet';
function Ratings() {
    const { ethicalCount } = useSelector(state => state.app)
    const [open, setOpen] = React.useState(false);
    const [openMet, setOpenMet] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenMet = () => setOpenMet(true);
    const handleClose = () => setOpen(false);
    const handleCloseMet = () => setOpenMet(false);
    return (
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', marginTop: '20px' }}>
            <fieldset style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', color: 'white', border: 'none', borderRadius: '10px' }}>
                <legend style={{ padding: '5px', background: 'rgba(0,0,0,0.3', margin: 'auto', borderRadius: '100%', }}><StarRateRoundedIcon fontSize='large' htmlColor='white' /></legend>
                <p style={{ fontSize: '20px' }}>Ratings</p>
                <div onClick={handleOpen} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px' }}>
                    <span>{ethicalCount}</span>
                    <p style={{ fontSize: '12px', marginLeft: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, beatae?</p>
                </div>
                <Modal
                    style={{ overflow: 'scroll', top: '30px' }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <EthicalCode />
                </Modal>
                <hr />
                <div onClick={handleOpenMet} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', paddingBottom: '35px' }}>
                    <span>{ethicalCount}</span>
                    <p style={{ fontSize: '12px', marginLeft: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, beatae?</p>
                </div>
                <Modal
                    style={{ overflow: 'scroll', top: '30px' }}
                    open={openMet}
                    onClose={handleCloseMet}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <VurtuallyMet />
                </Modal>
            </fieldset>



        </div>
    )
}

export default Ratings