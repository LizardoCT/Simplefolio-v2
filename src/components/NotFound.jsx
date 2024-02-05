import { Link } from 'react-router-dom'
import img from '../assets/1.png'
import paper from '../assets/paper.png'
import cero from '../assets/0.png'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'

const NotFound = () => {
  return (
    <div className="text-black max-md:flex max-md:items-center max-md:h-[85vh]">
      <div className="flex max-md:flex-col">
        <div className="max-md:hidden">
          <img src={img} className="rotate-12 rounded-2xl ml-8 brightness-75" width={300} />
          <img src={img} className="my-20 rounded-2xl brightness-75" width={300} />
          <img src={img} className="-rotate-12 rounded-2xl ml-8 brightness-75" width={300} />
        </div>
        <div className="flex flex-col justify-center items-center ml-40 text-center max-md:ml-0">
          <div className="text-[70px] font-bold flex items-center not-found">
            <span>4</span>
            <img src={cero} className="w-auto h-[70px] rotate-6" />
            <span>4</span>
          </div>
          <Fade direction="up" triggerOnce={true}>
            <span className="not-found-text">
              The page you are looking for doesn't exist or has <br /> been moved. Please go back to
              the homepage.
            </span>
          </Fade>
          <img
            src={paper}
            className="w-[auto] h-[440px] bg-cover bg-center paper max-md:h-[240px] max-md:my-10"
          />
          <Fade direction="up" triggerOnce={true} delay={500}>
            <Link to="/" className="flex items-center text-[15px] font-medium py-6 return">
              <BsArrowLeftShort className="bg-slate-100 rounded-full text-slate-950 me-2 arrow" />
              <span className="text-slate-50">Back to Home</span>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default NotFound
