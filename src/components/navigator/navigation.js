import React from 'react';
import {BackgroundPosition, NavigationStyles} from './navigation.css';

const Navigation = ({refMain, refAboutMe, refWhatIDo, cardIndex, windowHeight}) => {

    return(
        <div className={BackgroundPosition(windowHeight)}>
            <NavigationStyles>
                <a onClick={refMain} className={cardIndex === 0 ? "active" : ""}>O</a>
                <a onClick={refAboutMe} className={cardIndex === 1 ? "active" : ""}>O</a>
                <a onClick={refWhatIDo} className={cardIndex === 2 ? "active" : ""}>O</a>
            </NavigationStyles>
        </div>
    );
};

export default Navigation;
