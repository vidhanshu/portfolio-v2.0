/**
 * @description CertificationCard component, provides card for each certification
 */

import Button from "../Button";
import { CertificationType } from "@/@types";
import styles from "@/styles/components/certificationCard.module.scss";
import { useTheme } from "@/context/theme";

function CertificationCard({
  description,
  icon,
  image,
  logo,
  title,
  certificate,
  project,
}: CertificationType) {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.container} card_hover_effect`}
      style={{
        backgroundImage: `url(/assets/${
          theme === "dark" ? icon : icon.replace(".", "-light.")
        })`,
      }}
    >
      <div className={styles.top}>
        <h1 className={styles.title}>{title}</h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/${
            theme === "dark" ? logo : logo.replace(".", "-light.")
          }`}
          alt={logo}
        />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/assets/${image}`} alt={image} />

      <p className={styles.description}>{description}</p>

      {certificate && (
        <a href={certificate} target="_blank">
          <Button variant="secondary">Certificate</Button>
        </a>
      )}

      {project && (
        <a href={project} target="_blank">
          <Button variant="secondary">Projects</Button>
        </a>
      )}
    </div>
  );
}

export default CertificationCard;
