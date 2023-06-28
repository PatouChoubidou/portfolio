
import './App.css';
import { Menu } from './components/Menu';
import { Main } from './components/Main';
import { Header } from './components/Header';
/* import { Footer } from './components/Footer'; */
/* import { ScrollTop } from './components/ScrollTop'; */



function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
     {/*  <Footer /> */}
     {/*  <ScrollTop /> */}
    </div>
  );
}

export default App;
