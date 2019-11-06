import React, {Component} from 'react';
import {steps} from './component/steps'
import Input from './component/Input';
import RadioInput from './component/RadioInput';

export default class Basic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			steps:steps,
		}
	}
		render() {
		const {step, onNext, onChange, onChangeRadio, formErrors, values} = this.props;
		const {steps} = this.state;
		return (
				<div className="form-container card">
        			<form className="form card-body">
        				<ol className='step-main mb-4'>
        					{steps.map(item=>{
        						return <li key={item.id} className='step'>{item.id}</li>
        					})}
        				</ol>
        					<Input 
			  					type='text'
			  					label='Firstname'
			  					id='firstname' 
			  					name='firstname'
			  					placeholder="Enter firstname"
			  					value={values.firstname}
			  					onChange={onChange}
			  					errors={formErrors.firstname}
			  					/>
						  	<Input 
			  					type='text'
			  					label='Lastname'
			  					id='lastname' 
			  					name='lastname'
			  					placeholder="Enter Password"
			  					value={values.lastname}
			  					onChange={onChange}
			  					errors={formErrors.lastname}
			  					/>
			  				<Input 
			  					type='password'
			  					label='Password'
			  					id='password' 
			  					name='password'
			  					placeholder="Enter Password"
			  					value={values.password}
			  					onChange={onChange}
			  					errors={formErrors.password}
			  					/>
			  				<Input 
			  					type='password'
			  					label='repeatPassword'
			  					id='repeatPassword' 
			  					name='repeatPassword'
			  					placeholder="Enter Repeat Password"
			  					value={values.repeatPassword}
			  					onChange={onChange}
			  					errors={formErrors.repeatPassword}
			  					/>
			  			   <fieldset>
			  		    	<div>Gender</div>
							 <RadioInput 
							    type="radio" 
							  	name="gender"
							  	label= 'Male' 
							  	id="male" 
							  	value='male'
							  	checked={values.gender} 
							  	onChange={onChangeRadio} 
							  	 />
							 <RadioInput 
							    type="radio" 
							  	name="gender"
							  	label= 'Female' 
							  	id="female" 
							  	value='female'
							  	checked={values.gender} 
							  	onChange={onChangeRadio} 
							  	/>
							</fieldset>
						<div className='d-flex justify-content-center'>
							<button 
								type="button" 
								className="btn btn-light mr-4" 
								disabled>
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
