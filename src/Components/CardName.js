import React, { Component } from 'react';
import './CardName.css';
import CardInfo from './CardInfo';


class CardName extends Component {
	constructor() {
		super();
		this.state = {
			visible: false
		}
	}

	handleMouseEnter = () => {
		this.setState({ visible: true });
	};

	handleMouseLeave = () => {
		this.setState({ visible: false });
	};

	render() {
		const { visible } = this.state;
		const { email, age, gender, phone } = this.props;
		return (
			<div
				className='tc bg-lightest-blue dib br3 pa2 ma4 bw2 shadow-5 relative'
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<img alt='users' src={`https://robohash.org/${this.props.id}?set=set2`} />
				<h2>{this.props.firstName} {this.props.lastName}</h2>
				{visible ? (
					<CardInfo
						email={email}
						age={age}
						gender={gender}
						phone={phone}
						visible={visible}
					/>
				) : null}
			</div>
		);
	}
}

export default CardName; 