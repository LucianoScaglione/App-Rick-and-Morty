import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import DetailCharacter from './components/DetailCharacter';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/details/:id' component={DetailCharacter} />
    </div>
  );
}

export default App
