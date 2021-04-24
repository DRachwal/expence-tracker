import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = props => {
    const saveExpense = expense => {
        const savedExpense = {
            ...expense,
            id: Math.random().toString()
        }

        props.onAddExpense(savedExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpense} />
        </div>
    );
}

export default NewExpense;