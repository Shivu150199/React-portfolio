import React from 'react'

import { pages, socialLinks } from '../data/project'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'

import { SiFrontendmentor, SiGmail } from 'react-icons/si'

// const pages=[
//   {
//     id:'#project',
//     title:'Work',

//   },
//   {
//     id:'#contact',
//     title:'Say Hello !',

//   },
//   {
//     id:'#about',
//     title:'about',

//   },
 
// ]


const Navbar = () => {
  return (
    <nav
      className="z-10 w-screen px-8 py-6 bg-black  flex items-center justify-center shadow-2xl sticky top-0"
      id="nav"
    >
      <div className="flex items-center justify-between w-full">

        <ul className="flex gap-6 text-pretty text-gray-300 text-base font-semibold " >
        {
          pages.map((item)=>{
          return <li className="hover:text-fuchsia-800 capitalize " key={item.id}>
      <a href={item.id}>{item.title}</a>
    </li>
          })
        }
  </ul>
      
        <ul className="flex gap-8 text-xl text-gray-200 ">
          {
            socialLinks.map((item)=>{
              return (
                <li className="hover:text-fuchsia-800" key={item.id}>
                  <a href={item.url}>
                    {item.icon}
                  </a>
                </li>
              )
            })
          }
     
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
