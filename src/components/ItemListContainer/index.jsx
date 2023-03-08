import styles from "./itemlistcontainer.module.scss";

function ItemListContainer({ mensaje }) {
  return (
    <div>
      <p className={styles.item}>{mensaje}</p>
    </div>
  );
}

export default ItemListContainer;
