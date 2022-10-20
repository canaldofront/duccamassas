import Benefit from './Benefit';
import styles from './Benefits.module.scss';

const Benefits = ({ benefits }) => {
  const { title: title1, subtitle: subtitle1, icon: icon1 } = benefits[0];
  const { title: title2, subtitle: subtitle2, icon: icon2 } = benefits[1];
  const { title: title3, subtitle: subtitle3, icon: icon3 } = benefits[2];

  return (
    <section className={styles.benefits}>
      <div className={styles.top}>
        <Benefit title={title1} subtitle={subtitle1} icon={icon1} />
        <Benefit title={title2} subtitle={subtitle2} icon={icon2} />
      </div>

      <div className={styles.bottom}>
        <Benefit title={title3} subtitle={subtitle3} icon={icon3} />
      </div>
    </section>
  );
};

export default Benefits;
