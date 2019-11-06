import React, {Component} from 'react';

const RadioInput = props =>{
	const {type, name, id, checked, value, onChange, label} = props;
	return (
		<div className="form-check">
			 <input 
				 className="form-check-input" 
				 type={type} 
				 name={name} 
				 id={id} 
				 value={value}
	 			 checked={checked} 
				 onChange={onChange} 
				 label={label}
				/>
	<label className="form-check-label" htmlFor={id}>
		{label}
	</label>
		</div>
		);
	};							  		

export default RadioInput;