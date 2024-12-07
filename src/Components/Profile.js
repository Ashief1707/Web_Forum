import React from "react";
import Konten from "./Konten";

function Profile({ profile }){
    return(
        <div>
            <div className="flex sticky top-0 backdrop-blur-md">
                <div className="flex-1 mx-2">
                    <h2 className="px-4 py-2 text-xl font-semibold text-white">Profile</h2>
                </div>
                <div className="flex-1 px-4 py-2 mx-2">
                    <a href="" className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                        <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <g>
                                <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div>
            <hr className="border-gray-800"></hr>
                <div className="flex justify-start">
                    <div className="px-4 py-2 mx-2">
                        <a href="" className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                            <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <g>
                                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </div> 
                    <div className="mx-2 my-2">
                        <h2 className="mb- text-xl font-bold text-white">Miyuzaki San</h2>
                        <p className="mb-0 w-48 text-xs text-gray-400">0 Tweets</p>
                    </div>
                </div>
                <hr className="border-gray-800"></hr>
            </div>
            <div>
                <div className="w-full bg-cover bg-no-repeat bg-center h-[200px] bg-[url('https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200')]">
                    <img className="w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="" />
                </div>
                <div className="p-4">
                    <div className="flex w-full">
                        <div className="flex flex-1">
                            <div className="mt-[-6rem]">
                                <div className="h-36 w-36 md rounded-full  avatar">
                                    <img className="h-36 w-36 md rounded-full  border-4 border-gray-900" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-right">
                            <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none  focus:ring  max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1 justify-center w-full mt-3 ml-3">
                        <div>
                            <h2 className="text-xl leading-6 font-bold text-white">Miyuzaki San</h2>
                            <p className="text-sm leading-5 font-medium text-gray-600">@san_miyuzaki</p>
                        </div>
                        <div className="mt-3">
                            <p className="text-white leading-tight mb-2">Content Creator / Designer / Entrepreneur <br/>Dont Forget Follow Me </p>
                        </div>
                        <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                            <div className="text-center pr-3"><span className="font-bold text-white">145</span><span className="text-gray-600"> Following</span></div>
                            <div className="text-center px-3"><span className="font-bold text-white">1m </span><span className="text-gray-600"> Followers</span></div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-800"></hr>
            </div>
            <Konten />
            <Konten />
            <Konten />
        </div>
    )
};

export default Profile;