import React, { useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { useState } from 'react';
import Nav from '../Components/Nav';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { addSkills } from '../redux/Reducer';
function SkillsEdit() {
    const state = useSelector(state => state.app)
    const [skills, setSkills] = useState([])
    const [hobbies, setHobbies] = useState([])
    const [subjects, setSubjects] = useState([])
    const [skillOptions, setSkillOptions] = useState([])
    const [hobbyOptions, sethobbyOptions] = useState([])
    const [subjectOptions, setsubjectOptions] = useState([])
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const [data, setData] = useState({
        skills: state.softSkills.skills,
        hobbies: state.softSkills.hobbies,
        subjects: state.softSkills.subjects
    })

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        if (data) {
            dispatch(addSkills(data))
        }
    }, [data])
    useEffect(() => {
        let skillArr = []
        skills?.map(skill => {
            skillArr.push({
                label: skill.value,
                value: skill.value
            })
        })
        setSkillOptions(skillArr);
        let hobbyArr = []
        hobbies?.map(skill => {
            hobbyArr.push({
                label: skill.value,
                value: skill.value
            })
        })
        sethobbyOptions(hobbyArr);
        let subjectArr = []
        subjects?.map(skill => {
            subjectArr.push({
                label: skill.value,
                value: skill.value
            })
        })
        setsubjectOptions(subjectArr);


    }, [skills, hobbies, subjects])

    const handleSkillChange = (e) => {
        console.log(e);
        setData({ ...data, skills: e })
    }
    const handlehobbyChange = (e) => {
        console.log(e);
        setData({ ...data, hobbies: e })
    }

    const handleSubjectChange = (e) => {
        console.log(e, 'chekk');
        setData({ ...data, subjects: e })
    }
    const getData = async () => {
        setLoading(true)
        const skillData = await axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json')
        const hobbiesData = await axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json')
        const SubjectData = await axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json')

        if (skillData && hobbiesData && SubjectData) {
            setLoading(false)
        }

        setSkills(skillData?.data?.result[0].skills);
        setHobbies(hobbiesData?.data?.result[0].hobbies);
        setSubjects(SubjectData?.data?.result[0].subjects);



    }
    console.log('options', skillOptions, hobbyOptions, subjectOptions)

    return (
        <div style={{ padding: ' 20px 10px' }}>
            {loading && <CircularProgress />}

            {!loading && <><Nav navigateTo={'Skills'} />
                <h3 style={{ marginBottom: '15px' }}>I am incredible at these skills</h3>
                <Select defaultValue={data.skills} options={skillOptions} closeMenuOnSelect={false}
                    onChange={e => handleSkillChange(e)}
                    isMulti />
                <h3 style={{ margin: '15px 0' }}>Hobbies I am passionate about</h3>
                <Select defaultValue={data.hobbies} options={hobbyOptions} closeMenuOnSelect={false}
                    onChange={e => handlehobbyChange(e)}
                    isMulti />
                <h3 style={{ margin: '15px 0' }}>My Favourite Subjects Are</h3>
                <Select defaultValue={data.subjects} options={subjectOptions} closeMenuOnSelect={false}
                    onChange={e => handleSubjectChange(e)}
                    isMulti /></>}
        </div>
    )
}

export default SkillsEdit