import { Component } from 'react';

import React from "react";

import TileSection from "./TileSection.jsx";
import TileSelector from "./TileSelector.jsx";
import { cleanParam, parseTopic, parseSubtopic, parseCategory } from './TileSection.jsx';

const paintings = [
	{
	          original: "./portfolio/paintings/succour-s.jpg" ,
	          description: "Trio: Succour (2018, oil on canvas, 30\"x48\", available)",
	},
	{
	          original: "./portfolio/paintings/languor-s.jpg" ,
	          description: "Trio: Languor (2018, oil on canvas, 30\"x40\", available)",
	},
	{
	          original: "./portfolio/paintings/serenity-s.jpg" ,
	          description: "Trio: Serenity (2018, oil on canvas, 30\"x40\", available)",
	},
	{
	          original: "./portfolio/paintings/shield-s.jpg" ,
	          description: "Trio: Shield (2018, oil on canvas, 30\"x40\", available)",
	},
	{
	          original: "./portfolio/paintings/kiss1-s.jpg" ,
	          description: "Trio: Kiss 1 (2018, oil on canvas, 30\"x48\", available)",
	},
	{
	          original: "./portfolio/paintings/torsos-s.jpg" ,
	          description: "Trio: Torsos (2018, oil on canvas, 30\"x48\", available)",
	}
];


const trio = [
    { original: "./portfolio/photos/trio/serenity.jpg", description: "Serenity"},
    { original: "./portfolio/photos/trio/worship.jpg", description: "Worship"},
    { original: "./portfolio/photos/trio/honour.jpg", description: "Honour"},
    { original: "./portfolio/photos/trio/kiss.jpg", description: "Kiss"},
    { original: "./portfolio/photos/trio/laugh.jpg",description: "Laugh"}
];

const gof = [

    { original: "./portfolio/photos/girlsonfilm8/img__5645.jpg",  description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5654.jpg",  description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5721.jpg", description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5751.jpg",  description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5797.jpg", description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5807.jpg",  description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5835.jpg", description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__5838.jpg", description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__6003.jpg",description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__6115.jpg", description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__6419.jpg", description: "Girls on Film (2013)"},
    { original: "./portfolio/photos/girlsonfilm8/img__6459.jpg",description: "Girls on Film (2013)"}
];

const erotic = [
    { original: "./portfolio/photos/PastelBreasts.jpg", description: "Pastels"},
    { original: "./portfolio/photos/SwayingAss.jpg", description: "Swaying"},
    { original: "./portfolio/photos/Chair.jpg", description: "Chair"},
    { original: "./portfolio/photos/RopeCorset.jpg",  description: "Rope Corset"},
    { original: "./portfolio/photos/RopeCorset2.jpg",  description: "Rope Corset 2"},
    { original: "./portfolio/photos/ShibariChair.jpg", description: "ShibariChair"},
    { original: "./portfolio/photos/ShibariChair2.jpg",  description: "ShibariChair"},
    { original: "./portfolio/photos/ShibariChair3.jpg",  description: "ShibariChair"},
    { original: "./portfolio/photos/ShibariChair4.jpg",   description: "ShibariChair"},
    { original: "./portfolio/photos/Arm.jpg", description: "Arm"},
    { original: "./portfolio/photos/Chain.jpg", description: "Chain"},
    { original: "./portfolio/photos/RopeHold.jpg", description: "Rope Hold"},
    { original: "./portfolio/photos/Thrust.jpg", description: "Thrust"}
];

const bodypaint = [
    { original: "./portfolio/photos/bodypaint/arch.jpg", description: "Arch"},
    { original: "./portfolio/photos/bodypaint/blue.jpg",description: "Blue"},
    { original: "./portfolio/photos/bodypaint/blur.jpg", description: "Blur"},
    { original: "./portfolio/photos/bodypaint/words.jpg",  description: "Words"},
    { original: "./portfolio/photos/bodypaint/tux.jpg", description: "Tuxedo"},
    { original: "./portfolio/photos/bodypaint/tux2.jpg",  description: "Tuxedo 2"},
    { original: "./portfolio/photos/bodypaint/demon.jpg", description: "Demon"}
];

