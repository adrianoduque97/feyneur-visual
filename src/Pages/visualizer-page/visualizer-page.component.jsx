import React, {useEffect, useState} from 'react'
import {firestore, auth} from '../../firebase/firebase.utils'

import PDFViewer from 'pdf-viewer-reactjs'
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

    const t = '<iframe src="https://estudusfqedu-my.sharepoint.com/:p:/g/personal/aduque_alumni_usfq_edu_ec/ESRHSUwLwT5MuUBnyeEbO3wB5PtnKJTNe2VrfuA-Tdgthg?e=F1EWmZ?sourcedoc={4c494724-c10b-4c3e-b940-67c9e11b3b7c}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'
    return(
        <div className="container center-container">
            <div className="visualizer-full" dangerouslySetInnerHTML={{ __html: data.innerHtml }}></div>
        </div>
        )
}

export default Visualizer