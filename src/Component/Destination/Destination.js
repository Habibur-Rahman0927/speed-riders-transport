import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Direction from '../Direction/Direction';
import Header from '../Header/Header';
import './Destination.css'


const Destination = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [search, setSearch] = useState(true);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('')
    return (
        <div>
            <Header></Header>
            {loggedInUser && <h3 style={{ textAlign: "center" }}>{`${loggedInUser.name} is Log In`}</h3>}
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        {search && <form action="" className="formDesgin">
                            <p> Pick From</p>
                            <input type="text" className="inputDesgin" onBlur={(e) => setOrigin(e.target.value)} placeholder="Enter your place" required/>
                            <br /><br />
                            <p>Pick To</p>
                            <input type="text" className="inputDesgin" onBlur={(e) => setDestination(e.target.value)} placeholder="Enter your destination Place" required/>
                            <br /><br />
                            <input type="button" value="Search" onClick={() => setSearch(!search)} className="searchBtn" />
                        </form>}
                        {search === false && <div className="cardBody">
                            <div className="backColor">
                            <p>From :{origin}</p>
                            <p>To : {destination}</p>
                            </div>
                        </div>}
                    </div>
                    <div className="col-md-8">
                        <Direction origin={origin} destination={destination}></Direction>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Destination;