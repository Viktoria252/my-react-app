function ProductCard({product}) {
    return(
        <div className="card">
            <h3>{product.name}</h3>
            <p>
            <strong>Цена:</strong>
            <span>{product.price}</span> 
            ₽</p>
            <p>{product.description}
            <strong>Описание:</strong> 
            <span>product.description.slice(0, 100) + '…'</span>
            </p>
            <h6>Статья об уходе</h6>
            <article>
                {product.article.slice(0, 300) + '…'}
            </article>
        </div>
    )
}