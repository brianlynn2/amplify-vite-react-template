import { Component, createElement, useState, useEffect } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import { Authenticator  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TileSection from "./TileSection.jsx";
import { parseTopic, parseMode, parseParam } from './TileSection.jsx';
import TileSelector from "./TileSelector.jsx";
import Chapter from './Chapter.jsx';
import kteeHtml from "../assets/KinkyThreesomesandEmpatheticEconomics.html?raw";
import Math from 'math';
import { initTracker} from './Tracker.jsx';
import { persistTrackingInfo, Persister, deleteAllTrackings }from './Persister.tsx';





const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);

        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};



export default class Book extends Component {

	constructor(props) {
		super(props);
		this.filename = this.props.filename;
		//this.myContents = require(this.filename);
		this.rawhtml = "";
		this.loadHtml = this.loadHtml.bind(this);
		this.renderChapter = this.renderChapter.bind(this);
		this.selectChapter = this.selectChapter.bind(this);
		this.renderModeSelector = this.renderModeSelector.bind(this);
		this.renderModeRadioButton = this.renderModeRadioButton.bind(this);
		this.setMode = this.setMode.bind(this);
		this.updateInviteEmail = this.updateInviteEmail.bind(this);
		this.updateInviteHash = this.updateInviteHash.bind(this);
		this.setTrackingInfo = this.setTrackingInfo.bind(this);
		this.renderClearTracking = this.renderClearTracking.bind(this);
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
        const mode  = this.getMode();
        const email = this.getInviteEmail();
        const code = this.getInviteHash();

 //       alert("book topic="+topic);
        //var mode = "request";
        this.state = {
            selected : topic,
            mode : mode,
            inviteEmail : email,
            inviteHash : code,
            trackingInfo : null,

            };
        this.setState ( { selected : topic, mode : mode});
        //this.state. selected = topic;
        //this.state.mode = mode;
    }

    getTopic() {
            return parseTopic(this.props.searchParams);
    }
    getMode() {
            return parseMode(this.props.searchParams);
    }

    getInviteEmail() {
        return parseParam(this.props.searchParams, "email");
    }

    getInviteHash() {
        return parseParam(this.props.searchParams, "code");
    }


    setMode (event) {
        var myMode = event.target.value;
  //      alert("set mode to "+myMode);
        this.setState ( {mode : myMode});
        const url = "book?mode="+myMode;
        this.props.nav(url);
    }

    setTrackingInfo (track) {
        this.setState( { trackingInfo: track});
    }

     trackStatus (key) {
        var trackings = this.state.trackingInfo;
        if (!trackings || trackings.length < 1) return "Unseen";

        var track = trackings.reduce(
                (accumulator, curval) =>  accumulator ? accumulator :
                   (curval.id == key ? curval : null), null);

        if (!track) return "Unseen";
        return track.seenBottom > 0.95 && track.cumTime > 60 ? "Finished" : "InProgress:" + track.seenBottom+", t="+track.cumTime;

        }


    updateInviteEmail (event) {
        var myEmail = event.target.value;
      //  alert("update invite email: "+myEmail);
        this.setState( {inviteEmail: myEmail});
    }


    updateInviteHash (event) {
        var myHash = event.target.value;
      //  alert("update invite hash: "+myHash);
        this.setState( {inviteHash: myHash});
    }



	loadHtml () {
	    if (this.loaded) return;
		//this.rawhtml = import("../assets/KinkyThreesomesandEmpatheticEconomics.html?raw");
        //this.rawhtml = (await import("../assets/KinkyThreesomesandEmpatheticEconomics.html?raw")).default;

		this.rawhtml = kteeHtml;
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
        var prefix = "?mode=signin&topic=";
        var nextChap = "Chapter" +(num + 1);
        var curChap =  num > 0 ? "Chapter"+num : "AuthorsNote";
        var prevChap = num > 1 ? "Chapter"+(num-1)  : num === 1 ? "AuthorsNote" : "";
        var link = num < 4 ? prefix + nextChap : "";
        var prevLink = prevChap === "" ? null : prefix + prevChap;

        var status = this.trackStatus("/book" + prefix+curChap);
        status = (status && status.startsWith("InProgress")) ? "InProgress" : status;
        var seenLabel = <p>{status}</p>;

	       return (
            <TileSection title = {title} select={this.selectChapter} selected={this.state.selected} page="book" nav ={this.props.nav}
                                    image = "images/writing2.png"  summary = {desc}
                                    bgImage =  {bgImage} leaf = {leaf} hideBgImage = {hideBgImage} prefix={prefix}
                                    status = { status }
                                      skipClosedSections = {true}>
	            { this.renderLink("Previous Chapter", prevLink)}
	            <Chapter rawHtml = {this.rawhtml} chapter={num} />
	            { tailImage ? <img src={tailImage} class="sectionImageWrapper"  alt="final image" /> : <> </>}
	            { this.renderLink("Next Chapter", link)}
	       </TileSection>
	       );
    }

    renderLink(label, link) {
        if (!link || link==="") return <></>;
        return (
    	           <div style={{marginTop: "10px", marginBottom: "10px"}}> <Link to={link}>{label}</Link></div>
        );
    }


	render () {
        var mode = this.state.mode;

       return (
            <div>
                {this.renderModeSelector() }
                { this.renderBookPanel(mode) }
            </div>
        );

	}

