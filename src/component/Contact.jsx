import React from 'react'

const Contact = () => {
  return (
    <section
      className="w-full p-8 lg:grid grid-flow-col grid-cols-2"
      id="contact"
    >
      <div className="p-8 flex items-center flex-col">
        <h3
          className="text-6xl font-bold text-white capitalize mb-4 "
          style={{
            textShadow:
              ' 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000,0 5px 0 #000, 0 6px 0 #000,0 7px 0 #000, 0 8px 0 #100f0f,0 9px 0 #000, 0 10px 0 #000,0 11px 0 #000, 0 12px 0 #222020, 0 20px 30px rgba(148, 148, 148, 0.5)',
          }}
        >
          contact
        </h3>
        <p className="text-base text-gray-600 mb-8 text-center">
          "Thank you for taking the time to review my portfolio. If you're
          interested in know more about me and my work or would like to discuss
          potential employment opportunities, I would love to hear from you!I
          work hard and wiil be great asset for you. You can reach me using the
          contact information:
        </p>
        <div className="flex flex-col items-center my-4">
          <h4 className="text-white font-semibold">Adress</h4>
          <p className="text-gray-500 text-sm">Fatehpur (Uttar Pradesh)</p>
        </div>
        <div className="flex flex-col items-center my-4">
          <h4 className="text-white font-semibold">Phone No</h4>
          <a href='tel:8896952594' className="text-gray-500 text-sm">+91 8896952594</a>
        </div>
        <div className="flex flex-col items-center my-4">
          <h4 className="text-white font-semibold">Email</h4>
          <a href='mailto:shivamsinghgautam397@gmail.com' className="text-gray-500 text-sm">
            shivamsinghgautam397@gmail.com
          </a>
        </div>
      </div>
      <div className="p-8 flex items-center flex-col">
        <form
          action="https://script.google.com/macros/s/AKfycbwaXNWEG2ykToU2qMMhSHD3V3naO7ugyWvle08PWvy5PmiDudWE9QQwWEYCxe78Yy1G-g/exec"
          method="POST"
          className="bg-zinc-800 p-4 rounded-sm shadow-slate-100 w-full px-8"
          style={{
            boxShadow: ' 0 20px 25px -5px #000, 0 8px 10px -6px #000',
          }}
        >
          <h2
            className="text-center text-4xl font-bold text-white capitalize my-4"
            style={{
              textShadow:
                ' 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000,0 5px 0 #000, 0 6px 0 #000,0 7px 0 #000, 0 8px 0 #100f0f,0 9px 0 #000, 0 10px 0 #000,0 11px 0 #000, 0 12px 0 #222020, 0 20px 30px rgba(148, 148, 148, 0.5)',
            }}
          >
            contact form
          </h2>
          <div className="border-b-2 my-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 bg-transparent outline-none text-white"
            />
          </div>
          <div className="border-b-2 my-4">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-transparent outline-none text-white"
              required
            />
          </div>
          <div className="border-b-2 my-4">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="w-full p-2 bg-transparent outline-none text-white"
              required
            />
          </div>
          <div className="border-b-2 my-4">
            <textarea
              name="message"
              type="text"
              placeholder="Message"
              className="w-full p-2 bg-transparent outline-none text-white"
              col="3"
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center my-2">
            <button className="btn btn-secondary items-center" type="submit">
              Connect
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
