import React, { Component } from 'react';
import Info from './Info';
import './Card.css';



class Card extends Component {
	constructor(){
		super();
		this.state = {
      		visible: false
		}
    }

render(){

	return (
	<div 
		className= 'tc bg-lightest-blue dib br3 pa2 ma4 bw2 shadow-5'
		onMouseEnter={()=>{
			this.setState({ visible: true });
		}}
		onMouseLeave={()=>{
			this.setState({ visible: false });
		}}
	>
			<img 
				alt='users' 
				src={`https://robohash.org/${this.props.id}?set=set2`} 
			/>
			<div>
				<h2>{this.props.firstName} {this.props.lastName}</h2>
				{this.state.visible ? 
					<Info 
						email={this.props.email} 
						age={this.props.age} 
						gender={this.props.gender} 
						phone={this.props.phone}
					/>
				: null}
			</div>
		</div>
	);
}
}

export default Card; 