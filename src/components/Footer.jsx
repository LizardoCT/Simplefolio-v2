import arrow from '../assets/svg/arrow.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="border-t border-t-gray-600">
      <h2 className="text-5xl font-bold mt-20 mr-16 max-sm:mr-0 max-sm:text-[34px]">
        Let’s work together!
      </h2>

      <Link
        to="/contact"
        className="flex bg-[#343639] w-32 my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:w-full max-sm:justify-center"
      >
        <p>Contact</p>
        <img src={arrow} className="ml-4 h-5" />
      </Link>

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

export default Footer
