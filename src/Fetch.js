import React,{useEffect,useState} from 'react';

function Fetch() {
    const [data, setData] = useState([]);
   useEffect(() => {

     fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(json=>setData(json))
       .catch(error => {
         console.error('Error fetching data:', error);
       });
   }, []);

   return (
    <div>
        {data.map(item=> <li key={item.id} > {item.title}</li>)}
    </div>
   )
}

export default Fetch;
