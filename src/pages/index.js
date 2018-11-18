import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import {Menu} from '../styles/pages/index.css';
import ColorButton from '../components/buttons/colorButton/colorButton';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'green'};
  }

  changeColor = (color) => {
    if(color !== this.state.color)
    {
      this.setState({
        color : color
      });
    }
  }

  render() {
    return( 
      <Layout color={this.state.color}>
        <div className={Menu(this.state.color)} onMouseLeave={()=>{ this.changeColor('green') }}>
          <div>
            <ColorButton color={'yellow'} text={'Button 1'} onMouseEnter={this.changeColor} onClick={ () => {console.log("hello")}} />
            <ColorButton color={'orange'} text={'Button 2'} onMouseEnter={this.changeColor}/>
            <ColorButton color={'white'} text={'Button 3'} onMouseEnter={this.changeColor}/>
          </div>
        </div>
      </Layout>);
  }
}

export default IndexPage;
