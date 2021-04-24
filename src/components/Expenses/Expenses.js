import { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../Card/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = props => {
    const [yearFilter, setYearFilter] = useState('2020');

    const getYearFilter = year => {
        setYearFilter(year);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === yearFilter);

    return (
        <Card className="expenses">
            <ExpensesFilter
                onGetYearFilter={getYearFilter}
                yearFilter={yearFilter} />
            <ExpensesChart filteredExpenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
}
export default Expenses;