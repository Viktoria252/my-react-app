function ProductCard({ product }) {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>
        <strong>Цена:</strong> {product.price} ₽
      </p>
      <p>
        <strong>Описание:</strong> {product.description?.slice(0, )}...
      </p>
      <h4>Статья об уходе</h4>
      <article>
        {product.article ? (
          <>
            <strong>{product.article.title}</strong>
            <p>{product.article.description?.slice(0, 150)}...</p>
            <p>Время чтения: {product.article.readTime} мин</p>
          </>
        ) : (
          <h6>Нет статьи об уходе</h6>
        )}
      </article>
    </div>
  );
}

export default ProductCard;