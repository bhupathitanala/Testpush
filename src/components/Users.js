import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const User = () => {
    const [userData, setUserData] = useState([{}])
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUserData = {
            name:name,
            roll:id
        };
        axios.post('http://localhost:3005/users', newUserData)
        .then((res)=>{
            alert('Success');
            setName('');
            setId("");
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:3005/users')
        .then((res)=>setUserData(res.data))
    },[])

    const hangleEdit = (e)=>{
        console.log(e.target.value)
    }
    
    const deleteUser = (id)=>{
        axios.delete(`http://localhost:3005/users/${id}`)
        .then((res)=>{
            alert('Deleted')
        })
        .catch((error)=>{
            console.error("Error Deleting User")
        })
    }
    const handleEdit=(user)=>{
        const {name,id} = user
        setName(name)
        setId(id)
    }
    console.log(userData)
    return(
        <>
        <div className='col-md-4'>
        {
            userData.map((e,i)=>{
                return(
                    <>
                    <h1>{e.roll} -- {e.name} <button onClick={()=>deleteUser(e.id)}>Delete</button> 
                    <button onClick={()=>handleEdit(e)}>Edit</button>
                    </h1>
                    </>
                )
            })
        }
        </div>

        <form class="row g-3 justify-content-center" method='post' onSubmit={handleSubmit}>
        <div className='col-md-6 bg-info'>
            <h3 className='text-center'>Add</h3>
            <div className='mb-3'>
                <label>Roll Number</label>
                <input type="text" value={id} placeholder='Enter Value' onChange={(e)=>setId(e.target.value)} className='form-control' required/>
            </div>

            <div className='mb-3'>
                <label>Name</label>
                <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='form-control' required/>
            </div>
            <button className='btn btn-danger float-end' >Submit</button>
        </div>
    </form>
        </>
    )
}