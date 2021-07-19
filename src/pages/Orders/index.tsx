import './styles.css';

import StepsHeader from "../../components/StepsHeader";
import ProductsList from '../../components/ProductsList';

import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../../types';
import { fetchProducts } from '../../api';
import OrderSummary from '../../components/OrderSummary';
import Footer from '../../components/Footer';
import { checkIsSelected } from '../../helpers';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectedProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderSummary
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                />
            </div>
            <Footer />
        </>
    );
}

export default Orders;