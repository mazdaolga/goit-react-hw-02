import css from "./Feedback.module.css";
const Feedback = ({ good, bad, neutral, total, average }) => {
  return (
    <div className={css.feedback}>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {!isNaN(average) && average}%</li>
      </ul>
    </div>
  );
};

export default Feedback;