const computergen = [

    { original: "./portfolio/photos/1-lady-gesture-chaotic.jpg", thumbnail: "./portfolio/photos/1-lady-gesture-chaotic.jpg",  description: "Chaotic Lady Gesture"},
    { original: "./portfolio/photos/1-lady-gesture-potential.jpg", thumbnail: "./portfolio/photos/1-lady-gesture-potential.jpg", description: "Lady Gesture Potential"},
    { original: "./portfolio/photos/trio.jpg",  thumbnail: "./portfolio/photos/trio.jpg",description: "Chaotic Trio"}
];


const drawings = [
        { original:"./portfolio/drawings/sitting_girl.jpg", description: "SeatedGirl. (Charcoal)."},
        { original:"./portfolio/drawings/Homer.jpg", description: "Homer.  (A Level 3 Bargue copy; charcoal)."},
        { original:"./portfolio/drawings/CastDrawing.jpg", description: "CastDrawing. (A sight-size cast drawing from the cast; charcoal)"},
        { original:"./portfolio/drawings/ThinkingBoy.jpg", description: "ThinkingBoy. (One of a series of linear and shadow Bargue copies; pencil)."},
        { original:"./portfolio/drawings/Alina.jpg", description: "Alina.  (Drawn from life; pencil)."},
        { original:"./portfolio/drawings/Portrait.jpg", description: "Portrait. (Drawn from life; pencil)"},
        { original:"./portfolio/drawings/Arching.jpg", description: "Arching. (Charcoal)."},
        { original:"./portfolio/drawings/Corset.jpg", description: "Corset. (Ink; water colour)."}
 ];



const lifesketches = [

            { original:"./portfolio/drawings/Scarlet.jpg", description: "Scarlett (Ink and charcoal pencil)."},
            { original:"./portfolio/drawings/Francis1.jpg", description: "Francis (Pencil)"},
            { original:"./portfolio/drawings/FrancisThinks.jpg", description: "Francis Thinks (Pencil)"},
            { original:"./portfolio/drawings/Boots.jpg", description: "Boots. (Oil-based pencil; charcoal pencil; marker)"},
            { original:"./portfolio/drawings/Socks.jpg", description: "Socks (Charcoal)"},
        { original:"./portfolio/drawings/Lunge.jpg", description: "Lunge (Charcoal)"},
        { original:"./portfolio/drawings/RecliningMan.jpg", description: "Reclining Man (Pencil)"},
        { original:"./portfolio/drawings/SnuggleCouple.jpg", description: "Snuggle Couple (Charcoal Pencil)"},
        { original:"./portfolio/drawings/Keyhole.jpg", description: "Keyhole (Ink, water colour)"},
        { original:"./portfolio/drawings/KeyholeGesture.jpg", description: "Keyhole Gesture (Ink, water colour)"},
        { original:"./portfolio/drawings/RecliningWoman.jpg", description: "Reclining Woman (Pen; pencil)"},
        { original:"./portfolio/drawings/RecliningWoman2.jpg", description: "Reclining Woman (Pen; charcoal)"},
        { original:"./portfolio/drawings/PensiveWoman.jpg", description: "Pensive Woman (pen)"},
        { original:"./portfolio/drawings/LadyShane.jpg", description: "Lady Shane (Pen, charcoal pencil)"}
];

