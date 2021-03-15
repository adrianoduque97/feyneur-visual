import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SingIn from './Pages/sing-in-page/sing-in-page.component'
import Visualizer from './Pages/visualizer-page/visualizer-page.component'
import AdminPage from './Pages/admin-page/admin-page.component'
import NavBar from './components/navbar/navbar.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          // console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
//  const [currentUser, setCurrentUser] = useState();

  // useEffect(()=>{
  //   auth.onAuthStateChanged(async user =>{

  //     if(user){
  //       const userRef= await createUserProfileDocument(user)

  //     userRef.onSnapshot(snapShot =>{
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data()
  //       })

  //     })
  //     }
  //   })
  // },[currentUser])
  render(){

  
    return (
    <div className="App">
      <NavBar currentUser ={this.state.currentUser}></NavBar>
      <Switch>
        <Route exact path ='/'currentUser ={this.state.currentUser} component={this.state.currentUser?Visualizer: SingIn}></Route>
        <Route exact path ='/visualizer' currentUser ={this.state.currentUser} component={Visualizer}></Route>
        <Route exact path='/admin' component={AdminPage}></Route>
      </Switch>
    </div>
  );
    }
}

export default App;
