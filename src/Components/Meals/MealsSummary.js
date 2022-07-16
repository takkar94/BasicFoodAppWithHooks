import classes from './MealSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 className> Delicious Food , Delivered To You </h2>
      <p>
        Choose Your favorite meal from the broad selection of available meals
        and enjoy a delicious food at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
