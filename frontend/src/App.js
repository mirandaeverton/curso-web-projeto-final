import './App.css';
import Content from './components/template/Content';
import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Footer from './components/template/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
