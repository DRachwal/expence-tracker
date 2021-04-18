import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';

import './Expenses.css';

const Expenses = props => <Card className="expenses">
    {props.expenses.map(expense =>
        <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price} />
    )}
</Card>

export default Expenses;