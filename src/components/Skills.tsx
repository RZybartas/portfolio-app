import { FaGit, FaNode, FaReact, FaSass } from 'react-icons/fa';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const Skills = () => {
  return (
    <div className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] h-full text-primary flex flex-col  mx-auto justify-center items-center'>
        <p className='text-2xl my-8 sm:text-4xl md:text-7xl'>My skills</p>

        <div className=' text-3xl text-secondary mx-2 flex flex-col sm:text-5xl md:text-8xl '>
          <div className='flex my-4'>
            <DiJavascript1 />
            <DiCss3 />
            <FaNode />
            <SiExpress />
            <SiMongodb />
            <SiMysql />
          </div>
          <div className='flex my-4 '>
            <FaReact />
            <SiRedux />
            <FaSass />
            <SiTailwindcss />
            <SiTypescript />
            <FaGit />
          </div>
        </div>
      </div>
    </div>
  );
};
