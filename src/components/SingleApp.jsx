import { useParams } from 'react-router-dom'
import { projects } from '../data'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs'
import Footer from './Footer'
import { FiGithub } from 'react-icons/fi'
import { RiExternalLinkFill } from 'react-icons/ri'
import { Fade } from 'react-awesome-reveal'

const SingleApp = () => {
  let { name } = useParams()
  let projectSelected = projects.find((project) => project.name === name)
  return (
    <section className="h-full mb-14 max-w-xl">
      <Fade direction="up" triggerOnce={true}>
        <Link to="/" className="flex items-center text-[15px] font-medium py-2 return">
          <BsArrowLeftShort className="bg-slate-100 rounded-full text-slate-950 me-2 arrow" />
          Back to Home
        </Link>
      </Fade>
      <h2 className="text-6xl font-bold mb-9 max-sm:text-[40px]">{projectSelected.title}</h2>
      <p className="text-[#888b8f]">{projectSelected.resume}</p>

      {/* Links to repo and live */}
      <div className="flex justify-around mt-4 mb-10 max-sm:flex-col max-sm:items-center max-sm:py-6">
        <a
          target="blank"
          href={projectSelected.url1}
          className="flex justify-center items-center bg-[#343639] mr-3 w-[14rem] my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-3 max-sm:w-[14rem]"
        >
          <FiGithub style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">View source code</p>
        </a>

        <a
          target="blank"
          href={projectSelected.url2}
          className="flex justify-center items-center bg-[#343639] mr-3 w-[14rem] my-7 py-3 px-6 rounded-full font-semibold text-sm hover:scale-105 hover:transition-all hover:ease-in-out max-sm:my-0 max-sm:w-[14rem]"
        >
          <RiExternalLinkFill style={{ fontSize: '1.3rem' }} />
          <p className="ml-3">View live project</p>
        </a>
      </div>

      <img
        src={projectSelected.image1}
        alt={projectSelected.title}
        title={projectSelected.title}
        className="rounded-3xl w-full object-cover max-sm:h-52"
      />

      <p className="text-[#888b8f] my-14">{projectSelected.info1}</p>

      <img
        src={projectSelected.image2}
        alt={projectSelected.title}
        title={projectSelected.title}
        className="rounded-3xl w-full object-cover max-sm:h-52 max-h-[378px]"
      />

      <p className="text-[#888b8f] mt-14">{projectSelected.info2}</p>
      <p className="text-[#888b8f] mt-6 mb-16">{projectSelected.info3}</p>

      <Footer />
    </section>
  )
}

export default SingleApp
