import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function UpdateUser(props) {

    const [editValues, setEditValues] = useState({
        id: props.id,
        first_name: props.first_name,
        last_name: props.last_name,
        email: props.email,
        phone: props.phone,
        password: props.password,
    })

    const handleEditUser = (value) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }));
    }

    function comeback() {
        window.location('/viewuser');
    }

    function handleUpdateUser() {
        axios.put("http://localhost:3001/update", {
            id: editValues.id,
            first_name: editValues.first_name,
            last_name: editValues.last_name,
            email: editValues.email,
            phone: editValues.phone,
            password: editValues.password,
        });
        comeback()
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center w-screen h-screen mt-35">
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-5xl">Update User</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="firstname" type="text" placeholder="First Name*" onChange={handleEditUser} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="lastname" type="text" placeholder="Last Name*" onChange={handleEditUser} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="Email*" onChange={handleEditUser} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                id="phone" type="number" placeholder="Phone*" onChange={handleEditUser} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 mb-2 rounded-lg focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="Password*" onChange={handleEditUser} />
                        </div>

                        <div className="my-2 lg:w-1/4 flex items-center justify-center">
                            <button onClick={handleUpdateUser} className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                Update User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
