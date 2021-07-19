function ProductCard() {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                PIZZA CALABRESA
            </h3>
            <h3 className="order-card-price">
                R$: 50,00
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>Descrição do produto</p>
            </div>
        </div>
    );
}

export default ProductCard;