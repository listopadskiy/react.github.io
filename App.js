import React, {Component} from 'react';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Finish from './Finish';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			step: 1,
				firstname:'', 
				lastname: '',
				password: '',
				repeatPassword:'',
				gender: 'male',
				email:'',
				mobile:'',
			formErrors:{
				firstname: false,
				lastname: false,
				password: false,
				repeatPassword: false,
				gender: false,
				email: false,
				mobile: false
			}			
		}
	}
		onChange = e =>{
			console.log(e.target.value)
			this.setState({
				[e.target.name]: e.target.value
			})
		}
		onChangeRadio = e =>{
			console.log(e.target.value)
			this.setState({
				[e.target.name]: e.target.checked
			})
		}
		nextStep = (e) =>{
			const {step} = this.state;
				this.setState({
				step: step + 1
			})
		}
		previousStep = () =>{
			const {step} = this.state;
			this.setState({
				step: step -1
			})
		}
		onBack = e =>{
			e.preventDefault();
			this.previousStep()
		}
		onNext = e => {
			e.preventDefault();
			const validation = this.validation();
			const isErrors = Object.keys(validation).length > 0;
				if(isErrors){this.setState({formErrors:validation})}
				else{this.nextStep()}
		}

		validation = () =>{
			const {firstname, lastname, password, repeatPassword, gender, email, mobile} = this.state;

			const errors = {};
			if (this.state.firstname.length < 5) {
				errors.firstname = 'Must be more 5 letters'
			} 
			if(this.state.lastname.length < 5){
				errors.lastname = 'Must be more 5 letters'
			}
			 if(!this.state.password){
			 	errors.password = 'required'
			}
			 if (this.state.password !== this.state.repeatPassword) {
				errors.repeatPassword = 'password should be equal to repeatPassword'
			}
			if(this.state.email.includes('@')){
				errors.email = 'must be @'
			}
			
			return errors;
	}	

		render() {
		const {step, formErrors, firstname, lastname, password, repeatPassword, gender, email} = this.state;
		const values = {firstname, lastname, password, repeatPassword, gender, email};
			
			switch(step){
					case 1:
					return (
						<Basic 
							onNext={this.onNext}
							onChange={this.onChange}
							onChangeRadio={this.onChangeRadio}
							formErrors={formErrors}
							values={values}
							/>)
					case 2: 
					return (
						<Contacts 
							onNext={this.nextStep} 
							onBack={this.onBack} 
							onChange={this.onChange}
							formErrors={formErrors}
							values={values}
							/>)
					case 3: 
					return (<Avatar 
							onNext={this.nextStep} 
							onBack={this.onBack} 
							onChange={this.onChange}
							/>)
					case 4: 
					return (<Finish
							onNext={this.nextStep} 
							onBack={this.onBack} 
							onChange={this.onChange}
							/>)
						}
			
				   }
			 }
