import React from 'react'
import product2 from '../assets/wall38.png'
import des1 from '../assets/d1.png'
import './catalog.css'
import axios from 'axios'
import Product from '../components/Product/Product'
import prodList from './products'


function Catalog() {

    const [pList, setProds] = React.useState([])
   
    React.useEffect(()=>{
        axios.get('https://oe-api.herokuapp.com/api/product/get-products').then(res => setProds(res.data.prodData))
    })

    console.log(pList.prodData)

    const productList = pList.map((prod) => <Product key={prod._id} name={prod.prod_name} price={prod.prod_price} desc={prod.prod_desc} img={prod.img} />)

    return (
        <div className="catalog-bg">
            <div className="bgd1">
                <img src={des1} alt=""/>
                <h1 className="bgd1h">Our Products</h1>
            </div>
            <div className="catalog-bg">
                {productList}
            </div>
        </div>
        
    )
}

export default Catalog
