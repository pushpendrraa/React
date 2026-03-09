import React from 'react'
import {useState,useEffect} from 'react'

function List() {

       const[data,setdata]=useState([])
       const[status,setstatus]=useState(true)

       useEffect(()=>{
              fetch('https://jsonplaceholder.typicode.com/posts')
              .then(Response=>Response.json())
                .then(data=>{
                     setdata(data);
                     setstatus(false);
                });

       },[]);

  return (
    <div>
      {status ? (<h1>Loading......</h1>):(

       <ul>
              {data.map(data=>(
                     <li key={data.id}>{data.title}</li>
              ))}
       </ul>
      )}
    </div>
  );
}

export default List