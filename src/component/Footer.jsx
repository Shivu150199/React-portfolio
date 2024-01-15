import React from 'react'

import { pages, socialLinks } from '../data/project'

function Footer() {
  return (
    <footer className="w-full flex items-center flex-col p-6 mt-6" id="footer">
      <ul className="flex gap-4 text-white text-xl mb-4 ">
        <li className="hover:text-fuchsia-800 ">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-fuchsia-800 ">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:text-fuchsia-800 ">
          <a href="#project">Projects</a>
        </li>
        <li className="hover:text-fuchsia-800 ">
          <a href="#about">About</a>
        </li>
      </ul>

      <ul className="flex gap-8 text-white text-2xl mt-6 ">
        {socialLinks.map((item) => {
          return (
            <li className="hover:text-fuchsia-800" key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          )
        })}
      </ul>
      <p className="text-white text-xl mt-6">
        Copyright © <span className="text-fuchsia-800">Shivam Singh</span>{' '}
        Portfolio 2024 All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
