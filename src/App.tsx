import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Routes from './Routes';
const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
        <Footer2 />
      </BrowserRouter>
    );
}
export default App;