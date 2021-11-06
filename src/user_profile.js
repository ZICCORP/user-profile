import React from 'react';
import img from './img/pic2.jpeg';


function Profile() {

    return <>
        <div>
            <nav className="bg-gray-100 flex justify-between py-4">
                <div>
                    <h1 className="font-bold mx-4">
                        <a href="/">Gogu</a>
                    </h1>
                </div>
                <ul className="text-sm flex">
                    <li className="mr-14">
                        <a href="#">
                            <span>home</span>
                        </a>
                    </li>
                    <li className="mr-14">
                        <a href="#">
                            <span>about</span>
                        </a>
                    </li>
                    <li className="mr-14">
                        <a href="#">
                            <span>contact</span>
                        </a>
                    </li>
                    <li className="mr-40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <img src={img} alt="pic" className="inline-block p-1 w-8 h-8 pl-2  rounded-full object-cover" />

                        <span className=" w-9 rounded m-4 p-2 border px-7 py-1 pb-2 bg-indigo-900 text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 inline-block -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <button className="text-xs pl-2">upload</button>
                        </span>
                    </li>

                </ul>
            </nav>
            <main className="px-16 py-6 grid grid-cols-2">
                <div>
                    <h2 className="font-bold pb-2">Settings</h2>
                    <ul className="text-sm">
                        <li className="pb-3 font-semibold">
                            <a href="#">public profile</a>
                        </li>
                        <li className="pb-3">
                            <a href="#">Account settings</a>
                        </li>
                        <li className="pb-3">
                            <a href="#">notifications</a>
                        </li>
                        <li>
                            <a href="#">pro account</a>
                        </li>
                    </ul>
                </div>
                <div>

                    <div className="-ml-80">
                        <h2 className="font-bold">Public profile</h2>
                        <ul className="text-sm">
                            <li className="flex pb-7">
                                <img src={img} alt="thumnail" className="p-1 w-24 h-24  rounded-full object-cover" />
                                <div className="pl-4 mt-4">
                                    <button className="block border rounded p-1 text-xs py-1 px-2 bg-indigo-900 text-white">change picture</button>
                                    <button className="block border rounded p-1 text-xs py-1 px-3 mt-2">delete picture</button>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="mr-2">
                                    <label htmlFor="" className="block font-semibold">First Name</label>
                                    <input type="text" name="" id="" value="Frank" className="border h-9 rounded pl-2" />
                                </div>
                                <div>
                                    <label htmlFor="" className="block pl-2 font-semibold">Last Name</label>
                                    <input type="text" name="" id="" value="Chuka" className="border ml-2 h-9 rounded pl-2" />
                                </div>
                            </li>
                            <li className="mt-4">
                                <div>
                                    <label htmlFor="" className="block pl-2 font-semibold">Email</label>
                                    <input type="email" name="" id="" value="frankchuka250@gmail.com" className="border ml-2 w-80 h-9 rounded pl-2" />
                                </div>
                            </li>
                            <li className="mt-4">
                                <div>
                                    <label htmlFor="" className="block pl-2 font-semibold">Profession</label>
                                    <input type="text" name="" id="" value="machine learning researcher" className="border ml-2 w-80 h-9 rounded pl-2" />
                                </div>
                            </li>
                            <li className="mt-4 ml-2">
                                <div>
                                    <label htmlFor="" className="block pl-2 font-semibold">Bio</label>
                                    <textarea name="" id="" cols="47" rows="5" value="I build mathematical model of the brain" className="border pl-2"></textarea>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <h2 className="font-bold pl-2 mb-2 text-sm mt-7">Online presence</h2>
                            <ul className="text-sm">
                                <li className="border rounded pl-2 w-80 h-9 ml-2 pt-2">
                                    <span className="pr-2"><svg width="24" height="24" fill="currentColor" class="text-black-200 mr-3 text-opacity-50 transform inline-block"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path></svg></span>
                                    <a href="#">https://www.github.com/ZICCORP</a>
                                </li>
                                <li className="border rounded pl-2 w-80 h-9 ml-2 pt-2 mt-2">
                                    <span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="text-black-200 mr-3 text-opacity-50 transform inline-block" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                    </svg></span>
                                    <a href="#">https://www.frankchuka.com</a>
                                </li>
                                <li className="pl-2 w-80 h-9 ml-2 pt-2 mt-2 text-blue-600">
                                    <span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="mr-3 text-opacity-50 transform inline-block" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg> <a href="#" className="-ml-5 text-xs">Add other</a></span>

                                </li>
                            </ul>

                        </div>
                    </div>



                </div>
            </main>

        </div>
    </>

};

export default Profile;