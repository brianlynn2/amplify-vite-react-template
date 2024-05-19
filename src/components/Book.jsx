import { Component, createElement } from 'react';

import React from "react";
import { Link } from "react-router-dom";

import TileSection from "./TileSection.jsx";
import { parseTopic } from './TileSection.jsx';
import TileSelector from "./TileSelector.jsx";
import Chapter from './Chapter.jsx';

export default class Book extends Component {

	constructor(props) {
		super(props);
		this.filename = this.props.filename;
		//this.myContents = require(this.filename);
		this.loadHtml = this.loadHtml.bind(this);
		this.renderChapter = this.renderChapter.bind(this);
		this.selectChapter = this.selectChapter.bind(this);
//		this.chapterTitles = "";
//		this.foundCh = false;
		this.initState();
	}

componentDidUpdate(prevProps, prevState) {
    var curSel = this.props.searchParams;
    var preSel = prevProps.searchParams;
//     alert("component did update with cur="+curSel+", prev="+preSel)
  if (curSel !== preSel) {
     this.initState();
  }
}

	initState() {
        const topic = this.getTopic();
 //       alert("book topic="+topic);
        this.state = {
            selected : topic,
            };
        this.setState ( { selected : topic});
    }

    getTopic() {
            return parseTopic(this.props.searchParams);
    }


	loadHtml () {
	    if (this.loaded) return;
		this.rawhtml = require("../writing/KinkyThreesomesandEmpatheticEconomics.html");
	    this.loaded = true;
	}

    renderChapter(num, desc, bgImage, tailImage) {
        bgImage =  bgImage? bgImage :  "images/sexy.jpg";
        const leaf = true;
        const hideBgImage = true;
        var title = num === 0 ? desc : "Chapter " + num;
        var fulldesc = title + ": " +desc;
        if (hideBgImage) {
            if (num!==0) title = fulldesc;
            desc = "";
        } else {
            desc = num ===0 ? desc : fulldesc
        }
        var nextChap = "Chapter" +(num + 1);
        var link = "/book?topic="+ nextChap;
	       return (
            <TileSection title = {title} select={this.selectChapter} selected={this.state.selected} page="book" nav ={this.props.nav}
                                    image = "images/writing2.png"  summary = {desc}
                                    bgImage =  {bgImage} leaf = {leaf} hideBgImage = {hideBgImage} >
	            <Chapter rawHtml = {this.rawhtml} chapter={num} />
	            { tailImage ? <img src={tailImage} class="sectionImageWrapper"  alt="final image" /> : <> </>}
	           <div style={{marginTop: "10px", marginBottom: "10px"}}> <Link to={link}>Next Chapter</Link></div>
	       </TileSection>
	       );
    }

	render () {
	   //this.parseHtml();
	   this.loadHtml();

	        return (
	        <div>
	        <h1 style={{valign:'center'}}>Kinky Threesomes and Empathetic Economics</h1>
	        {this.renderChapter(0, "Author's Note", "images/book/note.jpg")}
	        {this.renderChapter(1, "And so it begins",  "images/book/chap1.jpg", "images/book/chap1end.jpg")}
	        {this.renderChapter(2, "Or did it begin here?", "images/book/chap2.jpg", "images/book/chap2end.jpg")}
	        {this.renderChapter(3, "Here. It actually began here.", "images/book/chap3.jpg", "images/book/chap3end.jpg")}
	        {this.renderChapter(4, "The Arrow", "images/book/chap4.jpg", "images/book/chap4end.jpg")}
	        {this.renderChapter(5, "The Nerd", "images/book/chap5.jpg", "images/book/chap5end.jpg")}
	        {this.renderChapter(9, "Relating")}
	        {this.renderChapter(18, "Polyamory")}
	        </div>
	        );
	}

	selectChapter (topic) {
       	  //  var topic = this.formatTopic(s);
 //             alert("select chapter, chapter="+topic); //+", topic="+topic);
       	    this.setState( {
                      selected :  topic
               });
             //  this.props.nav("/port?topic="+topic);
	}

}
