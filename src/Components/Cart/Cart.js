import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //destructuring 
    const {cart} = props;

    //calculate total salary
    let total = 0;
    for(const employee of cart){
        total = total + employee.salary;
    }
    
    return (
        <div>
            <h3>Selected Employee: {cart.length}</h3>
            <h5>Total Salary: $ {total}</h5>
            <h4>Hired Employees Name: </h4>
            <ul className="hired-list">
            {
                cart.map(name => {
                   return <li key={name.key}>
                       {name.name}</li>
                })
            }
            </ul>
        </div>
    );
};

export default Cart;