import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';//Estilo global a pagina sem precisar de arquivo css
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
        <GlobalStyle />
      </BrowserRouter>
    );
}
export default App;