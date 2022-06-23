export type ButtonProps = {
  text?: string;
  link?: string;
  type?: 'button' | 'submit';
  className?: string;
};

export const Button = ({ text, link, type, className }: ButtonProps) => {
  return (
    <a href={link}>
      <button type={type} className={className}>
        {text}
      </button>
    </a>
  );
};