const recent_lifesketches = [
            { original:"./portfolio/bodies/IMG_4423.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_2463.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_2569.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_2648.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_2650.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_4711.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_4819.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6847.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6860.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6861.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6878.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6881.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6883.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6884.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6888.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6889.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6890.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6897.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6902.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6906.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6924.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6927.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6935.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6942.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6959.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6960.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6961.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6964.jpg", description: "Life sketches from the 2020s"},
            { original:"./portfolio/bodies/IMG_6967.jpg", description: "Life sketches from the 2020s"}
];
const cartoons= [
            { original:"./portfolio/drawings/Mermaid.jpg", description: "Mermaid (Pen)"},
            { original:"./portfolio/drawings/StevePlayboy.jpg", description: "Steve Playboy (Pen)"},
            { original:"./portfolio/drawings/SuperGirl.jpg", description: "Super Girl (Pencil)"},
            { original:"./portfolio/drawings/KH_toon.jpg", description: "KeyHole Cartoon (Pen, marker)"},
            { original:"./portfolio/drawings/KH_toon2.jpg", description: "KeyHole Cartoon 2 (pen, marker)"}
];
const old_paintings = [
	          { original: "./portfolio/paintings/alina.jpg", description: "Alina's Back. (2017, oil on wood panel)"},
	        { original: "./portfolio/paintings/trio.jpg", description: "Trio (oil on panel, 2017)"},
	          { original: "./portfolio/paintings/birth-of-isis.jpg", description: "Birth of Isis (oil on panel, 2016)"},
	          { original: "./portfolio/paintings/selfportrait-as-the-artist.jpg", description: "Self-portrait as the artist (oil on canvas, 2016)"},
	          { original: "./portfolio/paintings/heroic-self.jpg", description: "Heroic self (oil on panel, 2016)"},
	          { original: "./portfolio/paintings/couple.jpg", description: "Couple.  (2016, oil on board)"},
	          { original: "./portfolio/paintings/moment.jpg", description: "Moment (oil on panel, 2016)"},
	          { original: "./portfolio/paintings/bodyscape.jpg", description: "Body Scape. (2016, oil on board)"},
	          { original: "./portfolio/paintings/TwoFacesOfBecky.jpg", description: "Two Faces Of Becky. (2016, oil on board)"},
	          { original: "./portfolio/paintings/rapture.jpg", description: "Rapture (work in progress, oil on canvas, 36\"x48\" 2016-7)"},
	          { original: "./portfolio/paintings/fan-bing-bing.jpg", description: "Fan Bing Bing. (2015, oil on board)"},
	          { original: "./portfolio/paintings/ByTheWindow.jpg", description: "By The Window. (2015, oil on board)"},
	          { original: "./portfolio/paintings/ElvishFace2.jpg", description: "Elvish Face. (2015, oil on board)"},
	          { original: "./portfolio/paintings/Face.jpg", description: "Face. (2015, oil on canvas paper)"},
	          { original: "./portfolio/paintings/corset.jpg", description: "Corset (oil on panel, 2016)"},
	          { original: "./portfolio/paintings/CorsetBack.jpg", description: "Corset Back. (2015, oil on canvas paper)"},
	          { original: "./portfolio/paintings/surf_shop.jpg", description: "Surf Shop. (2015, oil on board)"},
	          { original: "./portfolio/paintings/eros-takes-aim.jpg", description: "Eros takes aim (oil on panel, 2015)"},
	          { original: "./portfolio/paintings/BeautyAndTheBeast.jpg", description: "Beauty And The Beast. (2015, oil on board)"}
];

const selfies = [

            { original:"./portfolio/drawings/AardBrian.jpg", description: "AardBrian (pencil) - 2012"},
            { original:"./portfolio/drawings/QuirkyBrian.jpg", description: "Quirky Brian (pencil) - 2012"},
        { original:"./portfolio/drawings/Decisions.jpg", description: "Decisions (ink) - 2013"}
];

