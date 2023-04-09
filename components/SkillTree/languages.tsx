/**
 * @description Provides languages skill tree
 * @author @sobhanbera
 */

import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function LanguageSkillsTree() {
  return (
    <ul data-aos="fade-up">
      {/* languages I use for web development */}
      <TreeBranch title="Website">
        <TreeLeaf title="JS" />
        <TreeLeaf title="Typescript" />
        <TreeLeaf title="SCSS" />
      </TreeBranch>

      {/* languages I use for android development */}
      <TreeBranch title="Android">
        <TreeLeaf title="Typescript" />
        <TreeLeaf title="JavaScript" />
      </TreeBranch>

      {/* languages I use for competitive programming */}
      <TreeBranch title="DBMS">
        <TreeLeaf title="SQL" />
      </TreeBranch>

      {/* languages I use for competitive programming */}
      <TreeBranch title="CP">
        <TreeLeaf title="C++" />
        <TreeLeaf title="Python" />
      </TreeBranch>

      {/* other langauges I know */}
      <TreeBranch title="Others">
        <TreeLeaf title="Markdown" />
        <TreeLeaf title="Kotlin" />
      </TreeBranch>
    </ul>
  );
}
