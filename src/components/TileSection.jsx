import { Component, useRef, useEffect, createRef } from 'react';
import ImageGallery from "react-image-gallery";
import IconImage from './IconImage.jsx';
import setScrollTo from './Scroller.jsx';
import { doScroll, setScrollId } from './Scroller.jsx';

import  React from "react";

import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export function parseTopic(searchParams) {
        return parseParam(searchParams, 'topic');
}

export function parseMode(searchParams) {
        return parseParam(searchParams, 'mode');
}

export function parseSubtopic(searchParams) {
        return parseParam(searchParams, 'subtopic');
}

export function parseCategory(searchParams) {
        return parseParam(searchParams, 'category');
}

export function parseParam(searchParams, param) {
        const params = new URLSearchParams(searchParams);
        const val = params.get(param);
        return cleanParam(val);
}

export function cleanParam(val) {
        val = val ? val.replace(/:.*/,'') : '';
        return val.replace(/[+\' \&]/g, '');
}

export function generateUrl(page, topic, prefix) {
    topic = cleanParam(topic);
    if (prefix && page !== '') return prefix + topic;
    if (page && page !== '') return "/" + page + ((topic && topic !== '') ? "?topic=" + topic : "");
    if (topic === "Portfolio") topic = "port";
    topic = topic.toLowerCase();
    return "/" + ((!topic) ? "" : topic);
}

export default class TileSection extends Component {

	constructor(props) {

		super(props);
		this.properties = {
		    title: '',
		    image : '',
		    summary : '',
		    gallery : null
		  };
//		this.state = {
//			isOpen : this.props.isOpen,
//		};
        var st = this.props.status;
        this.setState(  { status : st?  st : "Unseen" });
		this.selectTile = this.selectTile.bind(this);
		this.setSelected = this.setSelected.bind(this);
		this.setSelector = this.setSelector.bind(this);
		this.isTileSelected = this.isTileSelected.bind(this);
		this.doTileScroll = this.doTileScroll.bind(this);
		this.activeSection = createRef();

	}

    componentDidUpdate(prevProps, prevState) {
        var curSel = this.props;
        var preSel = prevProps;
       //  alert("component did update with cur="+curSel+", prev="+preSel+", selected="+this.props.selected);
      if (curSel !== preSel) {
       	    this.setState( {
                      status :  this.props.status
               });
      }
//      this.doTileScroll();
        doScroll();
    }

    doTileScroll() {
        var active = this.activeSection;
    	var isLeaf = this.props.leaf;
    	var title = this.props.title;
    	var isSelected = this.isTileSelected();

//        alert("do tile scroll for "+title+", active="+active+", isleaf="+isLeaf+", isSel="+isSelected);
        if (isSelected && active && isLeaf) {
 //           setScrollTo(active);
//            alert("scrolling in "+title);
 //           doScroll();
        }
    }

	setSelected(sel) {
	    this.props.selected = sel;
	}

	setSelector(s) {
//	alert("setting selector");
	    //this.props.select = s;
	    this.setState ({ select: s});
	}

    isTileSelected() {
	    var selected = this.props.selected;
	    var myTitle = this.props.title;
	    var myTopic = this.props.topic;
	    if (! myTopic  || myTopic === '') myTopic = this.formatTopic(myTitle);

//	    alert("render tile, title="+myTitle+", topic="+myTopic+", selected="+selected);

	    var hasSelection = selected !== '';
	    var isSelected = (selected === myTopic);
	    return isSelected;
    }

	render() {
	    var selected = this.props.selected;
	    var myTitle = this.props.title;
	    var myTopic = this.props.topic;
	    if (! myTopic  || myTopic === '') myTopic = this.formatTopic(myTitle);

//	    alert("render tile, title="+myTitle+", topic="+myTopic+", selected="+selected);

	    var hasSelection = selected !== '';
	    var isSelected = this.isTileSelected();

//	    alert("section = "+myTitle+", my topic="+myTopic+", selected="+selected);

        return (
	        hasSelection ?
	            isSelected ? this.renderFull() :
	            this.props.skipClosedSections ? <></> : this.renderShrunk()
	        :   this.renderTile()
	    );
	}

    formatTopic(caption) {
      //  return caption.replace(/[ \&:]/g,"");
        return cleanParam(caption);
    }


	renderFull() {
	    const skip = this.props.skipBgImage === true;

	    var content =
	    <div >
                { this.renderSectionTitle(true) }
                <div class="sectionContent">
                    { skip ? "" :  this.renderBgImage(false) }
                    { this.renderBody() }
                </div>
        </div>;

	    return ( this.renderSectionDiv('sectionFull', '', content)   );
	}

	renderBody() {
	    var myGallery = this.props.gallery;
	    if (myGallery) {
	        myGallery = this.initGallery(myGallery);
	        return 	<ImageGallery items={myGallery} />;
	    }
	    return   <span > { this.props.children }</span>;

	}

    initGallery(mygall) {
        var i;
        for (i = 0; i < mygall.length; i++) {
            var img = mygall[i];
            if (img.thumbnail) continue;
            img.thumbnail = img.original;
        }
        return mygall;
    }

	renderShrunk() {
        var myTitle = this.props.title;
        var content = this.renderSectionTitle(false);

	    return (  this.renderSectionDiv('sectionShrunk', myTitle, content) );
	}


	renderTile() {
	    var myTitle = this.props.title;
	    var mySummary = this.props.summary;
	    var hideBgImage = this.props.hideBgImage;
        var summary =  <div class="sectionSummary" > <span> {mySummary} </span></div>;
        var cls = hideBgImage? "tile shrunk" : "tile";
        var content =
            <span >
               { this.renderSectionTitle(false) }
               {summary}
               { hideBgImage ? <> </> : this.renderBgImage(true) }
           </span>

	    return (
	            this.renderSectionDiv(cls, myTitle, content)
        );
	 }



        renderSectionDiv (myClass, select, content) {
            var mySummary = this.props.summary;

    	    return (
    	            <div class={myClass} title= {mySummary}  onClick={ select !== '' ? () => this.selectTile(select) : null} >
                        { content}
                   </div>
    	    );
        }


    selectTile (select) {
        //    alert("select tile");
        	var selector = this.props.select;
        	var nav = this.props.nav;
        	var page = this.props.page;
        	var urlPrefix = this.props.prefix;
        	var topic = this.formatTopic(select);
        	var url = generateUrl(page, topic, urlPrefix);
        //	alert("topic="+topic+", url="+url)
           // if (!selector) alert("no selector found in TileSection");
            //alert("type of selector is "+(typeof selector));
        	selector(topic);
        	nav(url);
    }

	 renderSectionTitle (isDeselect) {
     	    var myTitle = this.props.title;
     	    var myImage = this.props.image;
     	    var myId = myTitle.replace(/ /, '');
     	    if (isDeselect) {
     	        setScrollId(myId);
     	    }
     	    var myClass = "sectionTitleBand";

     	    var status = this.props.status;
     	    if (status === "Finished") myClass = myClass + " sectionTitleFinished";
     	    if (status === "InProgress") myClass = myClass + " sectionTitleInProgress";
     	    return (
                     <div  id={myId} class={myClass}  onClick={ isDeselect  ? () => this.selectTile('') : null}>
                         <IconImage src={myImage} height = "25"/>
                         <span class="sectionTitle">{myTitle}</span>
                     </div>
     	    );
	 }

    renderBgImage (isConstrained) {
	    var myGallery = this.props.gallery;
	    if (myGallery && !isConstrained) return ;

        var myBgImage = this.props.bgImage;
        var myCaption = this.props.title + " background image";
       var myClass = isConstrained ? "tileImage" : "sectionImage";
       var myWrapper = isConstrained ? "tileImageWrapper" : "sectionImageWrapper";
       var bgImage =   <img src={myBgImage} class={myWrapper} alt={myCaption}  />;

        return (
               <div class={myClass}> { bgImage} </div>
                  );
    }


}
