import React from 'react'

const About = () => {
  return (
    <section
      className="bg-black p-8 flex flex-col lg:flex-row w-100 mt-24 "
      id="about"
    >
      <h2 className="text-center text-6xl font-bold text-white mb-6 md:hidden">
        About me{' '}
      </h2>

      <img
        src="src/assets/aboutme.svg"
        alt=""
        className="md:w-80 h-80 lg:w-full h-full"
      />

      <div className="flex flex-col items-center justify-center">
        <h2
          className="text-center text-6xl font-bold text-white mb-6 hidden md:block"
          style={{
            textShadow:
              ' 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000,0 5px 0 #000, 0 6px 0 #000,0 7px 0 #000, 0 8px 0 #100f0f,0 9px 0 #000, 0 10px 0 #000,0 11px 0 #000, 0 12px 0 #222020, 0 20px 30px rgba(148, 148, 148, 0.5)',
          }}
        >
          About me
        </h2>

        <p className="text-white text-xl text-center my-6">
          Highly motivated and detail-oriented seeking a challenging role as a
          Software Developer to grow as a professional in the field of web
          development . Eager to apply my knowledge in programming and web
          development skills to contribute to a dynamic team and further enhance
          technical skills and expertise.
        </p>
        <div className="flex mt-8 text-pretty capitalize ">
          <a
            href="https://docs.google.com/document/d/132OLWk9NT8CFWLVSDTnfaWhrLz7yAEEsuuKGtWLtX5U/edit?usp=sharing"
            className="btn btn-secondary my-3 mx-auto  "
          >
            know more
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
