import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';





function App() {
  var [anchorEl, setAnchorEl] = useState(null);
  var [data, setData] = useState([]);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
    // console.log(event.currentTarget.id);
    // console.log(Object.keys(event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  var handleDelete = (index) => {
    console.log("index: ", anchorEl.id);
  }


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

      return <div key={index} >
        _id: {eachItem._id}
         name: {eachItem.name}


        <button onClick={() => { handleDelete(eachItem._id) }}>Delete</button>
        <button
          // color="secondary"
          // variant="outlined"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          id={index}
        >
          open menu        </button>


        <Menu

          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "red" }}
            onClick={() => { handleDelete(eachItem._id) }}
          >
            Delete
             </MenuItem>

        </Menu>


      </div>


    }) : <div>Loading</div>
  );
}

export default App;
