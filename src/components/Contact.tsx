import { useRef } from 'react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { Button } from './Button';

export const Contact = () => {
  const form = useRef<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        form.current,
        process.env.REACT_APP_USER_ID as string
      )
      .then(
        (result) => {
          result.text === 'OK' && alert('Message sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Element name='contact' className='w-full h-screen'>
      <div className='max-w-[1000px] h-full flex flex-col mx-auto justify-center items-center'>
        <form className='max-w-[350px] mx-2' ref={form} onSubmit={handleSubmit}>
          <h1 className='text-2xl text-center my-4 text-secondary'>
            Want to work together?
          </h1>
          <div className='flex justify-between '>
            <input
              className='max-w-[170px] py-2  '
              name='name'
              type='text'
              placeholder='Name'
              autoComplete='off'
            />
            <input
              className='max-w-[170px] py-2 '
              name='email'
              type='email'
              placeholder='Email'
              autoComplete='off'
            />
          </div>
          <input
            className='w-full py-2 my-3'
            name='subject'
            type='text'
            placeholder='Subject'
            autoComplete='off'
          />
          <textarea
            className='w-full h-[200px]'
            name='message'
            placeholder='Message'
          ></textarea>
          <Button
            className='text-secondary border border-secondary px-4 py-2 mt-6 mr-3 float-right  rounded-full hover:bg-secondary hover:text-dark'
            type='submit'
            text='Send message !'
          />
        </form>
      </div>
    </Element>
  );
};
