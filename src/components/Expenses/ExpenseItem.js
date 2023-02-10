import '../styles/ExpenseItem.css';
import { ExpenseDate } from '../Expenses/ExpenseDate';
import { Card } from '../Expenses/Card';
import { useState } from 'react';

export const ExpenseItems = (props) => {
    useState();
    return (
       <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            
        </Card>
    </li>
    )
}

