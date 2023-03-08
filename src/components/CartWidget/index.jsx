import styles from "./cartWidget.module.scss";

function CartWidget({ icono }) {
  return (
    <div>
      <div className={styles.container}>
        <a href="">
          <img src={icono} alt="" width="40" height="40" />
        </a>
        <p className={styles.cantidad}>3</p>
      </div>
    </div>
  );
}

export default CartWidget;
