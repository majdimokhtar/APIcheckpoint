import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";function UserList() {
  const [data, setData] = useState("");
  
  const getAllData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getAllData();
  }, []);
  const displayData = () => {
    return data ? ( 
      data.map((data) => {
        return ( 
            
            <div className="container" style={{width:'290px',height:'300px'}}>
              <h4> {data.name} </h4>
              <p> {data.phone} </p>
              <p> {data.username} </p>
              <p> {data.address.street} </p>
              <p> {data.address.suite} </p>
              

              </div>

        );
      })
    ) : (
      <h3 style={{color:'white'}}>No data yet</h3>
    );
  }
  return (
    <>
      {displayData()}
    </>
  );
}
export default UserList;