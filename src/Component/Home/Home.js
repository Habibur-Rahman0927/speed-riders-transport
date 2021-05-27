import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Vaichles from '../Vaichles/Vaichles';
import './Home.css'

const Home = () => {
    const [vaichle, setVaichle] = useState([]);

    const vaichles = [
        {
            id : 1,
            name : "BIKE",
            image : "https://i.ibb.co/HxDWWSX/Frame.png" 
        },
        {
            id : 2,
            name : "CAR",
            image : "https://i.ibb.co/bgPCQ7g/Frame-2.png" 
        },
        {
            id : 3,
            name : "BUS",
            image : "https://i.ibb.co/d6BdtNL/Frame-1.png" 
        },
        {
            id : 4,
            name : "TRAIN",
            image : "https://i.ibb.co/Lvv5crD/Group.png" 
        }
    ]
    
    useEffect(() => {
        fetch(vaichles)
        .then(data => setVaichle(data))
    }, [])
    return (
        <div className="background">
            <div className=" container">
            <Header></Header>

                <div className="row">
                    {
                        vaichles.map(vehicles => <Vaichles vehicles={vehicles}></Vaichles>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
/* style={{ backgroundImage: `url(${backgroundImage})` ,height:'1000px'}} className="header" */