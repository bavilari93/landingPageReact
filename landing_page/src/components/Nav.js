import React, {Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<nav className='container'>
				<div
					onClick={()=>{this.props.modeChange('portafolio')}}>
				Portafolio
				</div>
				<div
					onClick={()=>{this.props.modeChange('about')}}>
				about me 
				</div>
				<div
					onClick={()=>{this.props.modeChange('contact')}}>
				Contact
				</div>
			</nav>

			)
	}
}


export default Nav