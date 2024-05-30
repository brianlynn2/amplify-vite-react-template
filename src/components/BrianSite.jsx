import { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//import '../assets/slideshow.css';
import Portfolio from './Portfolio.jsx';
import Biopage from './Biopage.jsx';
import TileSection from './TileSection.jsx';
import { generateUrl} from './TileSection.jsx';
import { doScroll, setScrollId } from './Scroller.jsx';
import Book from './Book.jsx';


// banner constants
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  opacity: 0.5,
  color: '#000000',
  display: 'none'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}




const slideImages = [
  { url: 'images/shameless_images/IMG_7523.jpg'},
  { url: 'images/shameless_images/IMG_7527.jpg'},
  { url: 'images/shameless_images/IMG_7519.jpg'},

  { url: 'images/shameless_images/P1060417.jpg'},
  { url: 'images/shameless_images/P1060421.jpg'},
  { url: 'images/shameless_images/P1060414.jpg'},
  { url: 'images/shameless_images/P1060452.jpg'},
  { url: 'images/shameless_images/IMG_7534.jpg'},

  { url: 'images/shameless_images/P1060473.jpg'},
  { url: 'images/shameless_images/P1060483-Enhanced.jpg'},
  { url: 'images/shameless_images/P1060365.jpg'},
  { url: 'images/shameless_images/P1060362.jpg'},
  { url: 'images/shameless_images/P1060357.jpg'},


  {
    url: 'images/succor_banner.jpg',
    caption: 'Trio: Succor'
  },
  {
    url: 'images/sexy.jpg',
    caption: 'sexy'
  },

];

export default class BrianSite extends Component {



	constructor(props) {

		super(props);

		 var s = this.props.sel;
		 if (!s) s = "";

		this.state = {
			selected : s
			};

		this.selectSection = this.selectSection.bind(this);
		//this.navigateSection = this.navigateSection.bind(this);
	}

componentDidUpdate(prevProps, prevState) {
    var curSel = this.props.sel;
    var preSel = prevProps.sel;
//     alert("component did update with cur="+curSel+", prev="+preSel)
  if (curSel !== preSel) {
     this.setState({ selected: curSel});
  }
}

   render () {
    const bodytop = "bodytop";
     return (
    <div className="App" >
        <div class = "content" id={bodytop}>
        {setScrollId(bodytop)}
        { this.mainMenu() }
            <div class="Scrollable">
                <div className="centerBody">
                    { this.banner() }
                    { this.writeup()}
                    { this.body()}
                </div>
                { this.footer() }
            </div>
        </div>

    </div>
    );
    }
/*
    debug () {
       return(<p>history has length:  </p>);
    }
    */


    banner() {

        return (
            <div class="banner" style={{position : 'relative'}}>
                <Slide duration="1000" transition="2000" >
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                          <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}>{slideImage.caption}</span>
                          </div>
                        </div>
                      ))}
                </Slide>
           </div>
        );
    }



    writeup() {
        if (this.state.selected !== '') return;
        return (
            <div class="writeup">
               <p><b>Brian Lynn</b> is a multi-disciplinary artist, technologist, writer, and advisor.</p>
                <p>
            Brian&#39;s creative focus is on sharing how emotional and physical awareness and intimacy can create connection, love, and joy, and reduce loneliness and misery.  He bases this practice on his work in self-awareness (of feelings, beliefs, and needs) and on heart-centered connection (listening skills, authentic communication, and boundaries and consent). </p>
             <p>He has a particular interest in sensuality and sexuality, particularly creative ways for people to connect physically. He creates visual art (sketches, paintings, and photographs), video work, writing (essays and fiction), and workshops and classes on themes such as relationship skills and sexuality. And he uses his software development skills to support these projects, for example by creating tools for helping people achieve self-awareness.
                </p>
            </div>
        );
    }


    navigateSection(s) {
        this.selectSection(s);
        var url = generateUrl(null, s);
        this.props.nav(url);
    }

	selectSection (s) {
	//    alert("Selecting " + s);
	    this.setState( {
                selected :  s
        });
	}


