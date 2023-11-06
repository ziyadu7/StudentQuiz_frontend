import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'

function UserData() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    axiosInstance.get('/admin/getUserData').then((res => {
      setUserData(res.data.userData)
    })).catch(err => {
      console.log(err);
    })
  },[])

  const acceptUser = (studentId)=>{
    axiosInstance.patch('/admin/acceptUser',{studentId}).then((res)=>{
      console.log(res.data.message);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h2>User Data</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Mark</th>
          <th>Action</th>
        </tr>
        {userData.map((user => (
          <tr>
            <td>{user?.userName}</td>
            <td>{user?.mark}</td>
            <td><button onClick={()=>{
              user.isAccepted ? '': acceptUser(user._id)
            }}>{user?.isAccepted ? '' : 'Accept'}</button></td>
          </tr>
        )))}
      </table>
    </div>
  )
}

export default UserData