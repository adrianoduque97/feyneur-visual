import './App.css';
import {Switch, Route} from 'react-router-dom';
import SingIn from './Pages/sing-in-page/sing-in-page.component'
import Visualizer from './Pages/visualizer-page/visualizer-page.component'
import NavBar from './components/navbar/navbar.component'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={FeynurLogo} className="App-logo" alt="logo"/>
          Loading...
      </header> */}
      <NavBar></NavBar>
      <Switch>
        <Route exact path ='/' component={SingIn}></Route>
        <Route exact path ='/visualizer' component={Visualizer}></Route>
      </Switch>
    </div>
  );
}

export default App;
