import React, { useState } from "react";
import { Link } from "react-router-dom";

function LeftBar(){
  const [postModal, setpostModal] = useState(false);

    return (
      <header className=" text-white h-auto md:py-5">
        <div className='w-[275px]'>
          <div className="fixed h-screen">  
            <nav className="px-2 w-[65px] md:w-[250px]">
              <a href="" className="h-8 w-8 text-white md:block hidden mb-4">
                <span className="ml-2 text-4xl font-bold">Fufufafa</span>
              </a>
              <ul>
                <li className="list-none">
                  <Link to="/" className=" mt-2 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300">
                    <div>
                      <svg className="mr-4 h-8 w-8 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"></path>
                      </svg>  
                    </div>
                    <span className="md:block hidden text-xl">Home</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/message" className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                    <div>
                      <svg className="mr-4 h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <span className="md:block hidden text-xl">Messages</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/profile" className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                    <div>
                      <svg className="mr-4 h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <span className="md:block hidden text-xl">Profile</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                    <div>
                      <svg className="mr-4 h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="md:block hidden text-xl">More</span>
                  </a>
                </li>
              </ul>
              <button onClick={() => setpostModal(true)} className="w-[48px] md:w-[230px]">
                <div className="mt-2 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full bg-blue-400 hover:bg-blue-500">
                  <div className="md:invisible">
                    <svg className="mr-4 h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                    </svg>
                  </div>
                  <span className="md:block hidden text-xl px-10">Post</span>
                </div>
              </button>
            </nav>
            <div className="absolute bottom-8">
              <div className="flex-shrink-0 flex hover:bg-gray-800 rounded-full px-2 py-2 mt-12 mr-1 ml-1">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="Profile" />
                    </div>
                    <div className="ml-2 md:block hidden">
                      <p className="text-base leading-6 font-medium text-white">
                        Miyuzaki San
                      </p>
                      <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @san_miyuzaki
                      </p>
                    </div>
                    <svg className="md:block hidden mr-1 ml-7 h-6 w-10" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      {postModal && (
        <ModalPost onClose={() => setpostModal(false)}/>
      )}
      </header>
    )
};

function ModalPost(props){
  return(
    <div className="flex fixed inset-0 bg-gray-500 bg-opacity-50 justify-center items-center">
      <div className="bg-black p-4 rounded-lg shadow-lg md:w-1/3">
        <div className="flex">
          <div className="m-4 w-10 py-1">
            <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
          </div>
          <div className="flex-1 px-1 pt-2 mt-4 w-auto">
            <textarea className="resize-none outline-none bg-transparent text-gray-400 font-medium text-lg w-full" rows="10" cols="50" placeholder="What's happening?"></textarea>
          </div>
          <button onClick={props.onClose} type="button" className="text-white flex hover:bg-red-500 h-7 rounded-full w-7 items-center justify-center">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
          </button>
        </div>
        <hr className="border-gray-800 border-1"></hr>
        <div className="flex">
          <div className="w-10"></div>
            <div className="w-64 px-2">
                <div className="flex items-center">
                  <div className="flex-1 text-center px-1 py-1 m-2">
                    <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                      <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </a>
                  </div>

                  <div className="flex-1 text-center py-2 m-2">
                    <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                      <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                        </path>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="flex-1 text-center py-2 m-2">
                    <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                      <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </a>
                  </div>

                  <div className="flex-1 text-center py-2 m-2">
                    <a href="#" className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                      <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                      </svg>
                    </a>
                  </div>
              </div>
            </div>
            <div className="flex-1">
              <button className="bg-blue-400 hover:bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                  Post
              </button>
            </div>
          </div>
      </div>
    </div>
  )
};

export default LeftBar;