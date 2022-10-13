import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {getAllStarships} from '../../services/sw-api'





const ShipDetails = () => {
  const [allships, setAllShips]
  return ( 
    <>
         <div className="ship-div">
        <p>NAME: {shipDetails.name}</p>
        <p>MODEL: {shipDetails.model}</p>
        <Link to={'/'}><p>RETURN</p></Link>
      </div>

    {shipDetails.model ? 
          <div className="ship-div">
          <p>NAME: {shipDetails.name}</p>
          <p>MODEL: {shipDetails.model}</p>
          <Link to={'/'}><p>RETURN</p></Link>
        </div> :
        <div className="loading-text">Loading...</div>
  }

    </>
   );
}
 
export default ShipDetails