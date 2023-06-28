import './styles/App.css';
import Button from './Button';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        The Odin Project: Shopping Cart
      </header>
      <footer>
        <Button as={Link} to="/cart" text="View My Cart">
        </Button>
      </footer>
    </div>
  );
}

export default App;
