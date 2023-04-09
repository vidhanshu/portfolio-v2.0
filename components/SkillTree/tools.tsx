/**
 * @description Provides tools skill tree
 * @author @sobhanbera
 */

import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function ToolSkillsTree() {
  return (
    <ul>
      {/* text editors I use */}
      <TreeBranch title="Text Editor">
        <TreeLeaf title="Note pad" />
      </TreeBranch>

      {/* integrated development environment tools */}
      <TreeBranch title="IDEs">
        <TreeLeaf title="VS Code" />
        <TreeLeaf title="Android Studio" />
      </TreeBranch>

      {/* ui/ux tools */}
      <TreeBranch title="UI">
        <TreeLeaf title="Figma" />
        <TreeLeaf title="Adobe XD" />
      </TreeBranch>

      {/* operating systems */}
      <TreeBranch title="OS">
        <TreeLeaf title="Linux" />
      </TreeBranch>

      {/* deployment related tools */}
      <TreeBranch title="Deployment">
        <TreeLeaf title="Vercel" />
        <TreeLeaf title="GPages" />
        <TreeLeaf title="Netlify" />
      </TreeBranch>
    </ul>
  );
}
