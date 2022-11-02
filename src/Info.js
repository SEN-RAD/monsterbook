
const Info = (props)=> {
	return (
	<div className= 'tl' >
				<p>Email: {props.email} </p>
				<p>Phone: {props.phone}</p>
				<p>Age: {props.age} </p>
				<p>Gender: {props.gender}</p>
		</div>
	);
}

export default Info; 
