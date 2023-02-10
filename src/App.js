import './App.css';
import { ExpenseItems } from './components/Expenses/ExpenseItem'
import { Expenses } from './components/Expenses/Expenses'
import { NewExpense } from './components/NewExpense/NewExpense'
import { useState } from 'react'

const expenseData = [
  {
    id: 'e1',
    title: 'Too many pants',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'COFFEE', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'A Race',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'time to save',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]


export function App() {
  const [expenses, setExpenses] = useState(expenseData);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

