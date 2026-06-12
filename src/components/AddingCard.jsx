function AddingCard({ products, data, onChange, onSubmit, message }) {
  return (
    <div className="add-card">
      <h2>Добавить статью</h2>
      {message && <p style={{color: 'green'}}>{message}</p>}
      
      <form onSubmit={onSubmit}>
        <select name="productName" value={data.productName} onChange={onChange} required>
          <option value="">Выберите товар</option>
          {products.map(product => (
            <option key={product.id} value={product.name}>{product.name}</option>
          ))}
        </select>
        
        <input name="title" placeholder="Заголовок" value={data.title} onChange={onChange} required />
        <input name="readTime" type="number" placeholder="Время чтения" value={data.readTime} onChange={onChange} required />
        <textarea name="description" placeholder="Описание" value={data.description} onChange={onChange} required />
        
        <select name="plantFamily" value={data.plantFamily} onChange={onChange} required>
          <option value="">Семейство</option>
          <option value="DECORATIVE_FLOWERING">Декоративно-цветущие</option>
          <option value="DECORATIVE_DECIDUOUS">Декоративно-лиственные</option>
          <option value="CACTI">Кактусы</option>
          <option value="SUCCULENT">Cуккуленты</option>
          <option value="PALM">Пальмы</option>
          <option value="FERN">Папоротники</option>
          <option value="ORCHID">Орхидеи</option>
          <option value="BROMELIADS">Бромелиевые</option>
          <option value="CONIFEROUS_TREES">Хвойные</option>
          <option value="FRUITING">Плодоносящие</option>
          <option value="BULBOUS">Луковичные</option>
        </select>
        
        <textarea name="text.care" placeholder="Уход" value={data.textArticle.care} onChange={onChange} required rows="6" />
        <textarea name="text.replication" placeholder="Размножение" value={data.textArticle.replication} onChange={onChange} required rows="6" />
        <textarea name="text.illness" placeholder="Болезни" value={data.textArticle.illness} onChange={onChange} required rows="6" />
        <textarea name="text.pests" placeholder="Вредители" value={data.textArticle.pests} onChange={onChange} required rows="6" />
        
        <button type="submit">Добавить</button>
      </form>
    </div>
  )
}

export default AddingCard