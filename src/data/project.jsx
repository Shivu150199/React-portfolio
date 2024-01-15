import { FaGithubAlt,FaLinkedin } from 'react-icons/fa'


import { SiFrontendmentor, SiGmail } from 'react-icons/si'

export const pages = [
  {
    id: '#project',
    title: 'Latest Works',
  },
  {
    id: '#contact',
    title: 'Say Hello !',
  },
  {
    id: '#about',
    title: 'about',
  },
]

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/shivam-singh-gautam-9b3534273/',
  },
  {
    id: 2,
    icon: <FaGithubAlt />,
    url: 'https://github.com/Shivu150199',
  },
  {
    id: 3,
    icon: <SiFrontendmentor />,
    url: 'https://www.frontendmentor.io/profile/Shivu150199',
  },
  {
    id: 4,
    icon: <SiGmail />,
    url: 'mailto:shivamsinghgautam397@gmail.com',
  },
]
