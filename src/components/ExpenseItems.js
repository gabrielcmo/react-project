import './ExpenseItems.css';
import ExpenseItem from './ExpenseItem';

function ExpenseItems(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense) => {
                return (
                    <ExpenseItem
                        title={expense.title}
                        price={expense.price}
                        date={expense.date}
                    />
                );
            })}
        </div>
    );
}

export default ExpenseItems;