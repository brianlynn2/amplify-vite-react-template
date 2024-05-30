import { Component } from 'react';
import ReactPlayer from 'react-player';

//import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";




export default class VideoBubble extends Component {

// const { height, width } = useWindowDimensions();

    defaultProps = {
        className: 'react-player fixed-bottom',
        controls : true
    }


	constructor(props) {

		super(props);
		this.properties = {
		    url: '',
		    id : ''
		  };
		this.state = {
			left : this.props.left,
			top : this.props.top,
			horiz_speed : 5,
			vert_speed : 3,
			clip : 35,
			bubble_height : 200,
			width : window.innerWidth,
			height : window.innerHeight,
			aspectRatio : 1.87,
			playing : false,
			frozen : false,
			isInitial : false
		};
		this.updatePos = this.updatePos.bind(this);
		this.expandToFull = this.expandToFull.bind(this);
		this.grow = this.grow.bind(this);
		this.shrink = this.shrink.bind(this);
		this.maintainFull = this.maintainFull.bind(this);
		this.updatePos();
		this.onClick = this.onClick.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handlePlayerMount = this.handlePlayerMount.bind(this);
        this.startPlaying = this.startPlaying.bind(this);
//        setTimeout(this.startPlaying, 2000);
		//setTimeout(this.expandToFull, 1000);
		//this.makeApiCall = this.makeApiCall.bind(this);
	}

startPlaying () {
    this.setState({playing : true });
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
//    alert("set window to "+ window.innerWidth + ": "+ window.innerHeight);
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

    onClick (e, myObj) {
        //var mytarg = e.currentTarget;
        //alert("hello");
        //this.controls = true;
        //setTimeout(this.expandToFull, 100);
      //  if (!this.player) alert ("player event not found");
      //  if (!e.getInternalPlayer()) alert("player not found");
      //  var isPlaying = this.state.isPlaying;
      //  var player = e.getInternalPlayer();
      //  if (player &&  !player.playing) alert("starting");
     //   if (player  && !player.playing) { player.playing = true;  player.play(); }
 //       this.refs.vidRef.play();
        setTimeout(this.startPlaying, 500);
        //myObj.setState( { playing : true });
        if (this.frozen) return;
        this.grow();
    }

    updatePos() {
        var st = this.state;
        if (st.frozen) return;

   //    alert("update left:"+st.left + " , top="+st.top);
        var l = st.left.slice(0, -2);
        var newl = parseInt(l) + st.horiz_speed;
        var width = st.width;
        var height = st.height;
        var bubble_height = st.bubble_height;
        var bubble_width = bubble_height * st.aspectRatio;
        if (newl + bubble_width > width) { newl = width - bubble_width; st.horiz_speed = - st.horiz_speed;}
        if (newl < 0) { newl = 0; st.horiz_speed = - st.horiz_speed;}

        var t = st.top.slice(0, -2);
        var newt = parseInt(t) + st.vert_speed;
        if (newt + bubble_height > height) { newt = height - bubble_height; st.vert_speed = - st.vert_speed;}
        if (newt < 0) { newt = 0; st.vert_speed = - st.vert_speed;}
        this.setState( {
        left :  newl + "px",
        top : newt + "px"
        });
        setTimeout(this.updatePos, 50);
    }

    grow () {
        var ht = this.state.bubble_height;
        var height = this.state.height;
        var w = ht * this.state.aspectRatio;
        var width = this.state.width;
        var impliedHt = width / this.state.aspectRatio;
        if (ht > height || ht > impliedHt) {
              this.expandToFull();
              return;
        }
        this.setState ( { bubble_height : ht + 40});
        setTimeout(this.grow, 50);
    }

    expandToFull() {
        var st = this.state;
        var clp = st.clip;

        if (clp >= 73)  {
            this.setState ( { frozen : true });
            setTimeout(this.maintainFull, 200);
            return;
        }
        clp = clp + 1;
        this.setState( { clip: clp });
        setTimeout(this.expandToFull, 50);
    }

    maintainFull () {
          var ht = this.state.bubble_height;
          var w = ht * this.state.aspectRatio;
          var height = this.state.height;
          var width = this.state.width;
          var impliedHt = width / this.state.aspectRatio;
          var newHt = impliedHt < height ? impliedHt : height;
//          if (newHt != ht) alert("w=" + w +", impl ht="+impliedHt+", new height="+ newHt + ", current="+ht);
          if (newHt != ht) this.setState( { bubble_height : newHt});
          setTimeout(this.maintainFull, 200);
    }

        shrink() {
            var st = this.state;
            var clp = st.clip;

            if (clp <=35)  {
                //  setTimeout(this.expandToFull, 2000);
                  return;
             }
            clp = clp - 1;
            this.setState( { clip: clp });
            setTimeout(this.shrink, 50);
        }


handlePlayerMount = event => {
//   alert("handle mount ");
    if (this.player) {
//      this.progress() // Ensure onProgress is still called in strict mode
        return // Return here to prevent loading twice in strict mode
    }
//    alert("recording player");
    this.player = event;
   // alert("mounted");
//    this.player.load(this.props.url)
//    this.progress()
  }

	render() {
	    //var vid =  super.render();
	    var myUrl = this.props.url;
	    var id = this.props.id;
	    var mytop = this.state.top;
	    var myleft = this.state.left;
	    var clip = this.state.clip;
	    var isPlaying = this.state.playing  || this.state.isInitial;

	    this.state.isInitial = false;
   //     var isPlaying = true;
	    var clp = "circle(" + clip + "%)";
        var bubble_height = this.state.bubble_height;
	    var bubble_width = bubble_height * this.state.aspectRatio;
	    var height = this.state.height;
	    var width = this.state.width;
	    if (mytop + bubble_height > height) mytop = height - bubble_height;
	    if (myleft + bubble_width > width) myleft = width - bubble_width;
	    var h = "" + bubble_height + "px";
	    var w = "" + bubble_width + "px";
	    //if (this.player && isPlaying && !this.player.playing) this.player.play();
	    return <div>
	                <ReactPlayer ref="vidRef" className= 'Bubble'  width={w} height={h}
	                        onReady={ this.handlePlayerMount }
	                         onClick={ this.onClick}
	                        style={{top : mytop, left : myleft, position: "absolute", clipPath: clp}}
	                        controls = {isPlaying}
	                        url = {myUrl}
	                        playing = {isPlaying} />
	                 </div>;
	 }




}
