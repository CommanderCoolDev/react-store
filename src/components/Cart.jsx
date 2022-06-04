function Cart(props) {
  const { qua = 0 } = props;
  return (
    <div className="cart white-text teal accent-4">
      <i className="material-icons">shopping_cart</i>
      {qua ? <span className="cartQua">{qua}</span> : null}
    </div>
  );
}
export { Cart };
