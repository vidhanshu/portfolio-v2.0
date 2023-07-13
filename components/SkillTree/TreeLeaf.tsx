/**
 * @description Provides tree left
 * @author @sobhanbera
 */

/**
 * this component renders the single node or leaf
 * of the tree
 * here the tree could be nested
 */
interface TreeLeafProps {
  title: string;
}
export default function TreeLeaf({ title }: TreeLeafProps) {
  return (
    <li>
      <span  >{title}</span>
    </li>
  );
}
