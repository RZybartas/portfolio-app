export type ScrollTo = {
  name: string;
};

export type ButtonProps = {
  text?: string;
  link?: string;
  type?: 'button' | 'submit';
  className?: string;
};

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
