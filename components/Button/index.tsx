/**
 * variant @default 'primary' => 'primary' | 'secondary' | 'tertiary'
 * size @default 'medium' => 'small' | 'medium' | 'large'
 */

import { ButtonProps } from "@/@types";
import styles from "@/styles/components/button.module.scss";

function Button({ variant, size, children, disabled, ...props }: ButtonProps) {
  const variantClass = styles[variant || "primary"];
  const sizeClass = styles[size || "medium"];
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button {...props} className={`${variantClass} ${sizeClass} ${styles.btn} ${disabledClass}`}>
      {children}
    </button>
  );
}

export default Button;
