import React from 'react';
import './Employee.css';

const Employee = (props) => {

    //destructuring property from object
    const { name, age, designation, img, salary, experience, tech1, tech2, tech3, tech4 } = props.employee;

    return (
        //display all employee and their data
        <div className="employee">
            <div className="card">
                <h4 className="salary">${salary}/hr</h4>
                <div className="img-area">
                    <img src={img} className="card-img-top rounded-circle h-50 w-50" alt="person" />
                </div>
                <div className="text-area">
                    <h3>{name}</h3>
                    <p>{designation}</p>
                    <p>Experience: {experience}</p>
                    <p>Age: {age}</p>
                    <div className="tech">
                        <h5 className="skills">Skills</h5>
                        <small className="tech1">{tech1}</small>
                        <small className="tech2">{tech2}</small>
                        <small className="tech3">{tech3}</small>
                        <small className="tech4">{tech4}</small>
                    </div>
                    <button
                        onClick={() => props.handleAddToCart(props.employee)} className="hire-btn">
                        <i className="fas fa-cart-plus"></i> hire</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;