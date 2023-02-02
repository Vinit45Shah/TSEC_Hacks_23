import React from 'react'
import Navbar from '../components/Navbar'

const volunteer = () => {
    return (
        <div>
            <Navbar />
            <div class="relative overflow-x-auto">

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Sender's address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Receiver's address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b bg-primary-gray dark:border-gray-700 text-primary-black">
                            <th scope="row" class="px-6 py-4 font-normal whitespace-nowrap">
                                B-1104, Mehta Heights, Soniwadi, Charni Road
                            </th>
                            <td class="px-6 py-4">
                                B-1104, Mehta Heights, Soniwadi, Vasai Road
                            </td>
                            <td class="px-6 py-4">
                                2pm- 4pm
                            </td>
                            <td class="px-6 py-4">
                                <button className='btn-primary'>Accept</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b bg-primary-gray dark:border-gray-700 text-primary-black">
                            <th scope="row" class="px-6 py-4 font-normal whitespace-nowrap">
                                B-1104, Mehta Heights, Soniwadi, Charni Road
                            </th>
                            <td class="px-6 py-4">
                                B-1104, Mehta Heights, Soniwadi, Vasai Road
                            </td>
                            <td class="px-6 py-4">
                                2pm- 4pm
                            </td>
                            <td class="px-6 py-4">
                                <button className='btn-primary'>Accept</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b bg-primary-gray dark:border-gray-700 text-primary-black">
                            <th scope="row" class="px-6 py-4 font-normal whitespace-nowrap">
                                B-1104, Mehta Heights, Soniwadi, Charni Road
                            </th>
                            <td class="px-6 py-4">
                                B-1104, Mehta Heights, Soniwadi, Vasai Road
                            </td>
                            <td class="px-6 py-4">
                                2pm- 4pm
                            </td>
                            <td class="px-6 py-4">
                                <button className='btn-primary'>Accept</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default volunteer