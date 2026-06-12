function ProductCardWithout({product}) {
    const getCareLevel = (level) => {
        switch(level) {
            case "SIMPLE": return "простой";
            case "MEDIUM": return "средний";
            case "COMPLEX": return "сложной";
            default: return level;
        }
    }
    const getLightRequirement = (light) => {
        switch(light) {
            case "LOW": return "тень";
            case "MEDIUM": return "полутень";
            case "HIGH": return "яркий свет";
            case "DIRECT": return "прямое солнце";
            default: return light;
        }
    }
    const getWateringFrequency = (watering) => {
        switch(watering) {
            case "RARE": return "редко";
            case "MODERATE": return "умеренно";
            case "FREQUENT": return "обильно";
            default: return watering;
        }
    }

    return(
        <div className="card">
            <h3>{product.name}</h3>
            <p>
            <strong>Цена: </strong>
            <span>{product.price}</span> 
            ₽</p>
            <p>
            <strong>Уровень сложности ухода: </strong>
            {getCareLevel(product.properties?.careLevel)}
            </p>
            <p>
            <strong>Требования к освещению: </strong>
            {getLightRequirement(product.properties?.lightRequirement)}
            </p>
            <p>
            <strong>Частота полива: </strong>
            {getWateringFrequency(product.properties?.wateringFrequency)}
            </p>
            <p>
            <strong>Безопасно для животных: </strong>
            {product?.properties?.petSafe ? <span>да</span> : <span>нет</span>}
            </p>
        </div>
    )
}

export default ProductCardWithout