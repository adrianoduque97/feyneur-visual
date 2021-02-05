import React, {useEffect, useState} from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SingIn from './Pages/sing-in-page/sing-in-page.component'
import Visualizer from './Pages/visualizer-page/visualizer-page.component'
import NavBar from './components/navbar/navbar.component'
import {auth, firestore, createUserProfileDocument} from './firebase/firebase.utils'
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

          console.log(this.state);
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
        <Route exact path ='/' component={this.state.currentUser?Visualizer: SingIn}></Route>
        <Route exact path ='/visualizer' component={Visualizer}></Route>
      </Switch>
    </div>
  );
    }
}

const ew = async ()=>{
 const o =   firestore.doc('users/FkZOS70mhPSiv4hNDDEY')
 const ref = await o.get()

 console.log(ref, "PEPE")
}
export default App;
