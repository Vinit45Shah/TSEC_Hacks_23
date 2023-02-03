import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import axios from 'axios';
const Volunteer = () => {
    const [userToNgo, setUserToNgo] = useState([])
    const [ngoToUser, setNgoToUser] = useState([])
    const [data, setData] = useState([])
    
    const url1 = "http://localhost:5000/getMedsToTransfer";
    const url2=" http://localhost:5000/fetchNgoById"
    const url3=" http://localhost:5000/fetchUserById"
    useEffect(() => {
        async function exchange() {
            const response = await axios.get(url1);
            // console.log(response.data)
            setNgoToUser(response.data.ngoToUser)
            setUserToNgo(response.data.userToNgo)
        }
        exchange()
    }, [])

   
        

        useEffect(() => {
            async function Ngo(id) {
                // const id = ngoToUser._id
                const response = await axios.get(url2, {
                    headers: {
                      id: String(id),
                    }});
                console.log(response.data)
                return response.data.address;
            }
            async function User(id) {
                // const id = ngoToUser._id
                const response = await axios.get(url3, {
                    headers: {
                      id: String(id),
                    }});
                console.log(response.data)
                return response.data.address;
            }
            userToNgo.forEach(async element => {
                const add1 = await Ngo(element.ownedby)
                let arr = element;
                arr['receiver'] = add1;

                const add2 = await User(element.addedby)
                arr['sender'] = add2;
                setData([...data, arr])
            });
            console.log(data)
        }, [userToNgo])


        useEffect(() => {
            async function Ngo(id) {
                // const id = ngoToUser._id
                const response = await axios.get(url2, {
                    headers: {
                      id: String(id),
                    }});
                console.log(response.data)
                return response.data.address;
            }
            async function User(id) {
                // const id = ngoToUser._id
                const response = await axios.get(url3, {
                    headers: {
                      id: String(id),
                    }});
                console.log(response.data)
                return response.data.address;
            }
            ngoToUser.forEach(async element => {
                const add1 = await Ngo(element.ownedby)
                let arr = element;
                arr['sender'] = add1;

                const add2 = await User(element.sendto)
                arr['receiver'] = add2;
                setData([...data, arr])

            });
            console.log(data);
          
        }, [ngoToUser])
        
        
    


    return (

        <div>
            <Navbar />
            {
                userToNgo &&

                <div className="relative overflow-x-auto">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sender's address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Receiver's address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userToNgo.map((exchange) => (
                                
                                <tr className="bg-white border-b bg-primary-gray dark:border-gray-700 text-primary-black w-full" key={exchange._id}>
                                {}
                                    <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap">
                                        {exchange.addedby}
                                    </th>
                                    <td className="px-6 py-4">
                                        {exchange.ownedby}
                                    </td>
                                    <td className="px-6 py-4">
                                        {exchange.time}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='btn-primary'>Accept</button>
                                    </td>
                                </tr>
                            ))}
                            {ngoToUser.map((exchange) => (
                                <tr className="bg-white border-b bg-primary-gray dark:border-gray-700 text-primary-black w-full" key={exchange._id}>
                                    <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap">
                                        {exchange.ownedby}
                                    </th>
                                    <td className="px-6 py-4">
                                        {exchange.sendto}
                                    </td>
                                    <td className="px-6 py-4">
                                        {exchange.time}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='btn-primary'>Accept</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )

}
export default Volunteer