import React, {useEffect, useState} from 'react'
import {firestore, auth} from '../../firebase/firebase.utils'
import './visualizer-page.component.css' 

const Visualizer = ()=>{

    const [data, setData]= useState({});

    useEffect( () =>{
        
        const getReport = async()=>{
            const user =  auth.currentUser;
            if(user){
                const collectionReports = await  firestore.collection('reports').where("user","==",user.uid).get();
                collectionReports.forEach(collection =>{
                    setData(collection.data())
                });
            }else{
                setData({innerHtml:'<h1>No Data Available</h1>'})
            }
        }

        // Get Users
        // const getUsers= async() => {
        //     const collectionUsers = await  firestore.collection('users').get();
        //     collectionUsers.forEach(user =>{
        //         console.log(user.data(), user.id)
        //     })
        // }
        
        getReport();
        //getUsers();
        
    },[]);

    return(
        <div className="container center-container">
            <div className="row  justify-content-center align-items-center">
                <div>
                    <div className="visualizer-full" dangerouslySetInnerHTML={{ __html: data.innerHtml }}></div>
                </div>
            </div>
        </div>
        )
}

export default Visualizer