mainMenu() {
    return (
        <div class="mainMenu">
            {this.menuEntry("Home", () => this.navigateSection(""))}
            {this.menuEntry("Bio", () => this.navigateSection("Bio"))}
            {this.menuEntry("Portfolio", () => this.navigateSection("Portfolio"))}
            {this.menuEntry("News", () => this.navigateSection("News"))}
            {this.menuEntry("Book", () => this.navigateSection("Book"))}
        </div>
    );
}

menuEntry(label, func) {
    var st = this.state.selected;
    var isSelected = (st === "" && label === "Home") || (st === label);
    var cls = isSelected ? "menuEntrySelected" : "menuEntry";
     return <span class={cls} onClick={func}>{label}</span>;
}


 body () {
        return (
            <div>
            { this.portfolio() }
            { this.bio() }
            { this.news() }
            { this.ktee() }
            </div>
            );
}

    portfolio() {
        return (
            <TileSection title = "Portfolio" image = "images/art-palette.jpg"
            select={this.selectSection} selected={this.state.selected}  nav ={this.props.nav}
                summary = "Several portfolios of selected art works."
                bgImage = "portfolio/drawings/RecliningWoman2.jpg">
                    <Portfolio nav = {this.props.nav} searchParams={this.props.searchParams} />
            </TileSection>
        );
    }

    bio () {
        return (
                    <TileSection title = "Bio" image = "images/personal.png"
                    select={this.selectSection} selected={this.state.selected}  nav ={this.props.nav}
                        summary = "Brian's biography"
                        bgImage = "images/brian_portrait_wide.jpg">
                            <Biopage nav = {this.props.nav} searchParams={this.props.searchParams}/>
                    </TileSection>
        );
    }



    news () {
        return (
                    <TileSection title = "News" image = "images/news.png"
                    select={this.selectSection} selected={this.state.selected}  nav ={this.props.nav}
                        summary = "Upcoming and recent events"
                        bgImage = "images/shameless_show_invitation_big.png">
                            <div>
                            <h2>Shameless show and party (Feb 9 &amp; 11, 2024)</h2>
                            <p><b><i>“I was walking over a sea of art.” - David R.</i></b></p>
                            <p>David was reacting to an immersive art installation at the Shameless show, which featured a wall completely covered with life drawings, shelves displaying
                            sketchbooks, photos, and some sex toys, and, most surprising and memorable to many visitors, a floor completely covered with drawings and quick gesture sketches,
                            protected by a layer of thick, clear, silky vinyl. See the <Link to="/port?topic=ShamelessShow" title="Shameless Gallery">Shameless show gallery</Link> for a comprehensive record of the show.</p>
                            <p>David went on to say:
                            "That accurately describes my experience of your second floor installation. The image for me was the spiritual experience of walking on water.
                            In part because of the reflective surface of the plastic but deeper, because water represents the unconscious aspects of the human experience.
                            Your life drawings on that floor could be said to represent the “naked” experience of being human amongst humans."</p>
                            <div style={{display: 'flex', alignItems: 'center' }} >
                             <img src="images/shameless_images/IMG_7528.jpg"  class="sectionImageWrapper" title ="Immersive art display at Shameless"/>
                             </div>
                            <p>“Shameless” was a show of some of my creative output from the past dozen years, with a focus on work from recent years.  It showed provocative, playful art about human connection, sensuality, sexuality, and the human form. On view were paintings, drawings, and sketches, collages, photography, video work, and a recorded reading from my novel in progress. I wanted to address shame about nudity and sexuality by including many works that incorporate or speak to these themes, in a playful or curious way.</p>
                            <p>My art was displayed throughout the house, including several video viewing rooms.  </p>
                            <p>On Friday there was a small pre-opening show for a dozen or so visitors, which morphed into an invitation-only evening party for 36 visitors.
                             (And at least a handful had to be turned away for lack of space).  And on Sunday there was an open house art show at which dozens of guests visited and many stayed for hours.
                            There was wine and cheese, and during the main show there was life drawing (which some guests tried out) and a burlesque dance performance.</p>
                            <p>Ian, another guest, was present for both the Friday party and the Sunday show.  He said,
                            "Your weekend was a truly wonderful experience. I didn't even get a chance to tell you how much I loved ALL of your media. I want to watch the video content again,
                            in an environment where I can really focus.  The installation you created in your house was so inspired and inspiring."</p>
                            <p>Many visitors commented on how impressed they were with the art-covered floor, and many commented on how strong the videos were.  Another guest commented: "Thank you for such a beautiful event, I'm so happy I came to both times ❤️ What a wonderful highlight of my day, week and month for sure! "
                            Another, new to the open relating community, commented that the videos were very educational to her and that it felt like a safe way to learn more.</p>
                            <p>David summed up his impression of the experience as follows: <i>This is what I get your mission is:  “To help others ease and transform self shame, and self repression, into an open and loving experience.”  From my observation of your guests, and the atmosphere of your event, I know that this is a mission well along in its quest.</i></p>
                            <p>Thank you to all who came to Shameless!</p>
                            <p>Some future events that are in planning:</p>
                            <ul>
                                <li>A small video-viewing event with a chance to listen carefully to several of the videos shown at Shameless and discuss them in a small group.</li>
                                <li>A somewhat larger video-viewing event where I would show a range of my videos, including some purely-art oriented videos as well as some relationship and sexuality related videos, and have a Q&amp;A session, and possibly some dancing.</li>
                                <li>A larger show with my drawing group, focusing on playful life drawing, in late 2024 or 2025.</li>
                                <li>Some kind of group show with several artists focusing on erotic and sensual art, most likely in 2025.</li>
                            </ul>
                            <p>Please let me know if you are interested in any of these.  (See contact info at the bottom of the page)</p>


                            </div>
                    </TileSection>
        );
    }


    ktee () {
        return (
            <TileSection
            select={this.selectSection} selected={this.state.selected}  nav ={this.props.nav}  searchParams={this.props.searchParams}
    	    title = "Book" image = "images/writing2.png"
                           summary = "Kinky Threesomes and Empathetic Economics (novel in progress)"
                            bgImage = "images/book/cover.jpg">
                     <Book title = "Kinky Threesomes and Empathetic Economics" nav ={this.props.nav}  searchParams={this.props.searchParams}
                	            />
    	    </TileSection>
    	    );
    }

    foo () {
    return (
                     <Book title = "Kinky Threesomes and Empathetic Economics"
                	            filename = "writing/ktee/KinkyThreesomesandEmpatheticEconomics.html" />
    );
    }


     footer () {
        return (
                <div class="footer" >
                        <span class="footerLeft">
                           { this.contactInfo()}
                           <span class="copyright">&copy; 2024, Brian Lynn</span>
                       </span>
                       { this.socialMedia() }
                </div>
        );
    }

    contactInfo () {
        return (
            <span class="contact">Email: brian [at] brianlynn.ca</span>
        );
    }

    socialMedia() {
    return (
         <span class="socials">
           <a href="https://www.instagram.com/brian.figures/" rel="noreferrer" target="_none"><img src="images/insta.png" alt="Instagram logo" height="20px"/></a>
           <span class="socialSpace"/>
           <a href="https://www.facebook.com/brian.lynn.artist" rel="noreferrer" target="_none"><img src="images/fb.png"   alt="Facebook logo" height="20px"/></a>
           <span class="socialSpace"/>
           <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/brian-lynn-abb929/"><img src="images/linkedin.png" alt="LinkedIn logo" height="20px"/></a>
        </span>
        );
    }
 }


