import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Error = () => {
    return (
        <div className="error-container">
        <div className="error-404"></div>
        <p>Lo lamentamos!! la pagina que buscas no existe</p>
        <Link to="/">
          <Button variant="success"> Home</Button>
        </Link>
      </div>
    );
};

export default Error;