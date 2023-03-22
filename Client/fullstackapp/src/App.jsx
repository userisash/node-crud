import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'



function App() {
  const [listOfUsers, setListOfUsers]= useState([{}])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUserName] = useState("")


  useEffect(()=>{
    Axios.get(`http://localhost:3001/getusers`).then((response)=>{
      setListOfUsers(response.data)
    })
  },[])

  const CreateUser = () =>{
    Axios.post(`http://localhost:3001/createuser`, {name, age, username}).then((response)=>{
      setListOfUsers([...listOfUsers, {name, age, username}])
    })
  }

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

     <div>
      <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
      <input type="number" placeholder='Age'onChange={(e)=>{setAge(e.target.value)}}/>
      <input type="text" placeholder='UserName'onChange={(e)=>{setUserName(e.target.value)}} />
      <button onClick={CreateUser}>Create User</button>
     </div>
    </div>
  )
}

export default App
