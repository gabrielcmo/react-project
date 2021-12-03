// import { useState } from 'react';

import Card from './Components/Card';
import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense';
import ExpensesFilter from './Components/ExpensesFilter';
import './App.css';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Toilet Paper', 
      price: 10.00, 
      date: new Date(2020, 1, 13),
    },
    {
      id: 2,
      title: 'Car Insurence', 
      price: 200.00, 
      date: new Date(2020, 2, 28),
    },
    {
      id: 3,
      title: 'New Desk (Windows)', 
      price: 200.00, 
      date: new Date(2020, 11, 2),
    },
    {
      id: 4,
      title: 'Luiza', 
      price: 99999.99, 
      date: new Date(2021, 11, 22),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  const selectFilterHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <div className="App">
      <h1>React Udemy Course</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card>
        <ExpensesFilter onSelectFilter={selectFilterHandler}/>
        {expenses.map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                price={expense.price}
                date={expense.date}
              />
            );
          })}
      </Card>
    </div>
  );
}

export default App;
