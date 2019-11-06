import React, {Component} from 'react';

const Button = props =>{
	const {type, disabled, onClick, label} = props;
	return(
			<div className='d-flex justify-content-center'>
			<button 
				type={type} 
				className="btn btn-light mr-4" 
				disable={disabled}
				label={label}>
			</button>
			<button 
									type="button" 
									onClick={onNext}  
									className="btn btn-secondary">
									Next
									</button>
							</div>
						)

					}	

	
export default Button;