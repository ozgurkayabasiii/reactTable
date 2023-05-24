import Table from "./Table";
import axios from 'axios'
import { useState,useEffect } from "react";
import { IPost } from "./Types/Types";

function App() {
  const[data,setData]=useState<IPost[]>([])
  const fetchData= async()=>{
    const url="https://jsonplaceholder.typicode.com/posts"
    const response=await axios.get<IPost[]>(url)
    setData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <><Table data={data}></Table></>
  );
}

export default App;
