import React from 'react';
import {ParagraphStyle} from './aboutMeCard.css';
import Layout from '../layoutCard/layoutCard';

const AboutMeCard = ({reference, windowHeight}) => 
(
    <Layout ref={reference} windowHeight={windowHeight}>
        <ParagraphStyle>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, ea autem explicari mei, wisi consequat vulputate ne ius. Decore munere constituto mei ne, at tempor oporteat mediocritatem sit. Habeo dicat duo cu, pro perfecto omittantur conclusionemque ne. Ea pri mazim propriae. Ad rebum ancillae vel, convenire repudiare ex his.
            </p>
            <p>
            Cum ad labores ocurreret, ea modus veritus suscipit cum. Pri ancillae disputando no. Pro maiorum perfecto consulatu te. Partiendo scribentur nam et, te electram complectitur qui, odio intellegat repudiandae vix te. In altera mucius has.
            </p>
        </ParagraphStyle>
    </Layout>
);

export default AboutMeCard;