const portraits = [
            { original:"./portfolio/faces/IMG_3015.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3017.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3018.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_2437.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_2452.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_2633.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_2661.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_2668.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_2669.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3030.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3043.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3046.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3051.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3056.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3057.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3058.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3093.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3116.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3137.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3138.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3146.jpg", description: "Zoom pandemic portrait drawings (2021)"},
            { original:"./portfolio/faces/IMG_3178.jpg", description: "Zoom pandemic portrait drawings (2021)"}
];


    const shows = [
                { original:"./images/IMG_1313.jpg", description: "Super Naughty Show, Feb 2019"},
                { original:"./images/IMG_1323.jpg", description: "Super Naughty Show, Feb 2019"},
                { original:"./images/IMG_0398.jpg", description: "Riverdale Art Walk, June 2018"},
                { original:"./images/IMG_0402.jpg", description: "Riverdale Art Walk, June 2018"},
                { original:"./images/IMG_0880.jpg", description: "Collective show at the Ben Navaee, July 2013"},
                { original:"./images/IMG_0890.jpg", description: "Collective show at the Ben Navaee, July 2013"},
                { original:"./images/IMG_0894.jpg", description: "Collective show at the Ben Navaee, July 2013"}
    ];

 const shameless = [
	{ original:"./portfolio/shameless/IMG_7521.jpg", description: "Shameless show (2024)"},
	{ original:"./portfolio/shameless/IMG_7518.jpg", description: "Shameless show (2024)"},
	{ original:"./portfolio/shameless/IMG_7526.jpg", description: "Shameless show (2024)"},
	{ original:"./portfolio/shameless/IMG_7527.jpg", description: "Shameless show (2024)"},
	{ original:"./portfolio/shameless/IMG_7528.jpg", description: "Shameless show (2024) - 2nd floor installation"},
	{ original:"./portfolio/shameless/IMG_7531.jpg", description: "Shameless show (2024) - 2nd floor installation"},
	{ original:"./portfolio/shameless/IMG_7534.jpg", description: "Shameless show (2024) - 2nd floor installation"},
	{ original:"./portfolio/shameless/IMG_7535.jpg", description: "Shameless show (2024) - 2nd floor installation"},
	{ original:"./portfolio/shameless/P1060355.jpg", description: "Shameless show (2024) - one of several drawing collages"},
	{ original:"./portfolio/shameless/P1060356.jpg", description: "Shameless show (2024)"},
	{ original:"./portfolio/shameless/P1060357.jpg", description: "Shameless show (2024)"},
	{ original:"./portfolio/shameless/P1060358.jpg", description: "Shameless show (2024) - self-portrait collage"},
	{ original:"./portfolio/shameless/P1060360.jpg", description: "Shameless show (2024) - paintings (Trio series)"},
	{ original:"./portfolio/shameless/P1060362.jpg", description: "Shameless show (2024) - paintings (Facets : Harley Q)"},
	{ original:"./portfolio/shameless/P1060365.jpg", description: "Shameless show (2024) - paintings and collages"},
	{ original:"./portfolio/shameless/P1060366.jpg", description: "Shameless show (2024) - two drawing collages"},
	{ original:"./portfolio/shameless/P1060367.jpg", description: "Shameless show (2024) - one of several drawing collages"},
	{ original:"./portfolio/shameless/P1060368.jpg", description: "Shameless show (2024) - one of several drawing collages"},
	{ original:"./portfolio/shameless/P1060371.jpg", description: "Shameless show (2024) - one of several drawing collages"},
	{ original:"./portfolio/shameless/P1060370.jpg", description: "Shameless show (2024) - sketch installation"},
	{ original:"./portfolio/shameless/P1060372.jpg", description: "Shameless show (2024) - sketch installation"},
	{ original:"./portfolio/shameless/P1060375.jpg", description: "Shameless show (2024) - one of several drawing collages"},
	{ original:"./portfolio/shameless/P1060373.jpg", description: "Shameless show (2024) - painting (Trio series)"},
	{ original:"./portfolio/shameless/P1060378.jpg", description: "Shameless show (2024) - painting (Trio series)"},
	{ original:"./portfolio/shameless/P1060376.jpg", description: "Shameless show (2024) - photo installation"},
	{ original:"./portfolio/shameless/P1060380.jpg", description: "Shameless show (2024) - photo installation"},
	{ original:"./portfolio/shameless/P1060383.jpg", description: "Shameless show (2024) - photo installation"},
	{ original:"./portfolio/shameless/P1060381.jpg", description: "Shameless show (2024) - painting installation"},
	{ original:"./portfolio/shameless/P1060382.jpg", description: "Shameless show (2024) - painting installation"},
	{ original:"./portfolio/shameless/P1060384.jpg", description: "Shameless show (2024) - painting (L'Origine Fermé à Clé)"},
	{ original:"./portfolio/shameless/P1060386.jpg", description: "Shameless show (2024) - caricatures/gesture portraits"},
	{ original:"./portfolio/shameless/P1060387.jpg", description: "Shameless show (2024) - caricatures/gesture portraits"},
	{ original:"./portfolio/shameless/P1060389.jpg", description: "Shameless show (2024) - caricatures/gesture portraits"},
	{ original:"./portfolio/shameless/P1060390.jpg", description: "Shameless show (2024) - caricatures/gesture portraits (Audrey Hepburn)"},
	{ original:"./portfolio/shameless/P1060391.jpg", description: "Shameless show (2024) - drawings"},
	{ original:"./portfolio/shameless/P1060393.jpg", description: "Shameless show (2024) - drawings"},
	{ original:"./portfolio/shameless/P1060394.jpg", description: "Shameless show (2024) - caricatures/gesture portraits (Robin Williams)"},
	{ original:"./portfolio/shameless/P1060395.jpg", description: "Shameless show (2024) - drawings"},
	{ original:"./portfolio/shameless/P1060400.jpg", description: "Shameless show (2024) - video installation"},
	{ original:"./portfolio/shameless/P1060403.jpg", description: "Shameless show (2024) - video installation"},
	{ original:"./portfolio/shameless/P1060405.jpg", description: "Shameless show (2024) - wall painting"},
	{ original:"./portfolio/shameless/P1060407.jpg", description: "Shameless show (2024) - Facets series painting (Pirate 3)"},
	{ original:"./portfolio/shameless/P1060408.jpg", description: "Shameless show (2024) - painting (4 Friends)"},
	{ original:"./portfolio/shameless/P1060409.jpg", description: "Shameless show (2024) - painting (3 Friends)"},
	{ original:"./portfolio/shameless/P1060410.jpg", description: "Shameless show (2024) - painting (L'Origine Fermé à Clé)"},
	{ original:"./portfolio/shameless/P1060411.jpg", description: "Shameless show (2024) - painting installation"},
	{ original:"./portfolio/shameless/P1060412.jpg", description: "Shameless show (2024) - photo installation"},
	{ original:"./portfolio/shameless/P1060414.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060417.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060421.jpg", description: "Shameless show (2024) - video screening room"},
//	{ original:"./portfolio/shameless/P1060422.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060423.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060426.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060427.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060429.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060431.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060433.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060437.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060438.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060439.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060442.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060448.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060451.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060452.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060454.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060455.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060457.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060460.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060466.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060472.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060473.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060474.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060475.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060478.jpg", description: "Shameless show (2024) - video screening room"},
	{ original:"./portfolio/shameless/P1060479.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060483.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060486.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060489.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060492.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060494.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060499.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060502.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060504.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060505.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060508.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060510.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060512.jpg", description: "Shameless show (2024) - sketch and photo installation"},
//	{ original:"./portfolio/shameless/P1060514.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060517.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060518.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060521.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060523.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060525.jpg", description: "Shameless show (2024) - video sign"},
	{ original:"./portfolio/shameless/P1060524.jpg", description: "Shameless show (2024) - video sign"},
	{ original:"./portfolio/shameless/P1060526.jpg", description: "Shameless show (2024)- video sign"},
	{ original:"./portfolio/shameless/P1060536.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060539.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060543.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060544.jpg", description: "Shameless show (2024) - sketch and photo installation"},
	{ original:"./portfolio/shameless/P1060545.jpg", description: "Shameless show (2024) - sketch and photo installation"}
    ];


     const vids = [
           { title: "Sexy Invitation:  A memoir", bgImage : "images/invitation.jpg",
           description :  "This  is a memoir of life drawing and open relating (Nudity, sexual themes). Password protected.",
           url : "https://player.vimeo.com/video/916914387" },
           { title: "Barn Dance", bgImage : "images/barn_dance.jpg",
           description :  "A record of a sexy happening in a barn, along with some participants' thoughts about sexuality (Nudity, sexual themes). Password protected.",
           url : "https://player.vimeo.com/video/916047977" },
           { title: "Meditation", bgImage : "images/meditation.jpg",
           description :  "A trippy and NSFW meditation on sexuality and sensuality (Nudity, sexuality, sexual themes).  Password protected.",
           url : "https://player.vimeo.com/video/916808073" },

      { title: "Introduction to the 21st Century Loving Project", bgImage : "images/twentyfirstcentury.jpg",
      description :  "This short video talks about what I hope to accomplish with this project. (Some nudity).",
      url : "https://player.vimeo.com/video/276145475" },
      { title: "Relationships Teaser", bgImage : "images/relationshipteaser.jpg",
      description: "This is a short compilation of some interviews that I did as part of the project.  (Mature themes).",
       url : "https://player.vimeo.com/video/276142311" },
       { title:  "AEF: Three Poly People", bgImage:  "./portfolio/photos/trio/lean.jpg" ,
       description: "This is a somewhat longer video that explores the thoughts and feelings of three polyamorous people and shows them interacting in the studio (nudity, mature language).",
       url: "https://player.vimeo.com/video/271471843" },
       { title: "Trio: Painting process", bgImage: "images/trio_painting_process.jpg",
       description: "In this short video I talk about how I created the paintings that are part of this process. (Nudity).",
       url: "https://player.vimeo.com/video/276144494"
       }
      ];

      const art_vids = [
             { title: "Strata Teaser v2 (2018)", bgImage: "images/strata2.jpg",
             description: "Teaser for an unrealized project by Iris Haeussler (Second version)",
             url: "https://player.vimeo.com/video/293735333"
             },
             { title: "Strata Teaser v1 (2017)", bgImage: "images/strata.jpg",
             description: "Teaser for an unrealized project by Iris Haeussler (First version) (nudity)",
             url: "https://player.vimeo.com/video/245280765"
             },
             { title: "Rose Tie", bgImage: "images/rose_tie.jpg",
             description: "Research video of a suspension bondage tie, intended for an unrealized project by Iris Haeussler (nudity)",
             url: "https://player.vimeo.com/video/241077606"
             },
           { title: "Creating 'Dust at Dawn'", bgImage: "images/creating_dust_at_dawn.jpg",
           description: "The actual process of creating Dust at Dawn at King's Cove, NL, in Aug 2017, by Iris Haeussler",
           url: "https://player.vimeo.com/video/234416908"
           },
          { title: "Bonavista Process", bgImage: "images/Bonavista_test.jpg",
          description: "The process used for Iris Haeussler's Dust at Dawn project for the Bonavista Biennale",
          url: "https://player.vimeo.com/video/228548616"
          }

      ];

      const experimental_vids = [
          { title: "Sexy Chaos Dance", bgImage: "images/sexy_chaos_dance.jpg",
          description: "An fun work using chaotic animation (2019) (mature)",
          url: "https://player.vimeo.com/video/916803279?h=c71bb61b90"
          },
           { title: "Chaos Dance", bgImage: "images/chaos_dance.jpg",
           description: "A chaotic animation based on life sketches of a model in dance positions",
           url: "https://player.vimeo.com/video/373526825"
           },
          { title: "Chaotic Embrace", bgImage: "images/chaotic_embrace.jpg",
          description: "An experimental work using chaotic animation (2014) (mature)",
          url: "https://player.vimeo.com/video/201883409?h=d17d5778a8"
          }
      ];





