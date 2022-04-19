import React, { useState, useEffect} from "react";
import { useFetch } from "../CustomHook/useFetch";

const Home = ()=>{
    const { data } = useFetch()
    const [users, setUsers ]= useState([]);
    const [ index, setIndex] = useState(0);

    useEffect(()=>{
        let initialIndex = index * 5;
        let finalIndex = initialIndex + 5;
        setUsers(data.results?.slice(initialIndex, finalIndex))
    }, [data, index])

    console.log(users)
    return (
        <div>
            <h1>Home</h1>
            <ul>
            {
                users?.map(item =>
                    <li key={item.id}>{item.name}</li>
                )
            }
            </ul>

            <div>
                {
                    users?.map((item, i)=>
                        <button key={item.id}
                            onClick={()=> setIndex(i)}
                            >{i === 0 ? 1 : i === 4 ? null : i + 1}</button>
                    )
                }
            </div>
        </div>
    )
}

export default React.memo(Home);