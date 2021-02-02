import React, {useEffect, useState} from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SingIn from './Pages/sing-in-page/sing-in-page.component'
import Visualizer from './Pages/visualizer-page/visualizer-page.component'
import NavBar from './components/navbar/navbar.component'
import {auth, firestore, createUserProfileDocument} from './firebase/firebase.utils'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ()=> {

 const [currentUser, setCurrentUser] = useState();

  useEffect(()=>{
    auth.onAuthStateChanged(async user =>{

      if(user){
        const userRef= await createUserProfileDocument(user)

      userRef.onSnapshot(snapShot =>{
        console.log(snapShot.data())
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
        console.log(currentUser)

      })
      }
      
      console.log(currentUser) 
    })

  },[])

    return (
    <div className="App">
      <NavBar currentUser ={currentUser}></NavBar>
      <Switch>
        <Route exact path ='/' component={SingIn}></Route>
        <Route exact path ='/visualizer' component={Visualizer}></Route>
      </Switch>
    </div>
  );
}

const ew = async ()=>{
 const o =   firestore.doc('users/FkZOS70mhPSiv4hNDDEY')
 const ref = await o.get()

 console.log(ref, "PEPE")
}
export default App;
