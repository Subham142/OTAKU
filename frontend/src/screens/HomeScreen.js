import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import loader from '../components/loader'
import message from '../components/message'
import { listProducts } from '../actions/productActions';
const HomeScreens = () => {
    const dispatch = useDispatch()

    const productList=useSelector(state => state.productList)
    const {loading,error,products} = productList

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (<loader/>) : error ?(<message variant ='danger'>{error}</message>) 
            : <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product ={product} />
                </Col>
            ))}
        </Row>
        }
            
        </>
    )
}

export default HomeScreens
