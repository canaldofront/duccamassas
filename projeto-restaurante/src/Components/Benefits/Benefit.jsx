import styles from './Benefit.module.scss';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../sanity';
import Image from 'next/image';

const Benefit = ({ title, subtitle, icon }) => {
  const iconProps = useNextSanityImage(client, icon);

  return (
    <div className={styles.benefit}>
      <Image
        src={iconProps.src}
        loader={iconProps.loader}
        width={56}
        height={56}
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Benefit;
