import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const humanDate = props.date
    .toLocaleString("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .split(" ");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{humanDate[1]}</div>
      <div className="expense-date__year">{humanDate[2]}</div>
      <div className="expense-date__day">{humanDate[0]}</div>
    </div>
  );
};

export default ExpenseDate;
