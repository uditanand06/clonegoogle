import Head from 'next/head'
import Link from 'next/link'
import {  ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon,MicrophoneIcon } from '@heroicons/react/outline'
import Avatar from '../components/avatar'
import Image from 'next/image'
import Footer from '../components/footer'
import { useRef  } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;


    if(!term) return;

    router.push(`/search?term=${term}`);
    
    




  } 
  
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <Head>
        <title>Google</title>
      </Head>

      <header className="flex justify-between w-full p-4 text-sm text-gray-700">

        {/* left */}

        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/* Avatar */}
          <Avatar  url='https://gravatar.com/avatar/ead6565b8ca1c552c816ec17574210b9?s=400&d=robohash&r=x'/>

        </div>

      </header>

      {/* body */}
      <form  className='flex flex-col items-center mt-44 flex-grow w-4/5 '>
        <Image src ='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
               height={100}
               width={300}
        />
        <div className="flex border border-1 border-gray-200 rounded-full px-5 py-3  w-full mt-5 items-center  hover:shadow-md focus-within:shadow-md max-w-md sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 rounded-full mr-3 text-gray-600"/>
          <input
            className="focus:outline-none flex-grow" 
            type="text"
            placeholder="Search"
            ref={searchInputRef}

          />
          <MicrophoneIcon className="h-5 rounded-full text-gray-600" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm feeling lucky</button>
        </div>
      </form>
      <Footer />

  

      
    </div>
  )
}
