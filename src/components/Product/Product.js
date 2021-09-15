import React from 'react'
import './Product.css'

function Product(props){
    console.log(props)
    return(
        <div className="d1">
            <img className="img" src={props.img} alt="solo" />
            <h2 className="dh2">{props.name}</h2>
            <h3 className="dh3">{props.price}</h3>
            <p className="dhp">{props.desc}</p>
        </div>
    )    
}

export default Product