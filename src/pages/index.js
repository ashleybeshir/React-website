import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Navigation from '../components/navigator/navigation';
import MainCard from '../components/cards/mainCard/mainCard';
import AboutMeCard from '../components/cards/aboutMeCard/aboutMeCard';
import WhatIDo from '../components/cards/whatIDoCard/whatIDoCard';
import {css} from 'react-emotion';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    //Would be easier to use ids and just use href to it for scrolling.
    this.cardMain = React.createRef();
    this.cardAboutMe = React.createRef();
    this.cardWhatIDo = React.createRef();

    this.disableScroll = false;
    this.mobilePreviousePosition = null;

    this.state = {
      color: 'green',
      windowHeight: 0,
      cards: [
        [this.cardMain, true],
        [this.cardAboutMe, false],
        [this.cardWhatIDo, false]
      ]
    };
  }

  componentDidMount()
  {
    this.setState({
      windowHeight: document.documentElement.clientHeight
    });
  }

  changeColor = (color) => {
    if(color !== this.state.color)
    {
      this.setState({
        color : color
      });
    }
  }

  scrollToCard = (ref) => 
  {
    window.scrollTo({
      top: ref.current.offsetTop, 
      behavior: "smooth"
    })

    let currentState = this.state.cards;
    currentState.forEach((e)=>{
      e[1] = e[0] === ref ? true : false;
    });

    this.setState({
      cards : currentState
    });
  }

  scrollWithinCard = (e, offsetScroll) => 
  {
    let currentIndex = this.state.cards.findIndex((e)=> {return e[1] === true;});
    let currentCard = this.state.cards[currentIndex];

    if((window.innerHeight + window.pageYOffset + offsetScroll) > currentCard[0].current.offsetHeight + currentCard[0].current.offsetTop)
    {
      return true;
    }else if(window.scrollY + offsetScroll < currentCard[0].current.offsetTop)
    {
      return true;
    }

    window.scrollTo({
      top: window.pageYOffset + offsetScroll, 
      behavior: "smooth"
    });
    return false;
  }

  scrollBetweenCards = (e, offsetScroll) => 
  {
    let scrollDirection = offsetScroll > 0 ? 1 : -1;
    let currentIndex = this.state.cards.findIndex((e)=> {return e[1] === true;});
    let currentCard = this.state.cards[currentIndex];

    e.preventDefault();
    let cardIndex = scrollDirection + currentIndex;
    cardIndex = cardIndex < 0 ? 0 : cardIndex;
    if(cardIndex < this.state.cards.length)
    {
      if(!(cardIndex === 0 && currentIndex === 0))
      {
        this.disableScroll = true;
        this.scrollToCard(this.state.cards[cardIndex][0]);
        setTimeout(()=>{ this.disableScroll = false}, 1500);
      }
    }
  }

  handleScrolling = (e, offsetScroll) => 
  {
    e.preventDefault();
    e.stopPropagation();
    
    if(this.scrollWithinCard(e, offsetScroll))
    {
      if(this.disableScroll)
      {
        return true;
      }
      this.scrollBetweenCards(e, offsetScroll);
    }
    
  }

  onWheel = (e) => 
  {
    // 1 is down; -1 is up;
    this.handleScrolling(e, e.deltaY);
  }

  onTouch = (e) => 
  {
    let new_pos = e.changedTouches[0].clientY;
    let scrollOffset = null;
    
    scrollOffset = new_pos - this.mobilePreviousePosition;
    this.mobilePreviousePosition = new_pos;
    this.handleScrolling(e, scrollOffset);
  }

  render() {
    return( 
      <Layout color={this.state.color}>
        <div onWheel={(e) => {this.onWheel(e)}} onTouchMove={(e) => {this.onTouch(e)}} onTouchStart={(e) => {this.mobilePreviousePosition = e.touches[0].clientY}} css={css`touch-action: none;`}>
          <Navigation cardIndex={this.state.cards.findIndex((e)=> {return e[1] === true;})} refMain={ () => {this.scrollToCard(this.cardMain)} } refAboutMe={ () => {this.scrollToCard(this.cardAboutMe)} } refWhatIDo={ () => {this.scrollToCard(this.cardWhatIDo)}} windowHeight={this.state.windowHeight}/>
          <MainCard changeColor={(x) => {this.changeColor(x)}} color={this.state.color} refAboutMe={ () => {this.scrollToCard(this.cardAboutMe)} } reference={this.cardMain} windowHeight={this.state.windowHeight}/>
          <AboutMeCard reference={this.cardAboutMe} windowHeight={this.state.windowHeight}/>
          <WhatIDo reference={this.cardWhatIDo} windowHeight={this.state.windowHeight}/>
          <footer>
            <p>Posted by: Ashley Beshir</p>
            <p>Contact information: <a href="mailto:ashleybeshir0@gmail.com">
            ashleybeshir0@gmail.com</a>.</p>
            <p>Copyrighted 2018</p>
            <p>Copyrighted 2018</p>
            <p>Copyrighted 2018</p>

            <p>Copyrighted 2018</p>
          </footer>
        </div>
      </Layout>);
  }
}

export default IndexPage;

