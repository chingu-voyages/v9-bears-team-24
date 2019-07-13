import React, {Component} from "react";

class Profile extends Component {
  	// You can just use state here, the linter does the work for you ;)

render(){
	console.log("profile",this.props.state)
	const {name,gender,email,age} = this.props.state;
	return(
		<div>
			<div>
				<h2>name: {name}</h2>
				<h4>location: NY city, New York</h4>
				<h4>Gender: {gender}</h4>
				<h4>Age: {age}</h4>
				<h4>email: {email}</h4>
			 </div>
			<div>
				<h3>about me:</h3>
				<p>im a undercover wizard from the world beyond, seeking destruction to feed my baby demons</p>
			</div>
			<div>
				<h3>Social links:</h3>
				<h5>FakeBook: http://FakeBook.com</h5>
				<h5>Twitter: http://FakeBook.com</h5>
				<h5>Instagram: http://FakeBook.com</h5>
				<h5>LinkedIn: http://FakeBook.com</h5>
				<h5>GitHub: http://FakeBook.com</h5>
				<h5>Website: http://FakeBook.com</h5>
			</div>
			<div></div>
		</div>)

}
}

export default Profile;