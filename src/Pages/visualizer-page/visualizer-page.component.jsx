import React, { useEffect, useState } from 'react'
import { firestore, auth } from '../../firebase/firebase.utils'
import './visualizer-page.component.css'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const Visualizer = () => {

    const [data, setData] = useState({});

    const [listCollections, setlistCollections] = useState([]);

    useEffect(() => {

        const getReport = async () => {
            const user = auth.currentUser;
            if (user) {
                const collectionReports = await firestore.collection('reports').where("user", "==", user.uid).get();
                
                console.log(listCollections);

                collectionReports.forEach(collection => {
                    setData(collection.data())
                    setlistCollections(listCollections =>[...listCollections, collection.data()])
                });
            } else {
                setData({ innerHtml: '<h1>No Data Available</h1>' })
            }
            console.log(listCollections);
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

    const afterSelection = (item) =>{
        console.log(item)
        setData(item)
    }

    return (
        <div className="container center-container">
            <div class="row">
                <div class="col-4 alignment-text">{data.name}</div>
                <div class="col-6"></div>
                <div class = "col-2">
                <DropdownButton id="dropdown-item-button" variant="secondary" title="Informes Usuario">
                {
                    listCollections.map( item => (
                        <Dropdown.Item as="button" disabled={item.name === data.name} onClick={() => afterSelection(item)} key={item.name}>{item.name}</Dropdown.Item>

                    ))
                }
            </DropdownButton>
                </div>
            </div>
            
            <div className="row  justify-content-center align-items-center">
                
                <div>
                    <div className="visualizer-full" dangerouslySetInnerHTML={{ __html: data.innerHtml }}></div>
                </div>
            </div>

            
        </div>
    )
}

export default Visualizer