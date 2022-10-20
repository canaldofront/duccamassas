import styles from './Navlinks.module.scss';

const Navlinks = ({ toggleMenu }) => {
  return (
    <ul className={styles.list}>
      <li>
        <a href='#about' onClick={toggleMenu}>
          Sobre Nós
        </a>
      </li>
      <li>
        <a href='#reviews' onClick={toggleMenu}>
          Depoimentos
        </a>
      </li>
      <li>
        <a href='#location' onClick={toggleMenu}>
          Localização
        </a>
      </li>
      <li>
        <a href='#menu' onClick={toggleMenu}>
          Menu
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
