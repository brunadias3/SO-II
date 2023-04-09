import React from 'react'
import Navbar from './Navbar'

export default function ViewUser() {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Password']
    return (
        <>
            <Navbar />
            <div className='w-full bg-gray-700 mt-40 flex justify-center'>
                <div class="overflow-x-auto rounded-lg">
                    <table class="text-sm text-center text-gray-400 shadow-md">
                        <thead class="text-xs uppercase text-gray-400">
                            <tr>
                                {headers.map((header) =>
                                    <th scope="col" class="px-6 py-3 bg-gray-800">
                                        {header}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4 bg-gray-800">
                                    Silver
                                </td>
                                <td class="px-6 py-4 bg-gray-800">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 bg-gray-800">
                                    $2999
                                </td>
                                <td class="px-6 py-4 bg-gray-800">
                                    xxx
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}