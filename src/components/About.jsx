import linkdin from "/assets/linkedin.png";
import github from "/assets/github.png";
import gmail from "/assets/gmail.png";

function About() {
  return (
    <section
      id="about"
      className="flex lg:w-8/12  sm:min-h-[50vh] mx-auto md:flex-row flex-col md:justify-around  items-center  bg-white rounded-lg shadow-lg my-8"
    >
      <div className="flex md:ml-8 sm:w-1/3 flex-col items-center justify-center">
        <img
          className=" m-4 p h-48 w-48 rounded-full hover:shadow-lg hover:border-gray-400 hover:border-2"
          src="/assets/profile.jpeg"
          alt="amit"
        />
        <div className="flex gap-2">
          <a href="mailto:amit@coderespite.com">
            <img
              className="w-12 h-12 p-2 rounded-2xl hover:border-gray-400 hover:border-2 hover:shadow-lg"
              src={gmail}
              alt="gmail"
            />

            {/* <IconContext.Provider
              value={{ className: "text-3xl p-1 bg-black rounded-full text-white" }}
            >
              <div>
              <CgMail />
              </div>
            </IconContext.Provider> */}
          </a>
          <a href="https://www.linkedin.com/in/amit265/" target="_blank">
            <img
              className="w-12 h-12 p-2 rounded-2xl hover:border-gray-400 hover:border-2 hover:shadow-lg"
              src={linkdin}
              alt="linkdin"
            />
          </a>
          <a href="https://github.com/amit265" target="_blank">
            <img
              className="w-12 h-12 p-2 rounded-2xl hover:border-gray-400 hover:border-2 hover:shadow-lg"
              src={github}
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className="flex md:w-2/3 px-4 pb-4 flex-col md:mr-8 sm:px-2 text-[#323954]">
        <h2 className="text-2xl sm:text-4xl pt-4 px-2 font-semibold sm:mb-4 text-center sm:text-left flex items-center">
          About Me
        </h2>

        <p className=" mx-auto text-base sm:text-lg px-2 text-justify pt-4">
          Hi, I&apos;m Amit - a developer who enjoys building clean, functional products that people can actually use. I work mainly with React Native, React, and Android, and I like turning simple ideas into polished, working apps. I&apos;m always experimenting, learning, and building, and I enjoy working with people who value practical problem-solving and thoughtful design.
        </p>
        <p className=" mx-auto text-base sm:text-lg px-2 text-start pt-4">
          Feel free to check out my work, and connect with me on LinkedIn. I&apos;m
          always ready for new challenges and opportunities.
        </p>
      </div>
    </section>
  );
}

export default About;
