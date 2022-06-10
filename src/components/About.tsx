import about from '../assets/about-1.jpg';

export const About = () => {
  return (
    <div className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] h-full flex flex-col  items-center justify-center text-primary mx-auto md:flex-row md:justify-around '>
        <p className='w-[330px] text-2xl mt-10 md:w-[450px] md:text-3xl'>
          I'm JavaScript Full Stack Developer located in Lithuania. Looking for
          a full-time entry/junior developer position. Interested in Javascript,
          React.js, Redux-toolkit.js, Node.js, Express.js, MongoDB, MySQL, Git.
          I am also familiar with Linux OS.
        </p>
        <div>
          <img
            className='w-[330px] h-[330px] rounded-full mt-6'
            src={about}
            alt='about-1'
          />
        </div>
      </div>
    </div>
  );
};
