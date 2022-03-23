import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import {useHistory } from "react-router-dom";

const EditForm = (props) =>{
    let [title,setTitle] = useState("")
    let [price,setPrice] = useState("")
    let [description,setDescription] = useState("")
    let[validations,setValidations] = useState({})
    const history = useHistory()

    const {_id} = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                setTitle(res.data.results.title)
                setPrice(res.data.results.price)
                setDescription(res.data.results.description)
            })
            .catch(err=>{
                console.log("error 404... no API found." + err)
            })

    }, [])


    const EditProduct = (e) =>{
        e.preventDefault()

        let formInfo = {title, price, description};

        axios.put(`http://localhost:8000/api/products/${_id}`,formInfo)
        .then(res=>{
            if(res.data.error){
                setValidations(res.data.error.errors)
            }else{
            props.setFormSubmided(!props.formSubmited)
            setTitle("")
            setPrice("")
            setDescription("")
            history.push('/')
            }
        })
        .catch(err=>{
            console.log("error 404... no API found." + err)
        })
    }


return<>
<div>
<form onSubmit={EditProduct}> 
    <div>
        <p className='text-danger'>{validations.title?.message}</p>
        <p className='text-danger'>{validations.price?.message}</p>
        <p className='text-danger'>{validations.description?.message}</p>
        <label>Title: </label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
    </div>
    <div>
        <label>Price: </label>
        <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
    </div>
    <div>
        <label>Description: </label>
        <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
    </div>
    <input type="submit" value="Edit Form"/>
</form>
</div>
</>
}
export default EditForm