import ExpenseItems from './components/ExpenseItems';
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
      date: new Date(2020, 11, 2),
    },
    {
      id: 4,
      title: 'Luiza', 
      price: 99999.99, 
      date: new Date(2021, 11, 22),
    },
  ];

  return (
    <div className="App">
      <h2>Some expenses for your</h2>
      <ExpenseItems expenses={expenses} />
    </div>
  );
}

export default App;
