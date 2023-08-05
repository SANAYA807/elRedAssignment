import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { addEthicalCount } from '../redux/Reducer';
function EthicalCode() {
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        dispatch(addEthicalCount(users.length))

    }, [users])



    const getData = async () => {
        const data = await axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json')
        console.log(data, 'datataaa');
        setUsers(data?.data.result)

    }


    return (
        <div style={{ background: 'white', marginTop: '50px', padding: '20px', borderRadius: '20px', width: '375px', margin: 'auto' }}>
            <p style={{ color: '#bcbcbc', fontSize: '13px' }}><span style={{ fontSize: '15px', color: 'black' }}>{users.length}</span> say has ethical code of conduct.. </p>

            <div style={{ display: 'flex', margin: ' 20px auto', background: '#f3f4f9 ', alignItems: 'center', justifyContent: 'center', padding: '5px', width: 'fit-content', borderRadius: '5px' }}>
                <Search htmlColor='gray' fontSize='medium' />
                <input type="text" style={{ backgroundColor: '#f3f4f9', borderRadius: '5px', border: 'none', padding: '7px 15px', width: '18rem', }} placeholder='Search...' />
            </div>

            {users && users.map(user =>
                <div style={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
                    <img src={user.dpURL} alt="" style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit: 'cover', marginRight: '10px' }} />
                    <div>
                        <h3>{user.firstname + " " + user.lastname}</h3>
                        <p style={{ color: '#bcbcbc', fontSize: '12px', fontWeight: '100 !important' }}>{user.title[0].value}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default EthicalCode