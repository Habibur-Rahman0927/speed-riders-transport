import React from 'react';
import { useHistory } from 'react-router';
import './Vaichles.css'

const Vaichles = (props) => {
    const { id, name, image } = props.vehicles;
    const history = useHistory()
    const handleDestination = (id) =>{
        history.push(`/destination/${id}`)
    }
    return (
        <div onClick={() => handleDestination(id)} className="vaichlesCard col-md-3">
            <div className="elementstyle">
                <div className="item">
                    <img src={image} alt="" />
                    <h1 className="h1marign">{name}</h1>
                </div>
            </div>

        </div>
    );
};

export default Vaichles;