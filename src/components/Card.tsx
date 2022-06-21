import { Button } from './Button';

export type CardProps = {
  image?: string;
  src?: string | undefined;
  title?: string;
  description?: string;
  stack?: string;
  demo?: string;
  code?: string;
  className?: string;
};

export const Card = ({
  image,
  title,
  description,
  stack,
  demo,
  code,
}: CardProps) => {
  return (
    <div className='max-w-[300px] h-[400px] rounded-lg border border-secondary text-center px-3  '>
      <h3 className='text-secondary text-3xl  my-4'>{title}</h3>
      <img className='h-[150px]' src={image} alt={title} />
      <p className='my-2'>{description}</p>
      <p className='mx-2'>{stack}</p>
      <div className='flex  justify-between items-end mx-4 mt-4 '>
        <Button text='Code' link={code} />
        <Button text='Demo' link={demo} />
      </div>
    </div>
  );
};
