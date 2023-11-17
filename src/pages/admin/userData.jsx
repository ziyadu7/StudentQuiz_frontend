import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import NavBar from './navBar'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

function UserData() {
  const [userData, setUserData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const {token} = useSelector((state)=>state?.Admin)

  useEffect(() => {
    axiosInstance.get('/admin/getUserData',{ headers: { authorization: `Bearer ${token}` } }).then((res => {
      setUserData(res.data.userData)
    })).catch(err => {
      if(err?.response?.data){
        toast.error(err?.response?.data?.errMsg)
      }
    })
  }, [refresh])

  const acceptUser = (studentId) => {
    axiosInstance.patch('/admin/acceptUser', { studentId },{ headers: { authorization: `Bearer ${token}` } }).then((res) => {
      toast.success(res?.data?.message)
      setRefresh(!refresh)
    }).catch((err) => {
      if(err?.response?.data){
        toast.error(err?.response?.data?.errMsg)
      }
    })
  }
  return (
    <div>
      <NavBar />

      <div className='py-2'>
      <h2 className='text-center text-lg font-semibold '>User Data</h2>
      </div>


      <div className="flex justify-center overflow-x-auto">
        <table className="md:w-[800px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Mark
              </th>
              <th scope="col" className="px-6 py-3">
                Number Of Try
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map(((user,i) => (
              <tr key={user?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i+1}
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user?.userName}
                </td>
                <td scope="row" className="px-6 py-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user?.mark}
                </td>
                <td scope="row" className="px-6 py-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user?.noOfTry}
                </td>
                <td scope="row" className="px-6 py-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <button className='bg-green-600 text-black px-1 py-1 min-w-[70px] rounded-sm' onClick={() => {
                    user.isAccepted ? '' : acceptUser(user._id)
                  }}>{user?.isAccepted ? 'Accepted' : 'Accept'}</button></td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserData