import React, { useState } from 'react';
import './CardName.css';
import CardInfo from './CardInfo';

interface Props {
	email: string;
	age: number;
	gender: string;
	phone: number;
	id: number;
	firstName: string;
	lastName: string;
  }
  
 const CardName: React.FC<Props> = ({ email, age, gender, phone, id, firstName, lastName }) => {

	const [visible, setVisible] = useState(false);

	function handleMouseEnter() {
		setVisible(true);
	};

	function handleMouseLeave() {
		setVisible(false);
	};

	return (
		<div
			className='tc bg-lightest-blue dib br3 pa2 ma4 bw2 shadow-5 relative'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img alt='users' src={`https://robohash.org/${id}?set=set2`} />
			<h2>{firstName} {lastName}</h2>
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

export default CardName;