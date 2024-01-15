import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaGithubAlt, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
// import hero_icon from '../assets/hero_icon.svg'
import blackHero from '../assets/blackhero.png'
import portfolio from '../assets/portfolio.svg'

const Hero = () => {
  return (
    <div
      className="hero  bg-black"
      style={{
        backgroundImage:
          'url(https://w0.peakpx.com/wallpaper/570/33/HD-wallpaper-man-made-street-lamp-dark.jpg)',
        height: '90vh',
      }}
      id="hero"
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1
            className="mb-5 text-7xl font-bold"
            style={{
              textShadow:
                ' 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000,0 5px 0 #000, 0 6px 0 #000,0 7px 0 #000, 0 8px 0 #100f0f,0 9px 0 #000, 0 10px 0 #000,0 11px 0 #000, 0 12px 0 #222020, 0 20px 30px rgba(148, 148, 148, 0.5)',
            }}
          >
            Hey there, <br />I am Shivam
          </h1>
          <p className="mb-5">
            I am Front end React js Developer based in India
          </p>
          <div className="flex justify-around">
            <a
              href="https://docs.google.com/document/d/132OLWk9NT8CFWLVSDTnfaWhrLz7yAEEsuuKGtWLtX5U/edit?usp=sharing"
              className="btn btn-secondary text-white hover:text-black capitalize "
              style={{
                width: '8rem',
              }}
            >
              get CV
            </a>
            <a
              href="#contact"
              className="btn btn-secondary text-white hover:text-black capitalize "
              style={{
                width: '8rem',
              }}
            >
              contact me
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="diff aspect-[16/9]">
    //   <div className="diff-item-1">
    //     <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
    //       DAISY
    //     </div>
    //   </div>
    //   <div className="diff-item-2">
    //     <div className="bg-base-200 text-9xl font-black grid place-content-center">
    //       DAISY
    //     </div>
    //   </div>
    //   <div className="diff-resizer"></div>
    // </div>
  )
}

export default Hero
