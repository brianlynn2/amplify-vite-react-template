import { Component } from 'react';

import React from "react";

import TileSection from "./TileSection.jsx";
import TileSelector from "./TileSelector.jsx";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

export default class Chapter extends Component {

	constructor(props) {
		super(props);
		this.parsed = false;
		this.pendingSkip = false;
		this.skipping = false;
		this.foundChapter = 0;
		this.targetChapter = this.props.chapter;
	}



  options =  {
    replace : (node, index) => {
    if (node.type !== "tag") return null;
    if (this.targetChapter > 0 && node.name === "body") {
       this.pendingSkip = true;
        return null;
    }
    if (this.pendingSkip && node.name === "div") {
        this.skipping = true;
        this.pendingSkip = false;
    }
    if (node.name === "h1") {
        if (this.targetChapter < 1) {
            this.skipping = true;
        } else {
            var ch = node.children[0];
            if (ch && ch.name === "span" && ch.children[0]) {
                this.foundChapter = this.foundChapter + 1;
                this.skipping = (this.foundChapter != this.targetChapter);
            }
        }
    }
    return this.skipping ? <> </> : null;
    }
};

    parseHtml() {
        if (this.parsed) return;
        this.parsed = true;
        var html = this.props.rawHtml;

        var opts = this.options;
		this.html = parse(html, opts);
        //alert("html root is " + this.html.type);
        //var chi = this.html.props.children[0];
        //alert("first child is "+chi.type);
	}

	render () {
	    this.parseHtml();


	    return  (<div>
	                <div>{this.html}</div>
	             </div>);

	}

}
