import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";
import {useHistory } from "react-router-dom";


    const OneProduct = () =>{

        const {_id} = useParams();
        const [details, setDetails] = useState({})
        const history = useHistory()


        useEffect(()=>{
            axios.get(`http://localhost:8000/api/products/${_id}`)
                .then(res=>{
                    setDetails(res.data.results);
                })
                .catch(err=>{
                    console.log("error 404... no API found." + err)
                })
    
        }, [])
    
    const deleteProduct = () =>{
        axios.delete(`http://localhost:8000/api/products/${_id}`)
                .then(res=>{
                    history.push('/')
                })
                .catch(err=>{
                    console.log("error 404... no API found." + err)
                })
        
    }



        return <div>
            <p>{details.title}</p>
            <p>{details.price}</p>
            <p>{details.description}</p>
            <Link to={`/product/details/${details._id}`} className='btn btn-info'>Edit</Link>
            <button className='btn btn-danger' onClick={deleteProduct}>Delete</button>
        </div>
    } 

    export default OneProduct