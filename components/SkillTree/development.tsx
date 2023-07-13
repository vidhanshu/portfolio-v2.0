/**
 * @description Provides development skill tree
 * @author @sobhanbera
 */

import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function DevelopmentSkillsTree() {
  return (
    <ul>
      {/* web development skills */}
      <TreeBranch title="Website">
        <TreeBranch title="Frontend">
          <TreeLeaf title="Next" />
          <TreeLeaf title="React" />
        </TreeBranch>

        <TreeBranch title="Backend">
          <TreeLeaf title="Express" />
        </TreeBranch>
      </TreeBranch>

      {/* android development skills */}
      <TreeBranch title="Android Apps">
        <TreeLeaf title="React Native" />
      </TreeBranch>

      {/* git and github */}
      <TreeBranch title="Version Control">
        <TreeBranch title="Git">
          <TreeLeaf title="GitHub" />
        </TreeBranch>
      </TreeBranch>

      {/* databases */}
      <TreeBranch title="Databases">
        <TreeBranch title="RDBMS">
          <TreeLeaf title="MySQL" />
          <TreeLeaf title="PostgreSQL" />
        </TreeBranch>

        <TreeBranch title="NoSQL">
          <TreeLeaf title="MongoDB" />
          <TreeLeaf title="Firebase" />
        </TreeBranch>
      </TreeBranch>

      {/* clouds services */}
      <TreeBranch title="Cloud">
        <TreeLeaf title="GCP" />

        <TreeLeaf title="AWS" />
      </TreeBranch>
    </ul>
  );
}
