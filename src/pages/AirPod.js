import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AirPod() {

    const [data, setData] = useState([]);

    const apiUrl = 'http://localhost:2222/Airpod';

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const foramtedData = data.map((a)=>{
        return(
        <div className="card" style={{width: "18rem", display:'inline-block',
                margin:'10px',padding:'10px',border:'1px solid black',borderRadius:'10px',
                backgroundColor:'lightblue',boxShadow:'5px 5px 5px 5px grey'
            }}>
                <div className="card-body">
                    <h5 className="card-title" style={{border:'1px solid black'}} >{a.AirPodName}</h5>
                    <img className="border border-dark" src={a.image} style={{width:'100px',height:'100px'}}/>
                    <br/>
                    <br/>
                    <Link className="btn btn-dark" to={"/AirPod/"+a.id}>Read More</Link>
                </div>
            </div>
        );
    })


      
    return (
        <>
            <Link className="btn btn-primary" to={"/Airpod/add"}>ADD</Link>
            <table className="table">{foramtedData}</table>
        </>

    );
}

export default AirPod;