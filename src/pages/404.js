import React from 'react';
import styled,{css} from 'react-emotion';
import Layout from '../components/layout/layout';
import Menu from '../components/menu/menu';


const NotFoundStyles = styled('div')`
  h1 {
    color: white;
    text-align: center;
  }
`;

const NotFoundPage = () => {
  let color = "white";
  return(
    <Layout color={color}>
      <Menu color={color} exitLink={'/'}>
        <NotFoundStyles>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <p>Cross on the top right will take you back home page</p>
        </NotFoundStyles>
      </Menu>
    </Layout>
  );
}

export default NotFoundPage;
