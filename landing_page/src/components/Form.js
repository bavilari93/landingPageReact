import React , {Component} from 'react'

class Form extends Component{
	render(){
		return(
			<div className="about">
				<div className="left">
				<h1>Contact</h1>
				<p>info@misitio.com</p>
				</div>
				<form className="right" onSubmit={this.props.submit}><br/>
				<input 
					name="name" 
					value={this.props.name}
					onChange={(e)=>this.props.handleChange(e)}
					placeholder="name"/><br/>
				<input 
					name="email"
					value={this.props.email}
					onChange={(e)=>this.props.handleChange(e)}
					type="email" placeholder="email"/><br/>
				<input 
					name="subject"
					value={this.props.subject}
					onChange={(e)=>this.props.handleChange(e)}
					placeholder="subject"/><br/>
				<input 
					name="message" 
					value={this.props.message} 
					onChange={(e)=>this.props.handleChange(e)}
					className="message" 
					type="text" placeholder="message"/><br/>
				<button type="submit" value="submit">send</button>
				</form>
			</div>)
	}
}
export default Form;