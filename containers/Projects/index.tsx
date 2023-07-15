import Button from "@/components/Button";
import Tabs from "@/components/Tabs";
import { GITHUB_URL, PROJECTS } from "@/constants";

import styles from "@/styles/containers/projects.module.scss";

function Projects() {
  return (
    <div className={`container`}>
      <div className={`${styles.wrapper}`}>
        <Tabs
          tabs={["All", "Web", "Android", "UI/UX", "CLI"]}
          data={PROJECTS}
        />
      </div>
      <div className={styles.btn_grp}>
        <a href={`${GITHUB_URL}?tab=repositories`} target="_blank">
          <Button size="large" variant="secondary">
            See more
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
