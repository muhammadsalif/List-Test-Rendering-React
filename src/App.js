import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"



var handleDelete = (index) => {
  console.log("index: ", index);
}




function App() {

  var [data, setData] = useState([]);


  useEffect(() => {
    function apiCall() {
      axios.get("http://localhost:5000/sensors?chipsetId=5ff749ac122adf1b68dc6b12")
        .then((_response) => {

          setData(_response.data)

        });
    }
    apiCall()
  }, []);


  return (
    (data && data.length) ? data.map((eachItem, index) => {

      return <div >
         _id: {eachItem._id}
         name: {eachItem.name}

        <button onClick={() => { handleDelete(eachItem._id) }}>Delete</button>
      </div>


    }) : <div>Loading</div>
  );
}

export default App;
