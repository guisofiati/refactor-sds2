import { checkIsSelected } from "../../helpers";
import { Product } from "../../types";
import ProductCard from "../ProductCard";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectedProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectedProduct }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectedProduct={onSelectedProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;