import React, {Component} from 'react';

export default class Contacts extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
    	
    }
  }
	
  render() {
  		const {step, onBack, onNext, onChange, formErrors, values} = this.props;
  		
    return (
      <div className="form-container card">
      	<form className="form card-body">
      		<div className="form-group">
			    <label htmlFor="email">Email</label>
			    <input 
			    	type="email" 
			    	className="form-control" 
			    	id="email"
			    	name='email' 
			    	placeholder="Enter email"
			    	value={values.email}
			    	onChange={onChange}
			    	/>
			    	{formErrors.email?(<div className='invalid-feedback'>
					{formErrors.email}
						</div>): null}   
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Mobile</label>
			    <input 
			    	type="tel" 
			    	className="form-control" 
			    	id="mobile"  
			    	placeholder="Enter mobile"
			    	value={values.mobile}
			    	onChange={onChange}
			    	/>
			  	{formErrors.mobile?(<div className='invalid-feedback'>
				{formErrors.mobile}
						</div>): null}   
 			 </div>
 			
      		<div className='d-flex justify-content-center'>
			<button 
				type="button" 
				className="btn btn-light mr-4" 
				onClick={onBack}
				>
				Previous
			</button>
			<button 
					type="button" 
					onClick={onNext}  
					className="btn btn-secondary">
						Next
				</button>
				</div>
			</form>
			</div>
    );
  }
}