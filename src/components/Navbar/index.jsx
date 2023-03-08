import CartWidget from "../CartWidget";
import styles from "./navbar.module.scss";

const Navbar = ({ logo, icono }) => {
  return (
    <navbar className={styles.container}>
      <a href="">
        <img src={logo} width="60" height="60" />
      </a>
      <a href="">Home</a>
      <a href="">Productos</a>
      <a href="">Sobre Nosotros</a>
      <a href="">Contacto</a>

      <CartWidget icono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
    </navbar>
  );
};

export default Navbar;
