import React, {useEffect, useState} from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch(`https://react-meals-app-ff022-default-rtdb.europe-west1.firebasedatabase.app/meals.json`);

      if (!response.ok) {
        throw new Error('Something went wrong!!!');
      }

      const responseData = await response.json();
      const recivedMeals = [];

      for (const key in responseData) {
        recivedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setMeals(recivedMeals);
      setIsLoading(false);
    };
    
      fetchMeals().catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  

    const mealsList = meals.map((meal) => (
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    if (isLoading) {
      return <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    }

    if (error) {
      return <section className={styles.MealsError}>
      <p>{error}</p>
    </section>
    }

    return (
        <section className={styles.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>   
        </section>
    )
}

export default AvailableMeals;