export default class ArtPortfolio extends Component {


	constructor(props) {

//        alert("constructing port");
		super(props);

        this.initState = this.initState.bind(this);
		this.initState();
		this.selectGallery = this.selectGallery.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.okCat = this.okCat.bind(this);
		this.renderGallery = this.renderGallery.bind(this);
	}

	initState() {
//	    alert("init state");
        const topic = this.getTopic();
        const cat = this.getCategory();
//        alert("topic is " +topic +", cat="+cat);
        this.state = {
            selected : topic,
            category : cat
            };
    }

componentDidUpdate(prevProps, prevState) {
    var curSel = this.props.searchParams;
    var preSel = prevProps.searchParams;
//     alert("component did update with cur="+curSel+", prev="+preSel)
  if (curSel !== preSel) {
     this.initState();
  }
}

/*
    formatTopic(caption) {
        return caption.replace(/[ \&]/g,"");
    }
    */

getTopic() {
        return parseTopic(this.props.searchParams);
}
getSubtopic() {
        return parseSubtopic(this.props.searchParams);
}
getCategory() {
        return parseCategory(this.props.searchParams);
}


    render () {
 //       alert("portfolio topic is "+this.state.selected);
        return (
            <div>
                { this.renderCategorySelector() }

             { this.renderShowGallery( "Shameless Show", "Shameless Show (2024)", "portfolio/shameless/P1060417.jpg",  shameless )}
             { this.renderPaintingGallery( "Paintings", "Selected paintings", "images/succor_cropped.jpg",  paintings )}
             { this.renderShowGallery( "Shows",  "Selected shows", "images/IMG_0402.jpg",  shows )}
           { this.renderSketchGallery ("Recent Life Drawings", "Various Life Drawings/Sketches, 2019-2023", "./portfolio/bodies/IMG_2569.jpg", recent_lifesketches )}
           { this.renderSketchGallery ("Portrait Sketches", "Various Portrait Sketches from Life (on Zoom), 2020-2021", "./portfolio/faces/IMG_3015.jpg", portraits )}
           { this.renderVideoGallery( "Videos on Relationships and Sexuality" , "Videos for the 21st Century Loving project", "./portfolio/photos/trio/lean.jpg" , "vid", vids)}
           { this.renderVideoGallery( "Art Videos" , "Art videos done in collaboration with Iris Haeussler", "images/strata2.jpg" , "art_video", art_vids)}
           { this.renderSketchGallery ("Older Drawings", "Various Drawings, 2013-2018", "./portfolio/drawings/sitting_girl.jpg", drawings )}
           { this.renderPaintingGallery ("Older Paintings", "Paintings, 2013-2017", "./portfolio/paintings/AlinaBack.jpg", old_paintings )}
           { this.renderSketchGallery ("Older Life Drawings", "Life (Figure) Drawings, 2013-2018", "./portfolio/drawings/Lunge.jpg", lifesketches )}
           { this.renderSketchGallery ("Cartoons", "Cartoons", "./portfolio/drawings/KH_toon.jpg", cartoons )}
           { this.renderSketchGallery ("Self-portraits", "Self portrait sketches", "./portfolio/drawings/Decisions.jpg", selfies )}
           { this.renderPhotoGallery ("Chaos", "Chaos Images - images produced using chaotic simulation software married with drawings and photos.", "./portfolio/photos/1-lady-gesture-chaotic.jpg", computergen )}
            { this.renderPhotoGallery ("Trio", "Trio Series Photographs", "./portfolio/photos/trio/laugh.jpg", trio )}
            { this.renderPhotoGallery ("Eros", "Erotic Images", "./portfolio/photos/RopeCorset.jpg", erotic )}
            { this.renderPhotoGallery ("GOF", "Girls on Film (erotic photoshoot, 2014)", "./portfolio/photos/girlsonfilm8/img__5721.jpg", gof )}
            { this.renderPhotoGallery ("BodyPaint", "Body Painting", "./portfolio/photos/bodypaint/blur.jpg", bodypaint )}
           { this.renderVideoGallery( "Experimental Videos" , "Videos experimenting with chaotic animation",  "images/chaos_dance.jpg" , "exp_video", experimental_vids)}
            </div>
            );
    }

