import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  const [getForm, setForm] = useState(false);

  const triggerFormTrue = () => {
    setForm(true);
  };

  const triggerFormFalse = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {!getForm && <button onClick={triggerFormTrue}>Add Expenses</button>}
      {getForm && (
        <ExpenseForm
          formOff={triggerFormFalse}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
