import React from 'react';
import './CardInfo.css';

interface Props {
	email: string;
	age: number;
	gender: string;
	phone: number;
	visible: boolean;
  }

 const CardInfo: React.FC<Props> = ({ email, age, gender, phone, visible }) => {
	return (
		<div className={`card-info-container ${visible ? 'active' : ''}`}>
			<div className='tc bg-white dib br3 pa2 ma4 bw2 shadow-1 '>
				<p>email: {email}</p>
				<p>age: {age}</p>
				<p>gender: {gender}</p>
				<p>phone: {phone}</p>
			</div>
		</div>
	);
}

export default CardInfo;
