        renderCategorySelector () {
            if (!this.state.category) this.state.category = "All";

            return (
                <div  class="categorySelector">
                    <p class="categorySelectorLabel">Type of gallery</p>
                    { this.renderCategoryRadioButton("All", "All types") }
                    { this.renderCategoryRadioButton("paintings", "Paintings") }
                    { this.renderCategoryRadioButton("photos", "Photographs") }
                    { this.renderCategoryRadioButton("drawings", "Drawings/Sketches") }
                    { this.renderCategoryRadioButton("videos", "Videos") }
                    { this.renderCategoryRadioButton("shows", "Shows") }
                </div>
                );
        }

        handleCategoryChange = changeEvent => {
            var cat = changeEvent.target.value;
//            alert("select category "+cat);
            const nav= this.props.nav;
           // const top = this.state.topic ? "topic=" + this.state.topic + "&" : "";
           const top = "";
            const url = "/port?"+top + "category="+cat;
  //          alert("url is "+url);
            nav(url);
             this.setState({
               category: cat,
               selected : ""
             });

        };

        renderCategoryRadioButton (category, label) {
            var curCat = this.state.category;
            var isChecked = curCat === category;
//            alert("Radio button category="+category + ", state="+curCat+", checked="+isChecked);
            return (
                      <div className="categoryButton">
                        <label>
                          <input
                            type="radio"
                            name="portfolio_category"
                            value={category}
                            checked={isChecked}
                            onChange={this.handleCategoryChange}
                            className="categoryInput"
                          />
                          {label}
                        </label>
                      </div>
                  );
        }

