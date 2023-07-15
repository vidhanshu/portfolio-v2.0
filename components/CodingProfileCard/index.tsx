/**
 * @description CodingProfileCard, provides card for each coding profile
 */

import Button from "../Button";
import { CodingProfileType } from "@/@types";
import styles from "@/styles/components/codingProfileCard.module.scss";
import { useTheme } from "@/context/theme";
import { arrayShortner, stringShortner } from "@/utils";

function CodingProfileCard({
  description,
  icon,
  languages_used,
  link,
  logo,
  title,
  contributions,
  forks,
  problem_solved,
  rating,
  stars,
}: CodingProfileType) {
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
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/${
              theme === "dark" ? logo : logo.replace(".", "-light.")
            }`}
            alt="codechef.png"
          />
        </div>

        <p className={styles.description}>{stringShortner(description, 320)}</p>
      </div>

      <div className={styles.middle}>
        <div className={styles.langs_used}>
          <p className={styles.key}>Languages Used:</p>

          <div className={styles.key_val}>
            {arrayShortner(languages_used, 3).map((lang) => (
              <p key={lang} className={styles.val}>
                {lang}
              </p>
            ))}
            <p className={styles.val}>...</p>
          </div>
        </div>

        {/* cp specific */}
        {rating && (
          <div className={styles.key_val}>
            <p className={styles.key}>Rating:</p>
            <p className={styles.val}>{rating}+</p>
          </div>
        )}
        {stars && (
          <div className={styles.key_val}>
            <p className={styles.key}>Stars:</p>
            <p className={styles.val}>{stars}</p>
          </div>
        )}
        {problem_solved && (
          <div className={styles.key_val}>
            <p className={styles.key}>Problems solved:</p>
            <p className={styles.val}>{problem_solved}+</p>
          </div>
        )}

        {/* github specific */}
        {forks && (
          <div className={styles.key_val}>
            <p className={styles.key}>Forks:</p>
            <p className={styles.val}>{forks}+</p>
          </div>
        )}
        {contributions && (
          <div className={styles.key_val}>
            <p className={styles.key}>Contributions:</p>
            <p className={styles.val}>{contributions}+</p>
          </div>
        )}
      </div>

      <a href={link} title="link to profile" target="_blank">
        <Button variant="secondary">Visit profile</Button>
      </a>
    </div>
  );
}

export default CodingProfileCard;
