import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 264.35,
      date: new Date(2022, 2, 28),
    },
    {
      id: 2,
      title: "Car Asurance",
      amount: 164.35,
      date: new Date(2021, 3, 28),
    },
    {
      id: 3,
      title: "House Insurance",
      amount: 664.35,
      date: new Date(2021, 2, 18),
    },
    {
      id: 4,
      title: "Personal Insurance",
      amount: 64.35,
      date: new Date(2020, 12, 28),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    expense.id = expenses.length + 1;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
