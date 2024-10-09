import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Details(){
    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = 'http://localhost:2222/Airpod/'+id;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>

            <h1>Name of the airpod is  {data.AirPodName}</h1>
            <img src={data.image} />
            <h3>price is {data.Price}</h3>
            <Link to="/Airpod" className="btn btn-info">Back</Link>

            <button className="btn btn-danger" onClick={()=>{
                const apiUrl = 'http://localhost:2222/Airpod/'+id;

                fetch(apiUrl, {method:"DELETE"})
                .then(res=>res.json())
                .then(res=>{
                    navigate('/AirPod');
                })

                

            }}>Delete</button>
            <button className="btn btn-primary" onClick={()=>{
            navigate('/Airpod/add/'+id);
            }}>edit</button>
            

        </>
    );
}

export default Details;