// var React = require("react");
import React from 'react';
import ReactDOM from 'react-dom';
require("./Application.css");
export default class Page extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="application">
				<h1>Hello World!!!</h1>
				<pre>{this.props.url}</pre>
				<img src={require("./image.png")} height="100" />
				<img src={require("./image.jpg")} height="100" />
			</div>
		);
	}
}