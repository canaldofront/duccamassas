import styles from './Header.module.scss';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../sanity';

const Header = ({ header }) => {
  const imageProps = useNextSanityImage(client, header.image);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </header>
  );
};

export default Header;
