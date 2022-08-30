import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) return <h2>No expenses</h2>;
  return props.expenses.map((expense) => (
    <ExpenseItem key={expense.id} data={expense}></ExpenseItem>
  ));
};

export default ExpensesList;
