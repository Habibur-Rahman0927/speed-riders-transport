import React from 'react';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-danger container '>Page Not Found 404...</h1>
        </div>
    );
};

export default NotFound;