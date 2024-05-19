import { Component } from 'react';
import IconImage from './IconImage.jsx';

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TileSection from './TileSection.jsx';
import { parseTopic } from './TileSection.jsx';

export default class Biopage extends Component {


	constructor(props) {

		super(props);


		//this.selectSection = this.selectSection.bind(this);
		this.updateState = this.updateState.bind(this);
		this. initState();
        this.selectSection = this.selectSection.bind(this);
        //const tc = <TileContainer page="bio" updateState={this.updateState} searchParams={this.props.searchParams} />;
        //const tc = TileContainer (  "bio" this.updateState,this.props.searchParams   );

        //var mySelector = tc.selectSection;
        //this.foo = mySelector;
	}



initState() {
    const topic = this.getTopic();
//    alert("init state to "+topic);
    this.state = {
        selected : topic
        };

}



getTopic() {
        return parseTopic(this.props.searchParams);
}


componentDidUpdate(prevProps, prevState) {
    var curSel = this.props.searchParams;
    var preSel = prevProps.searchParams;
//     alert("component did update with cur="+curSel+", prev="+preSel)
  if (curSel !== preSel) {
     this.setState({ selected: this.getTopic()});
  }
}

    render () {
//        alert("render biopage, state is "+ this.state.selected);
        return (
            <div>
            { this.education() }
            { this.tech() }
            { this.art() }
            { this.writing() }
            { this.relationships() }
            { this.personal() }
            </div>
            );
    }

	selectSection (topic) {
	//alert("Selecting " + s);
	 //   var topic = this.formatTopic(s);
//        alert("selectSection, s="+s+", topic="+topic);
	    this.updateState(topic, true);
//        this.props.nav("/bio?topic="+topic);

  //      var url = generateUrl("bio", topic);
   //     alert("url is "+url);
     //   this.props.nav(url);
	}

/*
	selectSection (s) {
	    this.state.tileContainer.selectSection(s);
	}
	*/



	updateState (s, render) {
	if (!s) s = '';
//	alert("update state to " +s);
	var st = { selected : s};
	if (render)
	     this.setState(st);
	else
	     this.state = st;
 //   alert("new state is "+ this.state.selected);
	}



 education() {
    const             summary = "Brian did prize-winning work in chaos theory at Harvard, after a full scholarship to a private school in Montreal.";
    const body = <span>
         <IconImage src="images/harvard.png" url="http://www.harvard.edu" title ="Harvard"/>
         <IconImage src="images/lcc.jpg" url="http://lcc.ca" title="Lower Canada College"/>
         <p>Educated at <a href="https://www.harvard.edu/" rel="noreferrer" target="_blank">Harvard</a> (A.B. 1985, Physics), Brian did prize-winning work in chaos theory.  He also studied broadly, in areas including
           English literature (particularly Elizabethan and Jacobean drama), history and art history, philosophy, art, musical appreciation, psychology, and more.</p>
           <p>Prior to Harvard, Brian was on full scholarship at <a href="http://lcc.ca" rel="noreferrer" target="_blank">Lower Canada College</a>, a prestigious private boys&#39; school in Montreal.
           At LCC, Brian won the Governor General&#39;s Medal for top student, and placed highly in several math competitions, including the University of Waterloo Junior Math Contest.</p>
        </span>;

    return (
        this.tileSection("Education", "images/education.png", "images/harvard_widener.jpg", summary, body)
    );
    }




