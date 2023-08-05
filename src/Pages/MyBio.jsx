import React from 'react'
import Nav from '../Components/Nav'
import CreateIcon from '@mui/icons-material/Create';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Ratings from '../Components/Ratings';
import Modal from '@mui/material/Modal';
import PDFfull from '../Components/PDFfull';

function MyBio() {
    const navigate = useNavigate();
    const { about, softSkills, bloodGroup } = useSelector(state => state.app)
    console.log(about, softSkills, 'about');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {
        navigate('/MyBioEdit')
    }
    // console.log(data);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PDFfull />
            </Modal>
            <div style={{ padding: ' 20px 10px' }}>
                <Nav navigateTo={'Bio'} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px' }}>
                    <h3>About Me</h3>
                    <CreateIcon onClick={handleClick} />
                </div>
                <div>
                    <h5 style={{ margin: '15px', display: 'grid', placeItems: 'center' }}>{about ?? 'No About Me Added Yet'} </h5>
                    <hr />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px', margin: '15px 0' }}>
                    <h3>Blood Group</h3>
                    <h5>{bloodGroup ?? 'Select'}</h5>
                </div>
                <div>
                    <div onClick={handleOpen} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '15px 0', borderRadius: '10px', padding: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/48/48639.png" alt="" style={{ width: '30px', padding: '5px' }} />
                            <h3>Resume</h3>
                        </div>
                        <ArrowForwardIos />
                    </div>
                    <hr />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px', marginTop: '15px' }}>
                    <h3>Soft Skills</h3>
                    <CreateIcon onClick={() => navigate('/EditSkilss')} />
                </div>
                <div style={{ padding: '5px', marginTop: '15px' }}>
                    {softSkills.skills &&
                        <>
                            <h3 style={{ marginBottom: '15px' }}>I am incredible at these skills</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {softSkills.skills && softSkills.skills.map(skill => <div style={{ margin: '2px', color: 'white', backgroundColor: 'blue', borderRadius: '40px', width: 'fit-content', fontSize: '12px', padding: '4px' }}>
                                    <p> {skill.value}</p>
                                </div>)}
                            </div>
                        </>
                    }
                    {softSkills.hobbies &&
                        <>
                            <h3 style={{ margin: '15px 0' }}>Hobbies I am passionate about</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {softSkills.hobbies && softSkills.hobbies.map(skill => <div style={{ margin: '2px', color: 'white', backgroundColor: 'blue', borderRadius: '40px', width: 'fit-content', fontSize: '12px', padding: '4px' }}>
                                    <p> {skill.value}</p>
                                </div>)}
                            </div>
                        </>}
                    {softSkills.subjects &&
                        <>
                            <h3 style={{ margin: '15px 0' }}>My Favourite Subjects Are</h3><div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {softSkills.subjects && softSkills.subjects.map(skill => <div style={{ margin: '2px', color: 'white', backgroundColor: 'blue', borderRadius: '40px', width: 'fit-content', fontSize: '12px', padding: '4px' }}>
                                    <p> {skill.value}</p>
                                </div>)}
                            </div>
                        </>}

                </div>
                {!softSkills.hobbies && !softSkills.skills && !softSkills.subjects &&
                    <div>
                        <h5 style={{ margin: '15px', display: 'grid', placeItems: 'center' }}>{'No Soft Skills Added Yet'} </h5>
                        <hr />
                    </div>}

            </div>
            <Ratings />
        </div>
    )
}

export default MyBio