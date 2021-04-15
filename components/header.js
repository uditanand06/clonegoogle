import { SearchIcon, XCircleIcon,MicrophoneIcon, XIcon } from "@heroicons/react/outline"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./avatar"

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    
    return (
        <header className=" sticky top-0 flex justify-between items-center p-2  bg-white">
            <div className="flex w-full">
                    <Image src ='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                        height={40}
                        width={120}
                        className='cursor-pointer'
                        onClick={() => (router.push('/'))}
                        />
                    <form className='flex flex-grow ml-2 sm:ml-10 border border-gray-200 rounded-full items-center  px-6 py-3 h-10 shadow-md max-w-3xl space-x-2'>
                        <input 
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search"
                            className="focus:outline-none flex-grow w-full"

                            />
                        <XIcon className="h-7 text-blue-600 cursor-pointer transition duration-100 transform hover:scale-125"
                            onClick= {() => {searchInputRef.current.value=""}}
                         />
                        <MicrophoneIcon className="h-7 text-blue-600 hidden sm:inline-flex border-l-2 border-gray-300 pl-2"/>
                        <SearchIcon className="h-7 text-blue-600 hidden sm:inline-flex"/>
                    </form>
                    <Avatar className='ml-auto' url='https://gravatar.com/avatar/ead6565b8ca1c552c816ec17574210b9?s=400&d=robohash&r=x'/>
            </div>
            

            

            
            
        </header>
    )
}

export default Header
