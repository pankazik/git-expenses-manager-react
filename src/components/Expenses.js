import { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [currentFilter, setFilter] = useState();

  const filterFunction = (year) => {
    setFilter(year);
  };

  const filteredExpenses = isNaN(currentFilter)
    ? props.expenses
    : props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === currentFilter
      );

  return (
    <div>
      <ExpenseFilter
        selected={currentFilter}
        filter={filterFunction}
      ></ExpenseFilter>
      <Card className="expenses">
        {!isNaN(currentFilter) && (
          <ExpensesChart chartData={filteredExpenses} />
        )}
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
