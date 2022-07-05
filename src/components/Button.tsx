import { ButtonProps } from '../types/types';

export const Button = ({ text, link, type, className }: ButtonProps) => {
  return (
    <a href={link}>
      <button type={type} className={className}>
        {text}
      </button>
    </a>
  );
};
