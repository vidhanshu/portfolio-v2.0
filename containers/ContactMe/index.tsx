import { ChangeEvent, useCallback, useState } from "react";
import { EMAIL_ID_REDIRECT_URL, EMAIL_REGEX, MY_EMAIL_ID } from "@/constants";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";

import { Button } from "@/components";
import ContactFormSvg from "@/public/assets/ContactFormSvg";
import { FormDataType } from "@/@types";
import axios from "axios";
import styles from "@/styles/containers/contactme.module.scss";
import { toast } from "react-toastify";

function ContactMe() {
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);
  const [loading, setLoading] = useState(false);

  const handleMail = useCallback(async () => {
    try {
      setLoading(true);
      if (!formData.name || !formData.email || !formData.message) {
        return toast.info("Please fill all the fields", {
          theme: "light",
          autoClose: 2000,
        });
      } else if (EMAIL_REGEX.test(formData.email) === false) {
        return toast.info("Please enter a valid email", {
          theme: "light",
          autoClose: 2000,
        });
      }

      await axios.post("/api/contact", {
        email: formData.email.trim(),
        name: formData.name.trim(),
        message: formData.message.trim(),
      });

      toast.success("Message sent successfully", {
        theme: "light",
        autoClose: 2000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong", {
        theme: "light",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.container}>
        {/* left information */}
        <div className={styles.left}>
          <h1 className={styles.title}>Drop me a message!</h1>

          <p className={styles.description}>
            You can contact me using below details! <br />
            <span className={styles.seperator}>Or</span>
            <br />
            Just fill that form and hit that send button
          </p>

          <div className={styles.contact_info}>
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
            <div className={styles.info}>
              <span className={styles.bullet}>
                <MdAlternateEmail size={25} />
              </span>
              <a
                href={EMAIL_ID_REDIRECT_URL}
                target="_blank"
                className={styles.info_text}
              >
                {MY_EMAIL_ID}
              </a>
            </div>
          </div>
        </div>

        {/* right form */}

        <div className={styles.right}>
          <div className={styles.form_container}>
            <div>
              <ContactFormSvg />
            </div>

            <div className={styles.form}>
              <input
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={({
                  target: { value: name },
                }: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, name })
                }
              />
              <input
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                onChange={({
                  target: { value: email },
                }: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email })
                }
              />
              <textarea
                name="message"
                rows={10}
                value={formData.message}
                placeholder="Message"
                onChange={({
                  target: { value: message },
                }: ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, message })
                }
              />
              <p className={styles.note}>
                <i>Note</i>: your email and name will be collected and stored in
                our database
              </p>
              {loading ? (
                <Button disabled={loading} size="large" variant="tertiary">
                  Sending...
                </Button>
              ) : (
                <Button onClick={handleMail} size="large" variant="tertiary">
                  Send <span>-&gt;</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
