import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import { WHAT_I_DO_STRING } from "@/constants";
import WhatIDoSvg from "@/public/assets/WhatIDoSvg";
import styles from "../../styles/containers/whatIDo.module.scss";

function WhatIDo() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-up">
          <WhatIDoSvg />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title} data-aos="fade-up">
            Better Design
            <br />
            Better Experience
          </h1>
          <p className={styles.description} data-aos="fade-up">
            I can build beautiful user interfaces using my front end skills. I
            have experience of building web apps of more than 2 yrs, building
            android apps more 1 yr, and creating UI/UX also more than 1yr.
          </p>
          <Button data-aos="fade-up" size="large" variant="secondary">
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
