import { motion } from 'framer-motion';
import { Element, Link } from 'react-scroll';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Hero = () => {
  return (
    <Element name='hero' className=' h-screen w-full '>
      {/* container */}
      <div className='max-w-[1000px] h-full mx-auto text-primary font-bold flex flex-col justify-center items-center '>
        <div className='text-5xl sm:text-7xl'>
          <div className=''>
            <span>H</span>
            <span>i</span>
            <span>,</span>
          </div>
          <div>
            <span>I</span>
            <span>'</span>
            <span>m </span>
            <span className='text-[#ea30a5]'>R</span>
            <span>a</span>
            <span>m</span>
            <span>ū</span>
            <span>n</span>
            <span>a</span>
            <span>s, </span>
          </div>

          <div>
            <span>w</span>
            <span>e</span>
            <span>b </span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span></span>
          </div>
          <p className='text-[#9a9393] text-[16px] sm:text-2xl'>
            JavaScript Full Stack Developer
          </p>
          <motion.button
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{ duration: 1.5, delay: 3 }}
            className='text-secondary border border-secondary px-6 py-3 my-8 text-[20px] rounded-full hover:bg-secondary hover:text-dark'
          >
            <Link to='contact' smooth={true} duration={500}>
              Contact me!
            </Link>
          </motion.button>
        </div>
      </div>
    </Element>
  );
};
