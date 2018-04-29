import React , {Component} from 'react'

class Form extends Component{
	render(){
		return(
			<div className="about">
				<div className="left">
				<p>Contact</p>
				<p>info@misitio.com</p>
				</div>
				<form className="right"><br/>
				<input placeholder="name"/><br/>
				<input placeholder="email"/><br/>
				<input placeholder="subject"/><br/>
				<input placeholder="message"/>
				</form>
			</div>)
	}
}
export default Form;