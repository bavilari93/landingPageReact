import React , {Component} from 'react'

class Item extends Component{
	render(){
		return(
			<div>
			<img src={this.props.url} alt=""/>
			</div>)
	}
}

export default Item;