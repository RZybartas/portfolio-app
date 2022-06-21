export type ButtonProps = {
  text?: string;
  link?: string;
};

export const Button = ({ text, link }: ButtonProps) => {
  return (
    <a href={link}>
      <button className='text-secondary border border-secondary px-6 py-1  text-[16px] rounded-full hover:bg-secondary hover:text-dark'>
        {text}
      </button>
    </a>
  );
};
