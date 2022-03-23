import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link, useParams
} from "react-router-dom";


const Products = (props) => {
    let [report, setReport] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                setReport(response.data.results)
            }).catch(err => {
                console.log("error 404... no API found." + err)
            })

    }, [props.formSubmited,report])

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
                .then(res=>{
                    let filteredList = report.filter((productsObj)=>{
                        return productsObj._id != id
                    })
                })
                .catch(err=>{
                    console.log("error 404... no API found." + err)
                })
        
    }

    return (
        <div>
            <h2>All Products</h2>
            {
                report.map((productObj) => {
                    return (
                        <div key={productObj._id}>
                            <h3><Link to={`/details/${productObj._id}`}>{productObj.title}</Link></h3>
                            <button onClick={()=>{deleteProduct(productObj._id)}} className='btn btn-danger mb-4'>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
