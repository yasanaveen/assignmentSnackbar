import React,{useEffect,useState} from 'react'

const FetchUsingAxios = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>setData(response.data))
    },[])
  return (
    <div>
        {data.map((item) => <li key={item.id}>{item.title}</li>)}
     </div>
  )
}

export default FetchUsingAxios;