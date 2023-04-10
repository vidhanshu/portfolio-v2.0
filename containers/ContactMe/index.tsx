import { EMAIL_ID_REDIRECT_URL, MY_EMAIL_ID } from "@/constants";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import React, { ChangeEvent, useState } from "react";

import { Button } from "@/components";
import ContactFormSvg from "@/public/assets/ContactFormSvg";
import { FormDataType } from "@/@types";
import styles from "@/styles/containers/contactme.module.scss";

function ContactMe() {
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.container}>
        {/* left information */}
        <div className={styles.left}>
          <h1 className={styles.title} data-aos="fade-up">
            Drop me a message!
          </h1>

          <p className={styles.description} data-aos="fade-up">
            You can contact me using below details! <br />
            <span className={styles.seperator}>Or</span>
            <br />
            Just fill that form and hit that send button
          </p>

          <div className={styles.contact_info} data-aos="fade-up">
            {/* address */}
            <div className={styles.info}>
              <span className={styles.bullet}>
                <MdLocationOn size={25} />
              </span>
              <p className={styles.info_text}>
                Dongargaon, Wardha road, Nagpur-441108
              </p>
            </div>

            {/* email */}
            <div className={styles.info} data-aos="fade-up">
              <span className={styles.bullet}>
                <MdAlternateEmail size={25} />
              </span>
              <a href={EMAIL_ID_REDIRECT_URL} className={styles.info_text}>
                {MY_EMAIL_ID}
              </a>
            </div>
          </div>
        </div>

        {/* right form */}

        <div className={styles.right}>
          <div className={styles.form_container}>
            <div data-aos="fade-left" data-aos-offset="300">
              <ContactFormSvg />
            </div>

            <form
              className={styles.form}
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <input
                value={formData.name}
                placeholder="Name"
                onChange={({
                  target: { value: name },
                }: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, name })
                }
              />
              <input
                value={formData.email}
                placeholder="Email"
                onChange={({
                  target: { value: email },
                }: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email })
                }
              />
              <textarea
                value={formData.message}
                placeholder="Message"
                onChange={({
                  target: { value: message },
                }: ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, message })
                }
              />
              <Button size="large" variant="tertiary">
                Send <span>-&gt;</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
