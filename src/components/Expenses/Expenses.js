import { ExpenseItems } from "../Expenses/ExpenseItem";
import { Card } from "../Expenses/Card";
import '../styles/Expenses.css'
import '../styles/Card.css'
import { useState } from 'react'
import { ExpensesFilter } from "../NewExpense/ExpensesFilter";
import { ExpensesList } from "./ExpensesList";




//could just use .map and iterate through the data to display the same thing.



export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} 
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}