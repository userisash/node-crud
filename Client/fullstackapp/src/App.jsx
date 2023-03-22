import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'



function App() {
  const [listOfUsers, setListOfUsers]= useState([{}])

  useEffect(()=>{
    Axios.get(`http://localhost:3001/getusers`).then((response)=>{
      setListOfUsers(response.data)
    })
  },[])

  return (
    <div className="App">
     <div className="usersdisplay">
      {listOfUsers.map((users, index)=>{
        return(
          <div key={index}>
            <p>name:{users.name}</p>
            <p>age:{users.age}</p>
            <p>username:{users.username}</p>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default App
