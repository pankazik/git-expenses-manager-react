import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  let { id, title, amount, date } = props.data;
  return (
    <Card className="expense-item_main">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item_desc">
        <div className="expense-item expense-item_title">
          <h2>{title}</h2>
        </div>
        <div className="expense-item expense-item_price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
