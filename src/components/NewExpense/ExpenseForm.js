import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
    const [userInput, setUserInput] = useState({
        title: '',
        price: '',
        date: ''
    });

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setUserInput(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            ...userInput,
            date: new Date(userInput.date)
        };

        props.onSaveExpense(expenseData);

        setUserInput({
            title: '',
            price: '',
            date: ''
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input type="text" value={userInput.title} name="title" onChange={inputChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" value={userInput.price} name="price" onChange={inputChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.date} name="date" onChange={inputChangeHandler} min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;