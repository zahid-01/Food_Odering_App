import React from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Rista',
    description: 'Fine Meat Balls',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Kebeb',
    description: 'Barbeque Chopped mutton',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Gushtab',
    description: 'Meat balls with curd gravy',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Rogan Josh',
    description: 'Mutton/Beef cooked with spices',
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((el) => (
    <MealItem
      key={el.id}
      name={el.name}
      description={el.description}
      price={el.price}
      id={el.id}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <div>{meals}</div>
      </Card>
    </section>
  );
};

export default AvailableMeals;
