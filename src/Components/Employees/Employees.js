import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('./employee.JSON')
        .then(res => res.json())
        .then(data => setEmployees(data));
    }, [])
    return (
        <div className ="employees-container">
            <div className ="employee">
                {
                    employees.map(employee => <Employee 
                        key={employee.key}
                        employee={employee}
                        ></Employee>)
                }
            </div>
            <div className="cart">
                <h1>Selected Employee</h1>
            </div>
        </div>
    );
};

export default Employees;