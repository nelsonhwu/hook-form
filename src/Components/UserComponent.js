import React, { useState } from 'react';

const UserComponent = props => {
    const{ inputs, setInputs } = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" onChange={ onChange } />
                
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" onChange={ onChange } />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={ onChange } />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={ onChange }/>

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confirmPassword" onChange={ onChange } />
            </form>
        </div>
    );
}

export default UserComponent;