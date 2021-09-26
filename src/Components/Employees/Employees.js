import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';
import './Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [cart, setCart] = useState([]);

    // data load 
    useEffect(() => {
        fetch('./employee.JSON')
        .then(res => res.json())
        .then(data => setEmployees(data));
    }, [])

    // eventhandler to handle display data in UI
    const handleAddToCart = employee => {
        const newCart = [...cart, employee];
        setCart(newCart); 
    }
    return (
        <div className ="employees-container">
            <div className ="employee">
                {
                    employees.map(employee => <Employee 
                        key={employee.key}
                        employee={employee}
                        handleAddToCart={handleAddToCart}
                        ></Employee>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Employees;