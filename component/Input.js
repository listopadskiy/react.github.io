import React, {Component} from 'react';

const Input = props =>{
	const {type, label, name, id, value, onChange, placeholder, errors} = props;
	return (
		<div className="form-group">
    	<label htmlFor={id}>{label}</label>
			 <input 
			 	type={type} 
			 	label={label}
			 	className="form-control" 	 
			 	id={id} 
			 	value={value}
			 	name={name}
			 	onChange={onChange}	
				placeholder={placeholder}
				/>
			 {errors ? (<div className='invalid-feedback'>
			{errors}</div>) : null} 
			</div>
			)
      };

export default Input;