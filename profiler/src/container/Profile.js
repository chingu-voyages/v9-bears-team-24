import React, {Component} from "react";

class Profile extends Component {
	constructor(){
		super();
		this.state = {}
	}

render(){
	return(
		<div>
			<div>
				<h2>name: J.J. jamesson</h2>
				<h4>location: NY city, New York</h4>
				<h4>Gender: Male</h4>
				<h4>Age: 30</h4>
				<h4>email: J.J. jamesson@dailybugle.com</h4>
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