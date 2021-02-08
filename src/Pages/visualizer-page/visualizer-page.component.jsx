import React, {useEffect, useState} from 'react'
import {firestore, auth} from '../../firebase/firebase.utils'

import PDFViewer from 'pdf-viewer-reactjs'
import './visualizer-page.component.css' 

const Visualizer = ()=>{

    const [data, setData]= useState({});

    useEffect( () =>{
        console.log('HOLA')
        async function fn(){
            const user =  auth.currentUser;
            console.log(user, 'USER')
            if(user){
                const y =  firestore.collection('reports').where("user","==",user.uid);
                const p =await  y.get();
            p.forEach(po =>{
                console.log(po.data(), 'AQUI');
                setData(po.data())
                console.log(data, 'LOL')
            })
            }
            // const y =  firestore.collection('reports').where("user","==","U5w6UVm2B8Nr3mkbMbi8zGbcs6A3");
            // const p =await  y.get();
            // p.forEach(po =>{
            //     console.log(po.data(), 'AQUI');
            //     setData(po.data())
            //     console.log(data, 'LOL')
            // })
        
        }

        fn()
        
    },[]);

    const t = '<iframe src="https://estudusfqedu-my.sharepoint.com/:p:/g/personal/aduque_alumni_usfq_edu_ec/ESRHSUwLwT5MuUBnyeEbO3wB5PtnKJTNe2VrfuA-Tdgthg?e=F1EWmZ?sourcedoc={4c494724-c10b-4c3e-b940-67c9e11b3b7c}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'
    return(
        <div className="container">
          {/* <iframe src="https://estudusfqedu-my.sharepoint.com/personal/aduque_alumni_usfq_edu_ec/_layouts/15/Doc.aspx?sourcedoc={4c494724-c10b-4c3e-b940-67c9e11b3b7c}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="610px" height="367px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe> */}
        <div dangerouslySetInnerHTML={{ __html: data.innerHtml }}> 

        </div>
        </div>
        )
}

export default Visualizer