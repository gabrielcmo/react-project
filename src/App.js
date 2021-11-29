import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
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
      date: new Date(2020, 13, 2),
    },
    {
      id: 4,
      title: 'Luiza', 
      price: 99999.99, 
      date: new Date(2021, 13, 22),
    },
  ];

  return (
    <div className="App">
      <h2>Hello World! Expenses!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
