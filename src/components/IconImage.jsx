import { Component } from 'react';

//import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";




export default class IconImage extends Component {

// const { height, width } = useWindowDimensions();

    defaultProps = {
        width : '200px',
        height : '40px',
        marginBottom : '0px',
        paddingBottom : '0px'

    }


	constructor(props) {

		super(props);
		this.properties = {
		    url: '',
		    src: '',
		    caption : '',
		    title: '',
		    height : this.props.height? this.props.height : 40
		  };
		this.state = {
			left : this.props.left,
			top : this.props.top,
			isOption : true
		};

//		this.updatePos = this.updatePos.bind(this);

//        setTimeout(this.startPlaying, 2000);
		//setTimeout(this.expandToFull, 1000);
		//this.makeApiCall = this.makeApiCall.bind(this);
	}

	render() {
	    //var vid =  super.render();

	    var mySrc = this.props.src;
	    var myCaption = this.props.caption;
	    var height = this.properties.height;
        var myTitle = this.props.title;
	    var img =  <img src = { mySrc}  height = {height} title={myTitle}  alt={myCaption} style= {{border: '1px solid black', marginRight: '0px',
                  	                marginBottom: '-5px', paddingBottom : '0px' }} />;
        var myUrl = this.props.url;

	    return (
	            myUrl = '' ? img : <a target="_blank" rel="noreferrer" href={myUrl}> {img} </a>
	            );
	 }



}