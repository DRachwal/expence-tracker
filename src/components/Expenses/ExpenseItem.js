import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card/Card';

import './ExpenseItem.css';

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Test');
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate
                    date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.price}</div>
                </div>
                <button onClick={clickHandler}>Click</button>
            </Card>
        </li>
    );
};

export default ExpenseItem;
