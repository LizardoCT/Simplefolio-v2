// import React from 'react'
import Icons from '../components/Icons'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <div className="h-full mb-14 max-sm:w-full">
      <div>
        <Fade direction="up" triggerOnce={true}>
          <Link to="/" className="flex items-center text-[15px] font-medium py-2 return">
            <BsArrowLeftShort className="bg-slate-100 rounded-full text-slate-950 me-2 arrow" />
            Back to Home
          </Link>
        </Fade>

        <Fade direction="up" delay="10" triggerOnce={true}>
          <h1 className="text-6xl font-bold mb-9 max-sm:text-[40px]">Contact</h1>
          <p className="text-[#888b8f]">Let's Collaborate on a new project!</p>
        </Fade>

        <Fade direction="up" triggerOnce={true}>
          <Icons />
        </Fade>
      </div>

      <p className="mb-9 font-semibold">Send me a message!</p>
      <form className="flex-col flex">
        <label className='max-sm:flex"'>
          <input
            required
            className="rounded-md p-3 pr-12 mr-3 border border-transparent focus:outline-none  max-sm:max-w-[165px]"
            type="text"
            placeholder="Name"
          />
          <input
            required
            className="rounded-md p-3 pr-12 border border-transparent focus:outline-none max-sm:max-w-[165px]"
            type="email"
            placeholder="Email"
          />
        </label>

        <label>
          <textarea
            required
            className="rounded-md p-3 w-full h-36 mt-3 border border-transparent focus:outline-none"
            type="text"
            placeholder="Message"
          />
        </label>

        <button className="font-semibold bg-slate-100 text-stone-950 rounded-lg p-3 mt-2 hover:bg-slate-300 transition-all ease-in ">
          Send
        </button>
      </form>

      {/* <div className="my-16 flex items-center justify-center max-sm:flex-col">
        <a className="font-semibold" href="https://wa.me/51987654321" target="blank">
          +51 987654321
        </a>
        <p className="ml-10 max-sm:ml-0 max-sm:mt-6">my-email@gmail.com</p>
      </div> */}

      <p className="mt-16 mb-10 text-sm text-gray-400 font-medium text-center">
        <span className="mr-2">© 2023 Simplefolio</span>
        <strong>•</strong>
        <span className="ml-2">
          Made with ❤️ by
          <a href="https://github.com/" target="blank" className="ml-1 text-fuchsia-200">
            Nene
          </a>
        </span>
      </p>
    </div>
  )
}

export default Contact