    okCat(category) {
        const cat = this.state.category;
        return !cat || cat === "All" || cat === category;
     }


    renderVideoGallery (title, summary, bgImage, id, vids) {
            var  subtopic = parseSubtopic(this.props.searchParams);
            if (!subtopic) subtopic = "";
            if (!this.okCat("videos")) return;

            var topic = cleanParam(title);
            var prefix= "port?topic="+topic+"&subtopic=";
            var leaf = subtopic === "";

            return   <TileSection title = {title} select={this.selectGallery} selected={this.state.selected} page="port" nav ={this.props.nav}
                                    image =  "images/videocam.jpg" summary = {summary}
                                    bgImage =  {bgImage} leaf = {leaf}>
                     <div>
                        <h2 id="exp_video">{title}</h2>
                        <TileSelector tiles = {vids} prefix= {prefix} page="port" topic={topic} nav={this.props.nav}
                            sel ={subtopic}  searchParams={this.props.searchParams}/>

                     </div>
                     </TileSection>
    }


    renderPhotoGallery(name, desc, bgImage, gallery) {
        return this.renderGallery("photos", name, 'images/camera_icon.png', desc, bgImage, gallery);
    }

    renderSketchGallery(name, desc, bgImage, gallery) {
        return this.renderGallery("drawings", name, 'images/drawing.png', desc, bgImage, gallery);
    }

        renderPaintingGallery(name, desc, bgImage, gallery) {
            return this.renderGallery("paintings", name, "images/painting.png", desc, bgImage, gallery);
        }

        renderShowGallery(name, desc, bgImage, gallery) {
            return this.renderGallery("shows",name, 'images/camera_icon.png', desc, bgImage, gallery);
        }

    renderGallery(cat, name, image, desc, bgImage, gallery) {
        if (!this.okCat(cat)) return;

        return   <TileSection title = {name}  select={this.selectGallery} selected={this.state.selected} page="port" nav ={this.props.nav}
                                image = {image}   summary = {desc}  bgImage =  {bgImage}  gallery = {gallery} leaf={true} />
    }



	selectGallery (topic) {
       	  //  var topic = this.formatTopic(s);
  //            alert("select gallery, gallery="+topic); //+", topic="+topic);
       	    this.setState( {
                      selected :  topic
               });
             //  this.props.nav("/port?topic="+topic);
	}



}


