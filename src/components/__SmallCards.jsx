import arrow from '../assets/svg/arrow.svg'

const SmallCards = ({ title, icon, subtitle, href }) => {
  return (
    <>
      <a
        target='blank'
        href={href}
        className="bg-[#343639] p-2 w-[120px] rounded-xl hover:scale-105 ease-in-out duration-300 relative card max-sm:w-[83px]"
      >
        <div className="card-icon opacity-0">
          <img src={arrow} alt="" className="absolute right-0 top-0" />
        </div>

        <img src={icon} alt="" className="rounded-xl h-9 object-cover" />

        <div className="mt-4">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-400 max-sm:hidden">{subtitle}</p>
        </div>
      </a>
    </>
  )
}

export default SmallCards
