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
        
        getReport()
        
    },[]);

    return(
        <div className="container center-container">
            <div className="visualizer-full" dangerouslySetInnerHTML={{ __html: data.innerHtml }}></div>
        </div>
        )
}

export default Visualizer