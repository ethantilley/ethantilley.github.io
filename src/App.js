import React from 'react';
import './App.css';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl'

import Main from './Components/main';
import { Link } from 'react-router-dom';

import ScrollArea from 'react-scrollbar';


function App() {


  return (
    <div className="demo-big-content">
      <Layout>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
/*        <Header className="header" title="Ethan Tilley">
          <Navigation className="header-nav">
            <Link to="/landingpage"><i className="fa fa-phone-square" aria-hidden="true" />
              Home</Link>
            <Link to="/projects"><i className="fa fa-phone-square" aria-hidden="true" />
              Projects</Link>
            <Link to="/resume"><i className="fa fa-phone-square" aria-hidden="true" />
              Resume</Link>
            <Link to="/writings"><i className="fa fa-phone-square" aria-hidden="true" />
              Writings</Link>
            <Link to="/aboutme"><i className="fa fa-phone-square" aria-hidden="true" />
              About Me</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/landingpage">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/writings">Writings</Link>
            <Link to="/aboutme">About Me</Link>
          </Navigation>
        </Drawer>
*/
export default App;
