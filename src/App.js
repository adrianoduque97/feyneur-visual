import './App.css';
import FeynurLogo  from './Feyneur1.png'
import {Switch, Route, Redirect} from 'react-router-dom';
import SingIn from './Pages/sing-in-page/sing-in-page.component'
import Visualizer from './Pages/visualizer-page/visualizer-page.component'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={FeynurLogo} className="App-logo" alt="logo"/>
          Loading...
      </header> */}
      <Switch>
        <Route exact path ='/' component={SingIn}></Route>
        <Route exact path ='/visualizer' component={Visualizer}></Route>
      </Switch>
    </div>
  );
}

export default App;
