import { CERIFICATIONS } from "@/constants/certifications";
import CertificationCard from "@/components/CertificationCard";
import styles from "@/styles/containers/certifications.module.scss";

function Certifications() {
  return (
    <div className={`container ${styles.container}`} data-aos="fade-up">
      <div className={`grid_container_for_cards`}>
        {CERIFICATIONS.map((certification) => (
          <CertificationCard key={certification.id} {...certification} />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
