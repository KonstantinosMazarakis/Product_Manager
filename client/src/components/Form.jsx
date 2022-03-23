import React, {useState} from 'react';
import axios from 'axios';


const Form = (props) =>{
    let [title,setTitle] = useState("")
    let [price,setPrice] = useState("")
    let [description,setDescription] = useState("")
    let[validations,setValidations] = useState({})
    const createProduct = (e) =>{
        e.preventDefault()

        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products",formInfo)
        .then(res=>{
            console.log(res);
            if(res.data.error){
                setValidations(res.data.error.errors)
            }else{
            props.setFormSubmided(!props.formSubmited)
            setTitle("")
            setPrice("")
            setDescription("")
            setValidations({})
            }
        })
        .catch(err=>{
            console.log("error 404... no API found." + err)
        })
    }

    

return<>
<div>
<form onSubmit={createProduct}> 
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
    <input type="submit" value="Create"/>
</form>
</div>
</>
}
export default Form