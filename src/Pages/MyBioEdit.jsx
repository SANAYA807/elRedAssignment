import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import PdfCardUploader from '../Components/PDF';
import { addAbout } from '../redux/Reducer';

function MyBioEdit() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.app)
    const [about, setAbout] = useState({
        about: state.about,
        count: state.count,
        bloodGroup: state.bloodGroup,
    })
    const [file, setFile] = useState('')
    const bloodGroups = [
        'Select',
        'A RhD positive (A+)',
        'A RhD negative (A-)',
        'B RhD positive (B+)',
        'B RhD negative (B-)',
        'O RhD positive (O+)',
        'O RhD negative (O-)',
        'AB RhD positive (AB+)',
        'AB RhD negative (AB-)']

    useEffect(() => {
        dispatch(addAbout(about))
    }, [about])

    const handleOnChange = (e) => {
        if (e.target.name == 'about') {
            setAbout({ ...about, count: e.target.value.length, [e.target.name]: e.target.value })
        } else {
            setAbout({ ...about, [e.target.name]: e.target.value })

        }

        console.log(e)
    }

    return (
        <div style={{ padding: ' 20px 10px' }}>
            <Nav navigateTo={'My Bio'} />
            <h3>Write Someyhing About Yourself</h3>
            <textarea onChange={handleOnChange} value={about.about} name='about' type="text" rows={8} style={{ border: 'none', background: '#f3f4f9', padding: '5px', width: '100%', borderRadius: '10px', margin: '15px 0', marginBottom: '10px' }} />
            <div style={{ display: 'flex', color: 'gray', fontSize: '10px', justifyContent: 'flex-end' }}>
                <p>{about.count}/500</p>
            </div>
            {/* <div style={{ display: 'grid', placeItems: 'center', backgroundColor: '#f3f4f9', height: '180px', border: '3px dashed gray', margin: '25px 0' }}> */}


            <PdfCardUploader />

            {/* </div> */}
            <h3 style={{ marginTop: '10px' }}>Blood Group</h3>
            <select name="bloodGroup" id="cars" value={about.bloodGroup} onChange={handleOnChange} style={{ width: '100%', padding: '10px', background: '#f3f4f9', border: 'none', marginTop: '15px', color: 'gray', fontSize: '15px' }}>
                {bloodGroups.map((bloodGroup) => <option value={bloodGroup}>{bloodGroup}</option>)}

            </select>


        </div >
    )
}

export default MyBioEdit