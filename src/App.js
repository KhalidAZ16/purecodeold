import './App.css';
import NavBar from './components/NavBar';
import NavBar_ar from './components/NavBarAr';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Home_ar from './components/Home_ar';
function App() {
  return (
    <>
      <Router>
        <div className='nav-bar'>
          <Switch>
            <Route exact path='/Home_ar'>
              <NavBar_ar />
            </Route>
            <Route exact path='/'>
              <NavBar />
            </Route>

          </Switch>

        </div>
        <div className='MainContent'>
          <Switch>
            <Route exact path='/Home_ar' >
              <Home_ar />
            </Route>
            <Route exact path='/' >
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    </>



  );
}

export default App;
