import React from 'react';
import './Employee.css';

const Employee = (props) => {
    const { name, Age, designation, img, salary,gender,tech1,tech2,tech3 } = props.employee;
    return (
        <div className="employee">
            <div className="card">
            <div className="img-area">
                <img src={img} className="card-img-top rounded-circle h-50 w-50" alt="..." />
            </div>
            <div className="text-area">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Designation: {designation}</p>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Age: {Age}</p>
                <p className="card-text">Salary: ${salary}</p>
                <div>
                <small className="tech1">{tech1}</small>
                <small className="tech2">{tech2}</small>
                <small className="tech3">{tech3}</small>
                </div>
                <button className="hunt-btn">hunt</button>
            </div>
            </div>
        </div>
    );
};

export default Employee;