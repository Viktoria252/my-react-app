function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>
        <strong>Цена:</strong> {product.price} ₽
      </p>
      <p>
        <strong>Описание:</strong> {product.description?.slice(0, 100)}…
      </p>
      <h6>Статья об уходе</h6>
      <article>
        {product.article ? product.article.slice(0, 300) + '…' : 'Нет статьи об уходе'}
      </article>
    </div>
  );
}

export default ProductCard;