 tech() {
    const  summary = "Brian has worked for four decades in technology, with 30 years on Wall St.  He developed the main technology standard used in the massive OTC derivatives market.";

    const body = <span>

                <IconImage src="images/cprail-s.png" title="CP Rail" url="https://www.cpr.ca/en/"/>
                <IconImage src="images/aecl-s.png" title="Atomic Energy of Canada, Ltd." url="https://www.aecl.ca/"/>
                <IconImage src="images/cantel.png" title = "Rogers Cantel" url = "https://www.rogers.com/"/>
                <IconImage src="images/cibcwm-s.png" title="CIBC World Markets" url="https://cibccm.com/en/"/>
                <IconImage src="images/jpm-s.jpg" title="JPMorgan" url="https://www.jpmorgan.com/global"/>
                <IconImage src="images/gemlogo-ls.png" title="Global Electronic Markets" url="http://global-emarkets.com"/>
                <IconImage src="images/isda-s.jpg" title="International Swaps and Derivatives Assn" url="http://isda.org"/>
                <IconImage src="images/dtcc-s.jpg" title="the Depository Trust &amp; Clearing Corporation" url="http://dtcc.com"/>
                <IconImage src="images/fpml.png" title="Financial Products Markup Language" url="http://fpml.org"/>
                <IconImage src="images/New-CDM-logo2.png" title="Common Domain Model"  url="https://www.finos.org/common-domain-model"/>


        <p>After graduating from Harvard, Brian worked on safety critical software
        at <a href="https://www.cpr.ca/en/" rel="noreferrer" target="_blank">CP Rail</a> and <a href="https://www.aecl.ca/" rel="noreferrer" target="_blank">Atomic Energy of Canada, Ltd.</a> ,
          and Object Oriented Analysis and Design at <a rel="noreferrer" target="_blank" href="https://www.rogers.com/">Rogers Cantel</a>.</p>
        <p>Brian&#39;s technology work took him to Wall Street in 1994, where he has worked for nearly three decades in the complex
        privately-negotiated derivatives industry, initially for <a href="https://cibccm.com/en/" rel="noreferrer" target="_blank">CIBC World Markets</a>.
          A highlight of Brian&#39;s financial technology career, while a Vice President at <a href="https://www.jpmorgan.com/global" rel="noreferrer" target="_blank">JPMorgan</a> in 1999, was leading the development of the <a href="http://fpml.org" rel="noreferrer" target="_blank">FpML</a> standard,
          still the most widely used messaging standard in OTC derivatives, and used for processing and reporting on trillions of dollars worth of derivatives.
          Brian was the JPMorgan program manager for FpML, with responsibility for syndicating the standard across the derivatives industry, and acted as co-chair of the FpML Standards Committee for the first three years of its development.
          He continues to be involved with the development of the standard to this day.
        </p><p>
        In addition, Brian&#39;s financial technology firm, <a rel="noreferrer" target="_blank" href="http://global-emarkets.com">Global Electronic Markets</a>, developed and sold FpML-based OTC derivative reconciliation software to various customers,
          as well as advising many key firms in the industry, including <a rel="noreferrer" target="_blank" href="http://isda.org">ISDA</a>, the International Swaps and Derivatives association, <a
          rel="noreferrer" target="_blank" href="http://dtcc.com">DTCC</a>, the Depository Trust &amp; Clearing Corporation, and many others.
        </p><p>
          Since 2021 Brian has been advising ISDA on the <a rel="noreferrer" target="_blank" href="https://www.finos.org/common-domain-model">Common Domain Model</a> initiative to create a financial industry-wide data model.
             Brian has advised on governance, product modeling, and technical issues such as reference data, change control guidelines, and serialization.</p>
             <p>Some of the technologies and techniques that Brian has used include:</p>
             <ul>
                <li>Functional and objected oriented programming languages including Java, C++, C, VBA, Pascal, etc., etc.</li>
                <li>Markup and scripting languages such as XML schema, XSLT, and XQuery</li>
                <li>Web development languages and tools including HTML, JavaScript, CSS, Bootstrap</li>
                <li>Database tools and languages including SQL, Sybase, Oracle, SQL Server, MS Access, eXist, etc.</li>
                <li>Low-level languages including assembler (6502, 8086, PDP-11), device drivers, interrupt programming</li>
                <li>Methodologies including Object Oriented Analysis and Design, Structured Analysis, Entity-Relationship Modeling, etc.</li>
                <li>Project management tools and methodologies, including traditional and agile</li>
                <li>Business management tools such as business plans, budgetting, accounting, etc.</li>
             </ul>
          <p>Brian&#39;s professional resume can be found at <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/brian-lynn-abb929/">LinkedIn</a>.</p>
          <p>This site is written in React running under Node.js, hosted on Amazon Web Services, deployed using Amplify.</p>

        </span>;

    return (
         this.tileSection("Technology \& Business",  "images/programming.png", "images/jpmorgan.jpg", summary, body)
       );
    }



