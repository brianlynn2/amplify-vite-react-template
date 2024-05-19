import { Component, Children } from 'react';
import TileSection from "./TileSection.jsx";

export default class TileSelector extends Component {

	constructor(props) {

        super(props);
		this.state = {
			selected : props.selected
		};
		this.selectTile = this.selectTile.bind(this);
	}

/*
componentDidUpdate(prevProps, prevState) {
    var curSel = this.props.sel;
    var preSel = prevProps.sel;
     const arrayChildren = Children.toArray(this.props.children);
//     alert("component did update with cur="+curSel+", prev="+preSel)

    arrayChildren.forEach((child, index) => {
        child.setSelected(curSel);
        child.setSelector(this.selectTile);
    });
  if (curSel !== preSel) {
    // this.setState({ selected: curSel});

  }
}
*/



	selectTile (sel) {
       	  //  var topic = this.formatTopic(s);
         //     alert("select my tile, sel="+sel); //+", topic="+topic);
         const searchParams = this.props.searchParams;
         const topic =
       	    this.setState( {
                      selected :  sel
               });
             //  this.props.nav("/port?topic="+topic);
	}

	render () {
	    const tiles = this.props.tiles;

        if (!tiles) return <span > { this.props.children }</span>;
	    return (
	        <div>
	        { tiles.map((tile,i) => {
	            return ( this.renderTile(tile)) })
	        }
	        </div>
            );
	}

    renderTile(tile)  {

        var title = tile.title;
        const description = tile.description;
        const url = tile.url;
        const mySelector = this.selectTile;
        const mySelected = this.props.sel;
        const bgImage = tile.bgImage;

        if (!mySelector) title = "no selector";
        var video = (url)?        <iframe src={url} class="vimeoFrame"  frameborder="0" allowfullscreen="true"></iframe> : null;
       return (
            <TileSection title = {title}  page="port" nav ={this.props.nav}
                                            image =  "images/videocam.jpg" summary = {description}
                                            bgImage =  { bgImage}
                                            select = { mySelector }
                                            selected =  {mySelected}
                                            prefix = { this.props.prefix}
                                            skipBgImage = {true}
                                            leaf = {true} >
                                <h3 id="stmt21c">{title}</h3>
                                <p>{description}</p>
                                { video }

            </TileSection>
            );

    }

}
