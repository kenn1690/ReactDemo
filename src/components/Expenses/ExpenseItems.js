import React, { useState } from 'react';

import './ExpenseItems.css';
import ExpenseItemsDate from './ExpenseItemsDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{

    return (
    <Card className='expense-item'>
        <ExpenseItemsDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div> 
        </div>
    </Card>
    );
}

export default ExpenseItem;