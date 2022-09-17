import './styles/App.css';
import Content from './components/template/Content';
import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Footer from './components/template/Footer';
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Router from './config/Router';

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(true)
  const [reloadContent, setReloadContent] = useState(false)
  const [showUserDropdownContent, setShowUserDropdownContent] = useState(false)

  return (
    <BrowserRouter>
      <div className={`App ${menuIsVisible ? null : "hideMenu"}`}>
        <Header
          title="Base de Conhecimento"
          toggle={menuIsVisible ? true : false}
          onClick={() => setMenuIsVisible(!menuIsVisible)}
          onMouseEnter={() => setShowUserDropdownContent(!showUserDropdownContent)}
          onMouseLeave={() => setShowUserDropdownContent(!showUserDropdownContent)}
          showUserDropdownContent={showUserDropdownContent}
        >
        </Header>

        {menuIsVisible ? <Menu setReloadContent={setReloadContent}/> : null}

        <Content menuIsVisible={menuIsVisible}>
          <Router />
        </Content>

        <Footer
          menuIsVisible={menuIsVisible}
        >
        </Footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