    renderBookPanel (mode) {
        if (mode=== "request") return this.renderRequest();
        if (mode=== "signup") return this.renderInvitation();
        if (mode=== "signin") return this.renderAuthBook(false);
    }

	renderRequest() {
	    return (<>
	    <h2>Requesting access</h2>
	    <p>Please e-mail a request to brian (at) brianlynn.ca for an invitation code.</p>
	    <p>You will need your e-mail address and your invitation code to create an account.</p>
	    </>);
	}

	renderInvitation() {
	    //var dispCode = genHash(this.state.inviteEmail);
	    //var dispCode = 'foo';
	    var myEmail = this.state.inviteEmail;
	    var dispCode = this.genHash(myEmail);
	    var myHash = this.state.inviteHash;
//	    alert("render - my email = "+myEmail+", hash = "+myHash);
	    var okInvite = this.checkHash(myEmail, myHash);
	    //var okInvite = true;
//	    alert("render: dispCode="+dispCode);
        if (okInvite) return this.renderSignup();
	    return (
	    <>
	    <h2>Please Sign Up here:</h2>
	    <table>
	    <tr>
	    <td class="inputLabel">Enter your e-mail address:</td>
	    <td class="input"><input class="input" style={{ width:"250px" }} size="40" name="invite_email" type="email" value={this.state.inviteEmail} onChange={this.updateInviteEmail}/></td>
	    </tr>
	    <tr>
	    <td class="inputLabel">Enter your invitation code:</td>
	    <td ><input class="input" style={{ width:"200px" }} name="invite_code" value={this.state.inviteHash} onChange={this.updateInviteHash}/></td>
	    </tr>
	    </table>
	    </>);
	}

    renderSignup() {
       return (
              <Authenticator  initialState="signUp"
                    socialProviders={['amazon', 'facebook','google', 'apple']}  hideSignIn={true} >
                    {({ signOut, user }) => (
                    <div>
                    </div>
                )}
              </Authenticator>
        );

    }

    renderSignin() {
         var ret = this.renderAuthBook(false);
         return ret;
    }

	  renderModeSelector() {

        return (
          <div  class="categorySelector">
              <p class="categorySelectorLabel">Read the book!</p>
            { this.renderModeRadioButton("request", "I'm just starting: Request an invitation") }
            { this.renderModeRadioButton("signup", "I have an invitation code: Sign up") }
            { this.renderModeRadioButton("signin", "I have an account: Sign in") }
          </div>
        );

      }


              renderModeRadioButton (mode, label) {
                  var curMode = this.state.mode;
                  var isChecked = curMode === mode;
                    var func = this.setMode;
                   // var setMode = null;
      //            alert("Radio button mode="+mode + ", state="+curMode+", checked="+isChecked);
               // return (<p>bar</p>);

                  return (
                            <div className="categoryButton">
                              <label>
                                <input
                                  type="radio"
                                  name="mode"
                                  value={mode}
                                  checked={isChecked}
                                  onChange={func}
                                  className="categoryInput"
                                />
                                {label}
                              </label>
                            </div>
                        );

              }


    genHash(str) {
        return cyrb53(str);
    }

    checkHash(str, hash) {
        var newhash = "" + this.genHash(str);
        var ok = newhash === hash;
  //      alert("check hash of "+str+ " (new has = "+newhash+")  vs  "+ hash + " = "+ok);
        return ok;
    }

	renderAuthBook (allowSignup) {

       return (
              <Authenticator
                    socialProviders={['amazon', 'facebook','google', 'apple']}  hideSignUp={!allowSignup} >
                    {({ signOut, user }) => (
                    <div>

                        {this.renderBook()}
                        {this.renderClearTracking()}
                        <button onClick={signOut}>Sign out</button>
                        <div>
                            <h3>Tracking info</h3>
                            <Persister setTracking={this.setTrackingInfo}/>
                        </div>
                    </div>
                )}
              </Authenticator>
        );
	}

    renderClearTracking() {
   //     var del = { deleteAllTrackings(this.state.trackingInfo)};
       return <button onClick={(e) => { deleteAllTrackings(this.state.trackingInfo)}}>Clear Tracking Info</button>;
    }

	 renderBook() {
	 	   this.loadHtml();

	 	   this.props.setPersister(persistTrackingInfo);

		 return (
		    <div>
    	        <h1 style={{valign:'center'}}>Kinky Threesomes and Empathetic Economics</h1>
    	        {this.renderChapters()}
    	     </div>
    	 );
	}


	renderChapters() {
         return (
            <div>
                {this.renderChapter(0, "Author's Note", "images/book/note.jpg")}
                {this.renderChapter(1, "And so it begins",  "images/book/chap1.jpg", "images/book/chap1end.jpg")}
                {this.renderChapter(2, "Or did it begin here?", "images/book/chap2.jpg", "images/book/chap2end.jpg")}
                {this.renderChapter(3, "Here. It actually began here.", "images/book/chap3.jpg", "images/book/chap3end.jpg")}
                {this.renderChapter(4, "The Arrow", "images/book/chap4.jpg", "images/book/chap4end.jpg")}
                {/*this.renderChapter(5, "The Nerd", "images/book/chap5.jpg", "images/book/chap5end.jpg")*/}
                {/*this.renderChapter(9, "Relating")*/}
                {/*this.renderChapter(18, "Polyamory")*/}
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
