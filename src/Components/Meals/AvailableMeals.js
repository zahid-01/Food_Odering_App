import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import axios from 'axios';

const AvailableMeals = () => {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const DUMMY_MEALS = [];
    const fetchMeals = async () => {
      setIsLoading(true);
      const FB_MEALS = await axios({
        method: 'GET',
        url: 'https://start-wars-58d68-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
      });

      for (const meal in FB_MEALS.data) {
        DUMMY_MEALS.push({ id: meal, ...FB_MEALS.data[meal] });
      }
      setMeal(DUMMY_MEALS);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return <section className={styles.isLoading}>Loading...</section>;
  }

  const meals = meal.map((el) => (
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
