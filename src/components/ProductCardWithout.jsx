function ProductCardWithout(product) {
    return(
        <div className="card">
            <h3>{product.name}</h3>
            <p>
            <strong>Цена:</strong>
            <span>{product.price}</span> 
            ₽</p>
            <p>
            <strong>Уровень сложности ухода:</strong>
            {product.properties?.careLevel?.displayName}
            </p>
            <p>
            <strong>Требования к освещению:</strong>
            {product.properties?.lightRequirement?.displayName}
            </p>
            <p>
            <strong>Частота полива::</strong>
            {product.properties?.wateringFrequency?.displayName}
            </p>
            <p>
            <strong>Безопасно для животных:</strong>{product?.properties?.petSafe ? <span>Да</span> : <span>Нет</span>}
            </p>
        </div>
    )
}