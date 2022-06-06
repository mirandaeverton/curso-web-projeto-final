import './App.css';
import Content from './components/template/Content';
import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Footer from './components/template/Footer';
import { useState } from 'react';



function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(true)

  function toggleMenu(state) {

    if (state !== undefined) {
      setMenuIsVisible(state)
      console.log(menuIsVisible)
      return
    }

    setMenuIsVisible(!menuIsVisible)
    console.log(menuIsVisible)
  }


  return (
    <div className={`App ${menuIsVisible ? null : "hideMenu"}`}>
      <Header
        title="Base de Conhecimento"
        toggle={menuIsVisible ? "fa-angle-left" : "fa-angle-down"}
        onClick={() => toggleMenu()}
      >
      </Header>
      {menuIsVisible ? <Menu /> : null}
      <Content
        menuIsVisible={menuIsVisible}
      >
      </Content>
      <Footer
        menuIsVisible={menuIsVisible}
      >
      </Footer>
    </div>
  );
}

export default App;
