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

    }, [props.formSubmited])

    return (
        <div>
            <h2>All Products</h2>
            {
                report.map((productObj) => {
                    return (
                        <div key={productObj._id}>
                            <h3><Link to={`/details/${productObj._id}`}>{productObj.title}</Link></h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
