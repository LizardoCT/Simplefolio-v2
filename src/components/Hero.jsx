/* eslint-disable react/no-unescaped-entities */
import avatar from '../assets/avatar.png'
import Icons from './Icons'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
      <header>
        <div className="text-start max-sm:text-center">
          <div className="flex items-center max-sm:ml-4">
            <Fade direction="up" triggerOnce={true}>
              <div className="pulse mr-3"></div>
              <Link to="/NotFound" className="font-medium cursor-text">
                Available for hire.
              </Link>
            </Fade>
          </div>

          <Fade direction="up" delay="10" triggerOnce={true}>
            <img
              src={avatar}
              className="max-w-[200px] rounded-full bg-[#2d2f31] mx-auto my-10 max-sm:max-w-[160px]"
            />
          </Fade>

          {/* here change your name and add or reduce font size of P tag and H1 */}
          <Fade direction="up" delay="40" triggerOnce={true}>
            <h1 className="text-[4rem] leading-tight font-bold max-sm:text-[2.8rem]">
              Hey, I’m "name"
              <p className="text-[2.9rem] max-sm:text-[2.0rem]">
                a <span className="text-[#6F6F6F]">Frontend developer.</span>
              </p>
            </h1>
          </Fade>
        </div>

        <Fade direction="up" delay="50" triggerOnce={true}>
          <Icons />
        </Fade>

        <Fade direction="up" delay="60" triggerOnce={true}>
          <p className="text-[#888b8f] w-[520px] max-sm:w-[365px] max-sm:text-center">
            My name is "/*YourName/*" and I'm a Frontend developer from "/*Country/*" Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            With HTML5, CSS3, JavaScript skills, frameworks like Tailwind, ReactJS, and knowledge
            about NodeJS, NPM, Git and Github.
          </p>
        </Fade>
      </header>
    </section>
  )
}

export default Hero
