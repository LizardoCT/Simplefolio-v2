import { Link } from 'react-router-dom'
import { projects } from '../data'
import arrow from '../assets/svg/arrow.svg'
import Footer from './Footer'
import { Fade } from 'react-awesome-reveal'

const Products = () => {
  return (
    <section className="max-sm:mx-4">
      <div className="mt-10 pb-14 border-t pt-10 border-t-gray-600">
        <Fade direction="up" delay="20" triggerOnce={true}>
          <h3 className="font-medium mb-14">My Projects</h3>
        </Fade>
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <Fade direction="up" delay="40" triggerOnce={true} key={project.id}>
              <div className="bg-[#343639] p-2 rounded-xl hover:scale-105 ease-in-out duration-300 relative card max-sm:w-[160px]">
                <Link to={`/projects/${project.name}`}>
                  <div className="card-icon opacity-0">
                    <img src={arrow} alt="" className="absolute right-2 top-1" />
                  </div>
                  <span
                    // href=""
                    className="border border-gray-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#212224]"
                  >
                    {project.category}
                  </span>
                  <div className="my-4">
                    <h3 className="text-sm font-semibold">{project.title}</h3>
                    <p className="text-xs text-[#7a7a7a]">Description</p>
                  </div>
                  <img
                    src={project.image1}
                    alt={project.title}
                    title={project.title}
                    className="rounded-lg h-32 w-full object-cover max-sm:h-20"
                  />
                </Link>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Products
