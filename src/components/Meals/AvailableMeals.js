import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import styles from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza Margherita',
      description: 'Tomato sauce, fresh mozzarella & basil',
      price: 10.00,
    },
    {
      id: 'm2',
      name: 'Pizza Diavola',
      description: 'Tomato sauce, fresh mozzarella, spicy salami & fresh chilli',
      price: 11.50,
    },
    {
      id: 'm3',
      name: 'Pizza Americana',
      description: 'Tomato sauce, fresh mozzarella & pepperoni',
      price: 11.50,
    },
    {
      id: 'm4',
      name: 'Pizza Napoletana',
      description: 'Tomato sauce, fresh mozzarella, capers, anchovies & black olives',
      price: 12.50,
    },
    {
      id: 'm5',
      name: 'Pizza Capricciosa',
      description: 'Tomato sauce, fresh mozzarella, ham, mushrooms, olives, artichokes & egg',
      price: 14.00,
    },
    {
      id: 'm6',
      name: 'Pizza Quattro Formaggi',
      description: 'Tomato sauce, fresh mozzarella, parmesan, gorgonzola & asiago',
      price: 13.50,
    },
    {
      id: 'm7',
      name: 'Pizza Vegetariana',
      description: 'Tomato sauce, fresh mozzarella, aubergines, peppers & courgettes',
      price: 12.70,
    },
    {
      id: 'm8',
      name: 'Pizza Rustica',
      description: 'Tomato sauce, fresh mozzarella, ham, chicken, pepperoni & salami',
      price: 14.50,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

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
