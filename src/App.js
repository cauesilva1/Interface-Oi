import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Route exact path="/" element={<Home />}/>
    </Router>
  );
}

export default App;
