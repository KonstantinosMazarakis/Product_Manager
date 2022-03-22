import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';


    const OneProduct = () =>{

        const {_id} = useParams();
        const [details, setDetails] = useState({})

        useEffect(()=>{
            axios.get(`http://localhost:8000/api/products/${_id}`)
                .then(res=>{
                    setDetails(res.data.results);
                })
                .catch(err=>{
                    console.log("error 404... no API found." + err)
                })
    
        }, [])
    

        return <div>
            <p>{details.title}</p>
            <p>{details.price}</p>
            <p>{details.description}</p>
        </div>
    } 

    export default OneProduct