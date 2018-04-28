import React, {Component} from 'react'
import Item from './Item'

class Display extends Component{

	renderPhoto(data){
		console.log(data)
		return data.map((el, index) =>{
			return (
				<div
			key={index}
			className="photo-item"
			onClick={()=>{this.props.project(el.small)}}>
			<Item url={el.small}/>
			</div
			>
			)
		})
	}
	render(){
		return(
			<div className="main-display">
			{this.renderPhoto(this.props.data)}
			</div>)
	}
}

export default Display