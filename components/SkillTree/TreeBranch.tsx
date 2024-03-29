/**
 * @description Provides treebranch skill tree
 * @author @sobhanbera
 */


/**
 * this component render the sub-tree or the branch of trees sub furthure more
 * nested
 */
interface TreeLeafProps {
  title: string;
  children: React.ReactNode;
}
export default function TreeBranch({ title, children }: TreeLeafProps) {
  return (
    <li  >
      <span  >{title}</span>

      <ul  >{children}</ul>
    </li>
  );
}
