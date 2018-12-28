import React from 'react';
import {ParagraphStyle} from '../aboutMeCard/aboutMeCard.css';
import Layout from '../layoutCard/layoutCard';

const WhatIDo = ({reference, windowHeight}) => 
(
    <Layout ref={reference} windowHeight={windowHeight}>
        <ParagraphStyle>
            <h1>What I Do</h1>
            <p>Modus docendi scaevola ius et, affert populo feugait vim no. Sed altera consetetur ullamcorper ut, ius viris oratio virtute te. Ne sit mazim nostro audiam, erant option interpretaris mei ei. Eos regione aperiam ea, sit eirmod volumus hendrerit ea, vel sonet dicant dolorum ei.
</p>
            <p>Modus viris interpretaris te nam, choro soluta aeterno vis ea. Ornatus propriae ne mei. Electram gubergren cu ius. Hinc molestie neglegentur mea in, an odio habeo perpetua sit.
</p>
        </ParagraphStyle>
    </Layout>
);

export default WhatIDo;