     art() {
        const summary="Brian's artistic focus is on figurative art, in painting, drawing, photography, and video.";
        const body = <span>

               <IconImage src="images/aac.png" title="Academy of Art, Canada" url="http://academyofartcanada.com"/>
                <IconImage src="images/ara-s.jpg" title="Academy of Realist Art, Canada" url="http://academyofrealistart.com"/>
                <IconImage src="images/tsa.png" title="Toronto School of Art" url="http://tsa-art.com"/>
                <IconImage src="images/succor_cropped.jpg" title="Brian's Instagram" url="https://www.instagram.com/brian.figures/"/>

        <p>After returning to Toronto in 2010, Brian has shifted much of his energy to visual art.  He draws and paints and does photographic and video work,
          and has a focus on the human body, connections between people, and sensuality and sexuality.</p>
            <p>He has studied drawing, painting, and sculpture
          at the <a rel="noreferrer" target="_blank" href="http://tsa-art.com">Toronto School of Art,</a>
          the <a href="http://academyofartcanada.com" rel="noreferrer" target="_blank">Academy of Art Canada</a> (a traditional atelier specializing in representational art),
          the <a href="http://academyofrealistart.com" rel="noreferrer" target="_blank">Academy of Realist Art,</a> and has done a number of masterclasses, with artists such as <a href="https://www.instagram.com/costa_dvorezky/" rel="noreferrer" target="_none">Costa Dvoresky</a>, <a href="https://www.instagram.com/slevenson/" rel="noreferrer" target="_none">Shana Levenson</a>, and <a href="https://www.instagram.com/doriellecaimi/" rel="noreferrer" target="_none">Dorielle Caimi</a>.</p>
          <p>  Brian has been an active member of a weekly life drawing group since 2012; some of his drawings are visible on
           his <a href="https://www.instagram.com/brian.figures/" rel="noreferrer" target="_none">Instagram account</a> and
           his <a href="https://www.facebook.com/brian.lynn.artist" rel="noreferrer" target="_none">Facebook artist page</a>.</p>
           <h2>Group Shows</h2>
           <ul>
           	<li class="cvitem"><a rel="noreferrer" target="_blank" href="http://riverdaleartwalk.ca/">Riverdale Artwalk 2018</a> , The Artists' Network. (10x10 booth with numerous paintings and photographs.)</li>
           	<li class="cvitem"> <a rel="noreferrer" target="_blank" href="https://www.superwondergallery.com/new-events/2019/2/22/super-naughty-show-2019">The Super Naughty Show 2019</a>,SuperWonder Gallery. (Several paintings from the Trio series were featured at the front of the gallery in this large group show.)</li>
           	<li class="cvitem"><a rel="noreferrer" target="_blank" href="https://www.superwondergallery.com/new-events/2016/4/4/reversion-a-figurative-portrait-art-exhibition">Reversion 2016</a>, SuperWonder Gallery.(2 paintings)</li>
           	<li class="cvitem">The Collective 2013, <a rel="noreferrer" target="_blank" href="https://www.facebook.com/TheCollectiveAtTheBen/">Ben Navaee Gallery</a> (drawings and watercolours)</li>
           </ul>
           <p>Please see the <Link to="/port?topic=Shows">Shows</Link> portfolio for images from some of these shows.</p>

            <h2>Residencies</h2>
            <ul>
                <li class="cvitem">Attended the <a rel="noreferrer" target="_blank" href="https://www2.ocadu.ca/event/bonavista-biennale-2017">Bonavista Biennale 2017</a> as an assistant and videographer to invited artist Iris Haeussler.</li>
                <li class="cvitem">Attended the <a rel="noreferrer" target="_blank" href="http://nakedstate.ca/artists-2016/">Naked State 2016</a> contemporary art residency at Bare Oaks Family Naturist Park.</li>
            </ul>
            <h2>Studio Shows</h2>
            <ul>
                <li class="cvitem">Shameless, 2024 - presented videos, paintings, photos, sketches, and collages focusing on sexuality, sensuality, and nudity</li>
                <li class="cvitem">Raw, 2019 - presented photos, sketches, videos, and paintings focusing on grief</li>
                <li class="cvitem">21st Century Loving, 2017 - presented paintings, photos, and videos focusing on non-traditional relating</li>
            </ul>

            </span>;

        return (
         this.tileSection("Art", "images/art-palette.jpg", "images/sketch.jpg", summary, body)
        );
        }

