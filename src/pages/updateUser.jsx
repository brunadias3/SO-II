import React from 'react'
import Navbar from './Navbar'

export default function UpdateUser() {
    return (
        <>
            <Navbar />
            <div class="flex justify-center items-center w-screen h-screen mt-35">
                <div class="container mx-auto my-4 px-4 lg:px-20">
                    <div class="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div class="flex">
                            <h1 class="font-bold uppercase text-5xl">Update User</h1>
                        </div>
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 mb-2 rounded-lg focus:outline-none focus:shadow-outline"
                                type="password" placeholder="Password*" />
                        </div>

                        <div class="my-2 lg:w-1/4 flex items-center justify-center">
                            <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
