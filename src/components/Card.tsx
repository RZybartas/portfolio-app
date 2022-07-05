import { Button } from './Button';
import { CardProps } from '../types/types';

export const Card = ({
  image,
  title,
  description,
  stack,
  demo,
  code,
}: CardProps) => {
  return (
    <div className='max-w-[300px] h-[300px] rounded-lg border border-secondary text-center px-3   '>
      <h3 className='text-secondary text-2xl my-2 '>{title}</h3>
      <img className='h-[100px]  mx-auto ' src={image} alt={title} />
      <p className='my-2'>{description}</p>
      <p className='mx-2'>{stack}</p>
      <div className='flex  justify-between items-end mx-4 mt-4 '>
        <Button
          type='button'
          className='text-secondary border border-secondary px-6 py-1  text-[16px] rounded-full hover:bg-secondary hover:text-dark'
          text='Code'
          link={code}
        />
        <Button
          type='button'
          className='text-secondary border border-secondary px-6 py-1  text-[16px] rounded-full hover:bg-secondary hover:text-dark'
          text='Demo'
          link={demo}
        />
      </div>
    </div>
  );
};
