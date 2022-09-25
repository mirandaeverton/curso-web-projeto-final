import './styles/App.css';
import Content from './components/template/Content';
import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Footer from './components/template/Footer';
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Router from './config/Router';

function App() {

  const [user, setUser] = useState({
    name: "Everton",
    email: "mir.everton@gmail.com"
  })
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [reloadContent, setReloadContent] = useState(0)

  return (
    <BrowserRouter>
      <div className={`App ${menuIsVisible ? null : "hideMenu"}`}>
        <Header
          title="Base de Conhecimento"
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={() => setMenuIsVisible(!menuIsVisible)}
          user={user}
        >
        </Header>

        {menuIsVisible ? <Menu setReloadContent={setReloadContent} /> : null}

        <Content menuIsVisible={menuIsVisible}>
          <Router reloadContent={reloadContent} />
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
