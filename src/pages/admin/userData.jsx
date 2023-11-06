import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import NavBar from './navBar'
import toast from 'react-hot-toast'

function UserData() {
  const [userData, setUserData] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    axiosInstance.get('/admin/getUserData').then((res => {
      setUserData(res.data.userData)
    })).catch(err => {
      console.log(err);
    })
  }, [refresh])

  const acceptUser = (studentId) => {
    axiosInstance.patch('/admin/acceptUser', { studentId }).then((res) => {
      toast.success(res?.data?.message)
      setRefresh(!refresh)
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      <NavBar />

      <div className='py-2'>
      <h2 className='text-center text-lg font-semibold '>User Data</h2>
      </div>


      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                Mark
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map(((user,i) => (
              <tr key={user?._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i+1}
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user?.userName}
                </td>
                <td class="px-6 py-4">
                  {user?.mark}
                </td>
                <td class="px-6 py-4">
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