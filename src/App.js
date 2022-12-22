// import logo from './logo.svg';
// import './App.css';
// import Home from './compond/Home';
// import Task1 from './compond/Task1';
// import { useEffect, useState } from 'react';
// import Photos from './compond/Photos';


// const data1=[{surname:'khedkar', firstname:'sandesh'},
// {surname:'khedkar', firstname :'sandesh'},
// {surname:'khedkar', firstname :'sandesh'},]
// function App() { 
//   const [data,setData]= useState([])
//   const[posts,setPosts]=useState([])
//   const[comments,setComments]=useState([])
//   const[photos,setPhotos]=useState([])

//   useEffect(()=>{
//    fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json =>setPosts(json))
//     console.log(data);
//   },[])

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//        .then(response => response.json())
//        .then(json =>setData(json))
//      console.log(data);
//    },[])

//    useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/comments')
//        .then(response => response.json())
//        .then(json =>setComments(json))
//      console.log(data);
//    },[])

//    useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/photos')
//        .then(response => response.json())
//        .then(json =>setPhotos(json))
//      console.log(data);
//    },[])
//   return (
    
//     // <div>
//     // <Task1 surname='khedkar' firstname='sandesh'/>
//     // <Task1 surname='khedkar' firstname='sanket'/>
//     // <Task1 surname='khedkar' firstname='sandy'/>
//     // </div>
//     <div>
//       {/* {data?.map((task,id)=><Task1 key={id} data={task}/>)} */}
//       {/* {posts?.map((post,id)=><Posts key={id} post={post}/>)} */}
//       {/* {comments?.map((comment,id)=><Comments key={id} comment={comment}/>)} */}
//       {photos?.map((photo,id)=><Photos key={id} photo={photo}/>)}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';

   const App =()=>{
  useEffect(()=>{
    console.log("hello");
    setData(0)
  })
   
  const [data,setData]=useState()
  useEffect(()=>{
    console.log("this is data");
    
  },[])

  useEffect(()=>{
    console.log("empty data");
  },[data])
  const click=()=>{
    setData(data + 1)
   
    
  }
  return (


    <div>
       <button onClick={click}>BUTTON</button>
       <p>{data}</p>
    </div>
  );
}

export default App;
