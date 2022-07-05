import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

const list = {
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <nav className='w-full fixed h-[80px] text-primary flex flex-row justify-between items-center px-6'>
      {/* Logo */}
      <h1 className=' text-4xl font-bold hover:text-secondary flex flex-col items-center mt-2 md:text-3xl'>
        RZ{' '}
        <span className='p-0 font-normal text-[10px]'>
          Full Stack Developer
        </span>
      </h1>
      {/* Menu */}

      <motion.ul
        initial='hidden'
        animate='visible'
        variants={list}
        className='hidden md:flex  '
      >
        <motion.li
          variants={item}
          transition={{ type: 'tween' }}
          className='hover:text-secondary active:text-secondary text-2xl border-none'
        >
          <Link to='hero' smooth={true} duration={500}>
            HOME
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          transition={{ type: 'tween' }}
          className='hover:text-secondary active:text-secondary text-2xl border-none'
        >
          <Link to='about' smooth={true} duration={500}>
            ABOUT
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          transition={{ type: 'tween' }}
          className='hover:text-secondary active:text-secondary text-2xl border-none'
        >
          <Link to='skills' smooth={true} duration={500}>
            SKILLS
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          transition={{ type: 'tween' }}
          className='hover:text-secondary active:text-secondary text-2xl border-none'
        >
          <Link to='work' smooth={true} duration={500}>
            WORK
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          transition={{ type: 'tween' }}
          className='hover:text-secondary active:text-secondary text-2xl border-none'
        >
          <Link to='contact' smooth={true} duration={500}>
            CONTACT
          </Link>
        </motion.li>
      </motion.ul>
      {/* Hamburger */}
      <div
        className='md:hidden z-10 fixed right-4 top-4 text-white'
        onClick={handleClick}
      >
        {!nav ? (
          <HiMenuAlt1 className='text-3xl cursor-pointer' />
        ) : (
          <HiOutlineX className='text-3xl cursor-pointer' />
        )}
      </div>
      {/* Social-buttons */}
      <motion.div
        variants={item}
        transition={{ type: 'tween' }}
        className='hidden w-6  fixed top-[50%] left-2 md:flex flex-col  '
      >
        <a
          href='https://www.linkedin.com/in/ram%C5%ABnas-zybartas-8a8a28205/'
          className='py-2 text-2xl hover:text-secondary '
        >
          <RiLinkedinFill />
        </a>
        <a
          href='https://github.com/RZybartas'
          className='py-2  text-2xl hover:text-secondary '
        >
          <RiGithubFill />
        </a>
      </motion.div>
      {/* Mobile-menu */}
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={list}
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-dark flex flex-col justify-center items-center '
        }
      >
        <li className='hover:text-secondary  text-4xl py-5'>
          <Link onClick={handleClick} to='hero' smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className='hover:text-secondary text-4xl py-5'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='hover:text-secondary text-4xl py-5 outline-none'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className='hover:text-secondary text-4xl py-5'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li className='hover:text-secondary text-4xl py-5'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
        <motion.div
          variants={item}
          transition={{ type: 'tween' }}
          className='flex flex-row z-10 '
        >
          <a
            href='https://www.linkedin.com/in/ram%C5%ABnas-zybartas-8a8a28205/'
            className='py-9 px-2 text-4xl hover:text-secondary '
          >
            <RiLinkedinFill />
          </a>
          <a
            href='https://github.com/RZybartas'
            className='py-9 px-2 text-4xl hover:text-secondary '
          >
            <RiGithubFill />
          </a>
        </motion.div>
      </motion.ul>
    </nav>
  );
};
