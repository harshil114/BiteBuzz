const ItemList = ({ items }) => {
    return (
      <div>
        {items.map((item) => (
          <div className="items">
            <div className="item-name">{item.card.info.name}</div>
            <div className="item-desc">{item.card.info.description}</div>
            <hr />
          </div>
        ))}
      </div>
    );
  };
  export default ItemList;