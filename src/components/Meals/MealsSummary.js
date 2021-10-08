import React from 'react';

import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicous Food, Delivered To You</h2>
            <p>
            How can we leave you without our amazing pizzas? Grab a chance to have our pizza delivered right to your home thanks to our delivery and take away services. 
            </p>
            <p>
                All our meals are cooked with high-quality ingrediens, just-in-time and course by experienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;