     writing() {
        const summary="Brian writes fiction and non-fiction, including a novel in progress and essays on our economic values.";
        const body= <span>
                           <p>Brian also does  creative writing.  He has written on the concept of <a rel="noreferrer" target="_blank" href="https://medium.com/@brianlynn_33439/towards-empathetic-economics-c441f3e8e3d1" >Empathetic Economics</a>.
                              He is currently working on the second draft of a picaresque erotic novel.  Come back for more details in the coming months!</p>
            </span>;
        return (
         this.tileSection("Writing", "images/writing2.png", "images/bull_and_kid.jpg", summary, body)
         );
     }

     relationships() {
        const    summary="Brian has worked extensively in personal awareness, interpersonal communication, relationships, and sexuality.";

        const body = <span>
            <IconImage src="images/pths.png" title="Pathway to Happiness" url="http://pathwaytohappiness.com"/>
            <IconImage src="images/hai.jpg" title="Human Awareness Institute" url="hai.org"/>
            <IconImage src="images/SidewalkTalk.jpg" title="Sidewalk Talk" url="https://sidewalk-talk.org/"/>
            <IconImage src="images/ista.jpg" title="International School of Temple Arts" url="http://ista.life"/>
            <IconImage src="images/PAL_LOGO_2021.jpg" title="Powerful and Loving" url="http://powerfulandloving.com"/>
            <IconImage src="images/poly.jpg" title=""/>


        <p>In addition to Brian&#39;s studies in the technical skills of art making, he has studied extensively in areas including personal awareness,
        interpersonal communication, sexuality, and coaching and mentoring.  He has worked extensively in the self-guided
        program <a href="http://pathwaytohappiness.com">Pathway to Happiness</a>, which focuses on self-awareness and emotional self-mastery,
        and has learned interpersonal communication skills such as heart-centered listening at
        the <a rel="noreferrer" target="_blank" href="hai.org">Human Awareness Institute,</a> (HAI) and <a rel="noreferrer" target="_blank" href="https://www.sidewalk-talk.org/">Sidewalk Talk</a>.   He has also studied relationships and sexuality at a variety of organizations
         through various workshops, including ones put on by HAI and the <a href="http://ista.life" rel="noreferrer" target="_none">International School of Temple Arts</a>.  He leads discussion groups and mentors on sexuality for a
        men&#39;s group, <a rel="noreferrer" target="_blank" href="http://powerfulandloving.com">Powerful and Loving,</a> acts
        as a team assistant for HAI,  and uses his skills to organize events blending art and eros.</p>
        <p>During the early months of the pandemic, Brian developed a prototype of a tool called Insight Journal to capture his journaling approach, which is based on concepts from Pathway to Happiness, Non-Violent Communication,
        and other modalities.  He intends to develop a new version of that tool over the coming years as part of this website.</p>
            </span>;

        return (
          this.tileSection("Awareness \& Sexuality", "images/relationships3.png", "images/sexy.jpg", summary, body)
         );
     }

      personal() {
            const  summary = "Brian lives with his partner in Toronto and at a farm near Owen Sound.  He has two adult children.";
            const body = <span>
                        <p>Brian lives in Toronto (Annex/Seaton Village/Christie Pits area) with his partner. They also share in an inter-generational farm community near Allenford, Ontario
                          (close to Owen Sound at the base of the Bruce Peninsula), where a few cattle graze on the meadow, and they take pride
                          in their nascent vegetable garden.  Brian and his partner each have two adult children from previous marriages.</p>
                        <p>Some of the other interests that Brian has engaged in over the course of his life include early music (especially Baroque and Renaissance), Southeast Asian cuisine, hockey, Taiko drumming, and improvisational comedy.</p>
                        <p>Brian can be reached through his personal <a href="https://www.facebook.com/figuration/" rel="noreferrer" target="_none">Facebook account</a>.</p>
                </span>;

             return ( this.tileSection("Personal", "images/personal.png","images/eselsohr.png", summary, body));
          }



    tileSection(title, image, bgImage, summary, content) {
        return (
                 <TileSection title = {title} image = {image} bgImage ={bgImage} summary={summary}
                   select={this.selectSection} selected={this.state.selected} page="bio" nav ={this.props.nav} leaf={true}  >
                    {content}
                 </TileSection>
        );
    }
}


