import logo from './logo.svg';
import './App.css';
import Home from './compond/Home';
import Task1 from './compond/Task1';
import { useEffect, useState } from 'react';
import Posts from './compond/Posts';


const data1=[{surname:'khedkar', firstname:'sandesh'},
{surname:'khedkar', firstname :'sandesh'},
{surname:'khedkar', firstname :'sandesh'},]
function App() { 
  const [data,setData]= useState([])
  const[posts,setPosts]=useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json =>setPosts(json))
    console.log(data);
  },[])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
       .then(response => response.json())
       .then(json =>setData(json))
     console.log(data);
   },[])
  return (
    
    // <div>
    // <Task1 surname='khedkar' firstname='sandesh'/>
    // <Task1 surname='khedkar' firstname='sanket'/>
    // <Task1 surname='khedkar' firstname='sandy'/>
    // </div>
    <div>
      {/* {data?.map((task,id)=><Task1 key={id} data={task}/>)} */}
      {posts?.map((post,id)=><Posts key={id} post={post}/>)}
    </div>
  );
}

export default App;
