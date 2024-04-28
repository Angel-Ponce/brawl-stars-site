import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <Image
        className={styles.logo}
        src="/brawl-stars-logo.png"
        alt="brawl stars logo"
        width={361}
        height={291}
        priority
      />
      <div className={styles.yellow} />
    </section>
  );
};

export default Header;
