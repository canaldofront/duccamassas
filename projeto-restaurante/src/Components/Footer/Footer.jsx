import styles from './Footer.module.scss';
import Image from 'next/image';
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = ({ footer }) => {
  const renderLinks = footer.links.map((link) => (
    <li key={link._id}>
      <a href={link.url}>{link.title}</a>
    </li>
  ));

  const renderContato = footer.contato.map((item) => (
    <li key={item._id}>{item.text}</li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.main}>
          <a href='#'>
            <Image
              src='/logo_red.png'
              alt='DUCCA Massas'
              width={180}
              height={38}
            />
          </a>
          <h3>{footer.text}</h3>
          <ul>
            <li>
              <a href={footer.instagram}>
                <FaInstagramSquare className='icon' />
              </a>
            </li>
            <li>
              <a href={footer.facebook}>
                <FaFacebookSquare className='icon' />
              </a>
            </li>
            <li>
              <a href={footer.linkedin}>
                <FaLinkedin className='icon' />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Links</h2>
          <ul>{renderLinks}</ul>
        </div>
        <div className={styles.contato}>
          <h2>Contato</h2>
          <ul>{renderContato}</ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>DUCCA Massas - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
