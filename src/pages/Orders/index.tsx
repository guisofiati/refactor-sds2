import './styles.css';

import StepsHeader from "../../components/StepsHeader";
import ProductsList from '../../components/ProductsList';

import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../../types';
import { fetchProducts } from '../../api';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <StepsHeader />
            <ProductsList products={products}/>          
        </>
    );
}

export default Orders;