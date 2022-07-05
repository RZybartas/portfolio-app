import { Element } from 'react-scroll';
import ozyart from '../assets/ozyart.jpg';
import mealPlanner from '../assets/meal-planner.jpg';
import { Card } from './Card';

export const Work = () => {
  return (
    <Element name='work' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] h-screen grid  grid-cols-1 gap-8 mx-auto   content-center     justify-items-center  text-primary  sm:grid-cols-2 '>
        <Card
          image={ozyart}
          title='Ozyart'
          description='Painting artist portfolio'
          stack='React * Node *Express * MongoDB * SCSS'
          demo='https://ozyart.lt/'
          code='https://github.com/RZybartas/ozyart-website'
        />
        <Card
          image={mealPlanner}
          title='Meal-Planner'
          description='Vegan meal planner'
          stack='React * Redux-toolkit * Tailwind.CSS '
          demo='https://meal-planner.ml/'
          code='https://github.com/RZybartas/Your-meal-planner'
        />
      </div>
    </Element>
  );
};
