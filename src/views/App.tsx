import './App.css';
import Header from '../components/Header';
import Logo from '../assets/stackline_logo.svg'
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="app-container">
      <Header>
        <img src={Logo} alt="logo" style={{height: "1rem"}}/>
      </Header>
      <ProductDetails />
    </div>
  );
}

export default App;
