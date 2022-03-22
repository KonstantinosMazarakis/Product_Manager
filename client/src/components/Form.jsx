import React, {useState} from 'react';
import axios from 'axios';

const Form = () =>{
    let [title,setTitle] = useState("")
    let [price,setPrice] = useState("")
    let [description,setDescription] = useState("")
    

    const createProduct = (e) =>{
        e.preventDefault()

        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products",formInfo)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log("error 404... no API found." + err)
        })
    }


return<>
<div>
<form onSubmit={createProduct}> 
    <div>
        <label>Title: </label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
    </div>
    <div>
        <label>Price: </label>
        <input type="text" onChange={(e)=>{setPrice(e.target.value)}} />
    </div>
    <div>
        <label>Description: </label>
        <input type="text" onChange={(e)=>{setDescription(e.target.value)}} />
    </div>
    <input type="submit" value="Create"/>
</form>
</div>
</>
}
export default Form