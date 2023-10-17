import React, { useEffect, useReducer, useState } from 'react';


function Card() {
     const [userData, setUserData] = useState([]);
  
  const getUserData = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET"
    });
    const data = await response.json();
    setUserData(data)
   
  }

  useEffect(() => {
    getUserData()
  }, [])



  return (
    <div>
      <div id="card-id">
        {userData.map(function (data) {
          return (
            <div
              className="card"
              style={{ width: "25rem", cursor: "pointer" }}
              key={data.id}

            >
              <img src={data.image} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text1">{data.description}</p>
                <p className="card-text">${data.price}</p>
                <button className="btn btn-info">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Card;
