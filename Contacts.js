import React, {Component} from 'react';
import Input from './component/Input';


export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
  		const {onBack, onNext, onChange, formErrors, values} = this.props;
  		
    return (
      <div className="form-container card">
      	<form className="form card-body">
      		 <Input 
			  	type='email'
			  	label='Email'
			  	id='email' 
			  	name='email'
			  	placeholder="Enter email"
			  	value={values.email}
			  	onChange={onChange}
			  	errors={formErrors.email}
			  	/>
			 <Input 
			  	type='tel'
			  	label='Mobile'
			  	id='mobile' 
			  	name='mobile'
			  	placeholder="Enter Mobile"
			  	value={values.mobile}
			  	onChange={onChange}
			  	errors={formErrors.mobile}
			  	/>
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