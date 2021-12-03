import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // State
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    // Handlers
    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = userInput;

        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={userInput.enteredDate}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;