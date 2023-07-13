import { Button } from "@/components";
import { EMAIL_ID_REDIRECT_URL } from "@/constants";
import WhatIDoSvg from "@/public/assets/WhatIDoSvg";
import styles from "@/styles/containers/whatIDo.module.scss";

function WhatIDo() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <WhatIDoSvg />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>
            Better Design
            <br />
            Better Experience
          </h1>
          <p className={styles.description}>
            I can build beautiful user interfaces using my front end skills. I
            have experience of building web apps of more than 2 yrs and building
            android apps and UI/UX more than 1yr.
          </p>
          <a href={EMAIL_ID_REDIRECT_URL} target="_blank">
            <Button size="large" variant="secondary">
              Hire Me
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
