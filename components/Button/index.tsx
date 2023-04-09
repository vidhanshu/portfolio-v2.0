/**
 * variant @default 'primary' => 'primary' | 'secondary' | 'tertiary'
 * size @default 'medium' => 'small' | 'medium' | 'large'
 */

import { ButtonProps } from "@/@types/props";
import React from "react";
import styles from "../../styles/components/button.module.scss";

function Button({ variant, size, children, ...props }: ButtonProps) {
  const variantClass = styles[variant || "primary"];
  const sizeClass = styles[size || "medium"];

  return (
    <button {...props} className={`${variantClass} ${sizeClass} ${styles.btn}`}>
      {children}
    </button>
  );
}

export default Button;
