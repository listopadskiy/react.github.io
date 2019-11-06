import React, {Component} from 'react';


export default class Avatar extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render() {
  	const {onNext, onBack} = this.props;
    return (
      <div>
      	<div>Avatar</div>
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
      </div>
    );
  }
}